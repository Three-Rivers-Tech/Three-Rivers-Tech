"use client";

import { useEffect, useRef } from "react";
import type { MutableRefObject } from "react";

/**
 * ServiceWorkerRegistration
 * Securely registers the service worker and handles vetted messages.
 *
 * Security Enhancements:
 * - Source validation (only accept messages from active or waiting worker)
 * - Handshake token required in every message (`sessionToken`)
 * - Strict schema/type guards and allow-list
 * - Payload size limits & silent failure on invalid data
 * - Cleanup of listeners to avoid leaks
 */
interface CacheUpdatedPayload {
  cacheName: string;
  updatedUrls: string[];
}

interface CacheUpdatedMessage {
  type: "CACHE_UPDATED";
  payload: CacheUpdatedPayload;
  sessionToken: string;
  __sw: true;
}

const MAX_UPDATED_URLS = 200;
const MAX_URL_LENGTH = 512;

const isValidUpdatedUrl = (value: unknown): value is string =>
  typeof value === "string" && value.length > 0 && value.length <= MAX_URL_LENGTH;

function isCacheUpdatedMessage(
  data: unknown,
  expectedToken: string
): data is CacheUpdatedMessage {
  if (!data || typeof data !== "object") {
    return false;
  }
  const message = data as Partial<CacheUpdatedMessage>;
  if (
    message.type !== "CACHE_UPDATED" ||
    message.__sw !== true ||
    message.sessionToken !== expectedToken ||
    !message.payload
  ) {
    return false;
  }
  const payload = message.payload as Partial<CacheUpdatedPayload>;
  if (typeof payload.cacheName !== "string") {
    return false;
  }
  const updatedUrls = payload.updatedUrls;
  if (!Array.isArray(updatedUrls)) {
    return false;
  }
  if (updatedUrls.length > MAX_UPDATED_URLS) {
    return false;
  }
  if (!updatedUrls.every(isValidUpdatedUrl)) {
    return false;
  }
  return true;
}

export default function ServiceWorkerRegistration() {
  const sessionTokenRef = useRef<string>("");
  const registrationRef = useRef<ServiceWorkerRegistration | null>(null);
  const messageListenerRef = useRef<((event: MessageEvent) => void) | null>(
    null
  );
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    // Only register in production & supported environments
    if (
      process.env.NODE_ENV === "production" &&
      typeof window !== "undefined" &&
      "serviceWorker" in navigator
    ) {
      // Generate a cryptographically strong session token
      sessionTokenRef.current = crypto.getRandomValues(new Uint32Array(4)).join(
        "-"
      );
      void registerServiceWorker(mountedRef);
    }

    return () => {
      mountedRef.current = false;
      // Cleanup message listener if registered
      if (messageListenerRef.current) {
        navigator.serviceWorker.removeEventListener(
          "message",
          messageListenerRef.current
        );
      }
    };

  }, []);

  const registerServiceWorker = async (
    activeRef?: MutableRefObject<boolean>
  ) => {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });

      if (activeRef && !activeRef.current) {
        return;
      }

      registrationRef.current = registration;
      console.info(
        "[SW] Registered successfully:",
        registration.scope,
        "token:",
        sessionTokenRef.current
      );

      // Optional: Post handshake token to worker so it can echo back.
      if (registration.active) {
        registration.active.postMessage({
          type: "SESSION_INIT",
          sessionToken: sessionTokenRef.current,
          __sw: true,
        });
      }
      // Handle updates
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              console.info(
                "[SW] New version installed; awaiting user refresh for new content."
              );
              if (
                "Notification" in window &&
                Notification.permission === "granted"
              ) {
                try {
                  new Notification("Three Rivers Tech", {
                    body:
                      "New version ready. Refresh to load updated site content.",
                    icon: "/company_logo.png",
                    badge: "/favicon-circle-32x32.png",
                  });
                } catch {
                  /* ignore notification errors */
                }
              }
            }
          });
        }
      });

      // Secure message handler
      const handleMessage = (event: MessageEvent) => {
        const expectedToken = sessionTokenRef.current;
        const reg = registrationRef.current;

        // Source validation: only accept from active or waiting worker
        const validSource =
          !!reg &&
          !!event.source &&
          (event.source === reg.active || event.source === reg.waiting);

        if (!validSource) {
          // Silent ignore
          return;
        }

        const data = event.data as unknown;

        // Allow-list message types
        if (isCacheUpdatedMessage(data, expectedToken)) {
          console.info(
            "[SW] Cache updated:",
            data.payload.cacheName,
            data.payload.updatedUrls.length,
            "files"
          );
          // Consider surfacing UI prompt or soft refresh indicator here.
          return;
        }

        // Unknown or invalid message; ignore silently
      };

      messageListenerRef.current = handleMessage;
      navigator.serviceWorker.addEventListener("message", handleMessage);
    } catch (error) {
      console.error("[SW] Registration failed:", error);
    }
  };

  return null;
}