// Bundle optimization utilities
// Lightweight runtime monitor mainly for development / early profiling.
// Avoid adding heavy logic here to keep client bundle slim.

export interface BundleMetric {
	name: string;
	value: number;
	detail?: Record<string, unknown>;
}

type Reporter = (metric: BundleMetric) => void;

// Internal no-op reporter; can be swapped later with analytics integration
let reporter: Reporter = () => {};
let initialized = false;

export function setBundleMetricReporter(fn: Reporter) {
	reporter = fn;
}

/**
 * Monitors basic performance-related bundle metrics.
 * Currently tracks:
 * - Time to first paint (if available)
 * - Time to first contentful paint (if available)
 * - Navigation timing (duration)
 */
export function monitorBundlePerformance() {
	if (typeof window === 'undefined' || !('performance' in window)) return;

	if (initialized) return; // prevent double reporting
	initialized = true;

	try {
		const perf = window.performance as Performance & { getEntriesByType?: (type: string) => PerformanceEntry[] };

		// Paint timings
		const paintEntries = perf.getEntriesByType?.('paint') || [];
		for (const entry of paintEntries) {
			reporter({ name: entry.name, value: entry.startTime });
		}

		// Navigation duration
		const navEntries = perf.getEntriesByType?.('navigation') || [];
		if (navEntries.length > 0) {
			const nav = navEntries[0];
			reporter({ name: 'navigation-duration', value: nav.duration });
		} else if (perf.timing) {
			// Legacy fallback
			const { navigationStart, loadEventEnd } = perf.timing;
			if (loadEventEnd && navigationStart) {
				reporter({ name: 'navigation-duration', value: loadEventEnd - navigationStart });
			}
		}
  	// Optionally try to observe long tasks (if supported)
  	try {
      if ('PerformanceObserver' in window) {
        const LongTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'longtask') {
              reporter({ name: 'long-task', value: entry.duration });
            }
          }
        });
        // Some browsers may throw if 'longtask' unsupported
	// Cast via unknown to satisfy strict typing without broad any usage
	LongTaskObserver.observe({ entryTypes: ['longtask'] as unknown as PerformanceObserverInit['entryTypes'] });
      }
    } catch {/* ignore */}

	} catch (err) {
		if (process.env.NODE_ENV !== 'production') {
			console.debug('[bundle-optimization] monitor failed', err);
		}
	}
}

// Helper to reset internal state (test convenience only)
export function __resetForTests() {
  initialized = false;
  reporter = () => {};
}

// Default export object (kept minimal now)
const bundleOptimization = { monitorBundlePerformance, setBundleMetricReporter };
export default bundleOptimization;