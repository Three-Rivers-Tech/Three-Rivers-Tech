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
	} catch (err) {
		// Silently ignore; this should never break the app
			if (process.env.NODE_ENV !== 'production') {
				console.debug('[bundle-optimization] monitor failed', err);
			}
	}
}

	// Default export object (kept minimal now)
	const bundleOptimization = { monitorBundlePerformance, setBundleMetricReporter };
	export default bundleOptimization;