// public/sw.js

let sessionToken  = null;

self.addEventListener("message", (event) => {
    const { data } = event;
    if (data && data.type === "SESSION_INIT" && typeof data.sessionToken === "string") {
        sessionToken = data.sessionToken;
    }
});

/**
 * When cache updates are detected:
 * Post a vetted message back to all clients.
 */
async function notifyCacheUpdated(cacheName, updatedUrls) {
    if (!sessionToken) {
        // No session yet; avoid sending unauthenticated messages.
        return;
    }
    const clientsList = await self.clients.matchAll({ includeUncontrolled: true });
    for (const client of clientsList) {
        client.postMessage({
            type: "CACHE_UPDATED",
            payload: { cacheName, updatedUrls },
            sessionToken,
            __sw: true
        });
    }
}