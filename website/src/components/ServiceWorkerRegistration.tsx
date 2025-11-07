"use client";

import { useEffect, useRef } from "react";

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

type SWInboundMessage = CacheUpdatedMessage; // Extend union as more types are added.

const MAX_UPDATED_URLS = 200;
const MAX_URL_LENGTH = 512;

function isCacheUpdatedMessage(
  data: unknown,
  expectedToken: string
): data is CacheUpdatedMessage {
  if (
    !data ||
    typeof data !== "object" ||
    (data as any).type !== "CACHE_UPDATED" ||
    (data as any).__sw !== true ||
    (data as any).sessionToken !== expectedToken
  ) {
    return false;
  }
  const payload = (data as any).payload;
  if (
    !payload ||
    typeof payload !== "object" ||
    typeof payload.cacheName !== "string" ||
    !Array.isArray(payload.updatedUrls)
  ) {
    return false;
  }
  if (payload.updatedUrls.length > MAX_UPDATED_URLS) {
    return false;
  }
  if (
    payload.updatedUrls.some(
      (u) => typeof u !== "string" || u.length === 0 || u.length > MAX_URL_LENGTH
    )
  ) {
    return false;
  }
  return true;
}

export default function ServiceWorkerRegistration() {
  const sessionTokenRef = useRef<string>("");
  const registrationRef = useRef<ServiceWorkerRegistration | null>(null);
  const messageListenerRef = useRef<(event: MessageEvent) => void>();

  useEffect(() => {
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
      void registerServiceWorker();
    }

    return () => {
      // Cleanup message listener if registered
      if (messageListenerRef.current) {
        navigator.serviceWorker.removeEventListener(
          "message",
          messageListenerRef.current
        );
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const registerServiceWorker = async () => {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
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