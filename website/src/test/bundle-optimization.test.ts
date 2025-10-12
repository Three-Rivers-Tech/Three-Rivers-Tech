import { describe, it, expect, vi, beforeEach } from 'vitest';
import { monitorBundlePerformance, setBundleMetricReporter, __resetForTests, BundleMetric } from '@/lib/bundle-optimization';

// Helper to mock performance entries using controlled casting isolated to function body
function mockPerformance(entries: Record<string, PerformanceEntry[]>, timing?: { navigationStart: number; loadEventEnd: number }) {
  const perfBase = {
    getEntriesByType: (type: string) => entries[type] || [],
  } as Partial<Performance>;
  if (timing) {
    // Attach minimal timing object; cast via unknown to bypass exhaustive shape
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (perfBase as any).timing = timing as unknown;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).performance = perfBase as Performance;
}

describe('bundle-optimization', () => {
  beforeEach(() => {
    __resetForTests();
    vi.useFakeTimers();
  });

  it('reports paint and navigation metrics when entries exist', () => {
    const reporter = vi.fn();
    setBundleMetricReporter(reporter);

    const paintFP: PerformanceEntry = { name: 'first-paint', entryType: 'paint', startTime: 12.3, duration: 0, toJSON: () => ({}) } as PerformanceEntry;
    const paintFCP: PerformanceEntry = { name: 'first-contentful-paint', entryType: 'paint', startTime: 34.5, duration: 0, toJSON: () => ({}) } as PerformanceEntry;
    const nav: PerformanceEntry = { name: 'nav', entryType: 'navigation', startTime: 0, duration: 1234.56, toJSON: () => ({}) } as PerformanceEntry;

  mockPerformance({ paint: [paintFP, paintFCP], navigation: [nav] });
  // Provide minimal window shim
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).window = { performance: globalThis.performance, PerformanceObserver: vi.fn().mockImplementation(() => ({ observe: vi.fn() })) };

    monitorBundlePerformance();

    expect(reporter).toHaveBeenCalledTimes(3);
  const metricNames = reporter.mock.calls.map((c) => (c[0] as BundleMetric).name);
    expect(metricNames).toContain('first-paint');
    expect(metricNames).toContain('first-contentful-paint');
    expect(metricNames).toContain('navigation-duration');
  });

  it('is idempotent (second call does not re-report)', () => {
    const reporter = vi.fn();
    setBundleMetricReporter(reporter);

    const paint: PerformanceEntry = { name: 'first-paint', entryType: 'paint', startTime: 10, duration: 0, toJSON: () => ({}) } as PerformanceEntry;
  mockPerformance({ paint: [paint] });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).window = { performance: globalThis.performance, PerformanceObserver: vi.fn().mockImplementation(() => ({ observe: vi.fn() })) };

    monitorBundlePerformance();
    monitorBundlePerformance();

    // Only first call should record metrics
  const firstPaintCalls = reporter.mock.calls.filter((c) => (c[0] as BundleMetric).name === 'first-paint');
  expect(firstPaintCalls.length).toBe(1);
  });

  it('falls back to legacy navigation timing when navigation entries missing', () => {
    const reporter = vi.fn();
    setBundleMetricReporter(reporter);

  mockPerformance({}, { navigationStart: 1000, loadEventEnd: 2600 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).window = { performance: globalThis.performance, PerformanceObserver: vi.fn().mockImplementation(() => ({ observe: vi.fn() })) };

    monitorBundlePerformance();

    expect(reporter).toHaveBeenCalledWith(expect.objectContaining({ name: 'navigation-duration', value: 1600 }));
  });
});
