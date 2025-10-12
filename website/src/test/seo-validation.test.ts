import { describe, it, expect } from 'vitest';
import { generateStaticPageMetadata, generateServicePageMetadata } from '@/lib/metadata-generators';
import { generateOrganizationSchema, generateLocalBusinessSchema, generateWebSiteSchema } from '@/lib/structured-data';

describe('SEO Metadata Generation (sanity)', () => {
  it('generates homepage metadata', () => {
    const m = generateStaticPageMetadata('home');
    expect(m.title).toBeTruthy();
    expect(m.description).toBeTruthy();
  });
  it('falls back for unknown page', () => {
    const m = generateStaticPageMetadata('unknown-x');
    expect(m.title).toContain('Page Not Found');
  });
  it('service metadata enhanced', () => {
    const m = generateServicePageMetadata('software-development');
    expect(m.description).toMatch(/Services include:/);
  });
});

describe('Structured Data (core schemas)', () => {
  it('organization schema basics', () => {
    const s = generateOrganizationSchema();
    expect(s['@type']).toBe('Organization');
    expect(s.name).toBeTruthy();
  });
  it('local business schema basics', () => {
    const s = generateLocalBusinessSchema();
    expect(s['@type']).toBe('LocalBusiness');
    expect(s.geo).toBeDefined();
  });
  it('website schema basics', () => {
    const s = generateWebSiteSchema();
    expect(s['@type']).toBe('WebSite');
    expect(s.potentialAction).toBeDefined();
  });
});