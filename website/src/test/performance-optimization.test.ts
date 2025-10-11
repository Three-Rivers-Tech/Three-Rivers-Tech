import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

describe('Performance Optimization for Local Users', () => {
  describe('Contact Information Accessibility', () => {
    it('should have phone number prominently displayed', async () => {
      const contactPagePath = path.join(__dirname, '..', 'app', 'contact', 'page.tsx');
      const contactContent = fs.readFileSync(contactPagePath, 'utf8');
      
      // Check for phone number presence
      expect(contactContent).toContain('(412) 403-5559');
      expect(contactContent).toContain('tel:+14124035559');
    });

    it('should have local address prominently displayed', async () => {
      const contactPagePath = path.join(__dirname, '..', 'app', 'contact', 'page.tsx');
      const contactContent = fs.readFileSync(contactPagePath, 'utf8');
      
      expect(contactContent).toContain('124 Grant Street');
      expect(contactContent).toContain('Turtle Creek, PA 15145');
    });

    it('should have email contact available', async () => {
      const contactPagePath = path.join(__dirname, '..', 'app', 'contact', 'page.tsx');
      const contactContent = fs.readFileSync(contactPagePath, 'utf8');
      
      expect(contactContent).toContain('info@threeriverstech.com');
      expect(contactContent).toContain('mailto:');
    });
  });

  describe('Mobile Optimization', () => {
    it('should have proper viewport configuration', async () => {
      const layoutPath = path.join(__dirname, '..', 'app', 'layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf8');
      
      // Check for viewport export
      expect(layoutContent).toContain('viewport');
      expect(layoutContent).toContain('device-width');
      expect(layoutContent).toContain('initialScale: 1.0');
    });

    it('should have touch-friendly navigation', async () => {
      const headerPath = path.join(__dirname, '..', 'components', 'Header.tsx');
      const headerContent = fs.readFileSync(headerPath, 'utf8');
      
      // Check for minimum touch target sizes
      expect(headerContent).toContain('min-h-[44px]');
    });

    it('should have mobile navigation component', async () => {
      const mobileNavPath = path.join(__dirname, '..', 'components', 'MobileNavigation.tsx');
      expect(fs.existsSync(mobileNavPath)).toBe(true);
      
      const mobileNavContent = fs.readFileSync(mobileNavPath, 'utf8');
      expect(mobileNavContent).toContain('md:hidden'); // Mobile-specific visibility
    });
  });

  describe('Performance Optimizations', () => {
    it('should have critical resource preloading', async () => {
      const layoutPath = path.join(__dirname, '..', 'app', 'layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf8');
      
      expect(layoutContent).toContain('rel="preload"');
      expect(layoutContent).toContain('company_logo');
    });

    it('should have optimized images available', async () => {
      const publicDir = path.join(__dirname, '..', '..', 'public');
      
      // Check for WebP versions of key images
      expect(fs.existsSync(path.join(publicDir, 'company_logo.webp'))).toBe(true);
      expect(fs.existsSync(path.join(publicDir, 'company_logo.avif'))).toBe(true);
    });

    it('should use OptimizedImage component', async () => {
      const optimizedImagePath = path.join(__dirname, '..', 'components', 'OptimizedImage.tsx');
      expect(fs.existsSync(optimizedImagePath)).toBe(true);
      
      // Check if it's being used in Header
      const headerPath = path.join(__dirname, '..', 'components', 'Header.tsx');
      const headerContent = fs.readFileSync(headerPath, 'utf8');
      expect(headerContent).toContain('LogoImage');
    });
  });

  describe('Local SEO and Community Focus', () => {
    it('should have local keywords in metadata', async () => {
      const metadataPath = path.join(__dirname, '..', 'lib', 'metadata.ts');
      const metadataContent = fs.readFileSync(metadataPath, 'utf8');
      
      expect(metadataContent).toContain('computer repair Turtle Creek PA');
      expect(metadataContent).toContain('IT services Turtle Creek 15145');
      expect(metadataContent).toContain('Mon Valley');
    });

    it('should have LocalBusiness structured data', async () => {
      const structuredDataPath = path.join(__dirname, '..', 'lib', 'structured-data.ts');
      const structuredDataContent = fs.readFileSync(structuredDataPath, 'utf8');
      
      expect(structuredDataContent).toContain('LocalBusiness');
      expect(structuredDataContent).toContain('Turtle Creek, PA 15145');
      expect(structuredDataContent).toContain('businessInfo.phone');
    });

    it('should have community messaging in hero section', async () => {
      const heroPath = path.join(__dirname, '..', 'app', 'components', 'EnhancedHero.tsx');
      const heroContent = fs.readFileSync(heroPath, 'utf8');
      
      expect(heroContent).toContain('Hometown Tech Partner');
      expect(heroContent).toContain('Turtle Creek');
      expect(heroContent).toContain('124 Grant Street');
    });
  });

  describe('Accessibility for All Community Members', () => {
    it('should have screen reader support', async () => {
      const layoutPath = path.join(__dirname, '..', 'app', 'layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf8');
      
      expect(layoutContent).toContain('Skip to main content');
      expect(layoutContent).toContain('role="main"');
    });

    it('should have proper ARIA labels', async () => {
      const headerPath = path.join(__dirname, '..', 'components', 'Header.tsx');
      const headerContent = fs.readFileSync(headerPath, 'utf8');
      
      expect(headerContent).toContain('aria-label');
      expect(headerContent).toContain('role="navigation"');
    });

    it('should have focus management', async () => {
      const mobileNavPath = path.join(__dirname, '..', 'components', 'MobileNavigation.tsx');
      const mobileNavContent = fs.readFileSync(mobileNavPath, 'utf8');
      
      expect(mobileNavContent).toContain('focus:outline-none');
      expect(mobileNavContent).toContain('focus:ring-2');
    });
  });

  describe('Loading Performance', () => {
    it('should have proper font loading strategy', async () => {
      const layoutPath = path.join(__dirname, '..', 'app', 'layout.tsx');
      const layoutContent = fs.readFileSync(layoutPath, 'utf8');
      
      // Check for font optimization
      expect(layoutContent).toContain('Geist');
      expect(layoutContent).toContain('subsets: ["latin"]');
    });

    it('should have image optimization configuration', async () => {
      const nextConfigPath = path.join(__dirname, '..', '..', 'next.config.ts');
      const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');
      
      // For static export, images should be unoptimized
      expect(nextConfigContent).toContain('unoptimized: true');
    });
  });
});