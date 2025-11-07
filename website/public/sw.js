// public/sw.js

// Map to store session tokens per client ID
const clientSessions = new Map();

// Helper to get client session token
function getClientSessionToken(clientId) {
    return clientSessions.get(clientId);
}

// Helper to set client session token
function setClientSessionToken(clientId, token) {
    if (typeof token === "string" && token.length > 0) {
        clientSessions.set(clientId, token);
    }
async function notifyCacheUpdated(cacheName, updatedUrls) {
    try {
        if (!sessionToken) {
            // No session yet; avoid sending unauthenticated messages.
            return;
        }
        const clientsList = await self.clients.matchAll();
        for (const client of clientsList) {
            client.postMessage({
                type: "CACHE_UPDATED",
                payload: { cacheName, updatedUrls },
                __sw: true
            });
        }
    } catch (error) {
        console.error('Failed to notify clients:', error);
    }
}
    const { data } = event;
    // Verify the message comes from your expected origin
    if (event.origin !== self.location.origin) {
        return;
    }
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