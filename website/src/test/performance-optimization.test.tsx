import React, { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next/link', () => {
  const Link = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<'a'>>(
    ({ href, children, ...props }, ref) => (
      <a ref={ref} href={href ?? '#'} {...props}>
        {children}
      </a>
    ),
  );

  Link.displayName = 'NextLinkMock';
  return { __esModule: true, default: Link };
});

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: {
    alt: string;
    src: string | { src: string };
    [key: string]: unknown;
  }) => {
    const {
      alt,
      src,
      priority: _priority,
      placeholder: _placeholder,
      blurDataURL: _blurDataURL,
      quality: _quality,
      loader: _loader,
      fill: _fill,
      sizes,
      onLoadingComplete: _onLoadingComplete,
      ...imgProps
    } = props;

    if (typeof sizes === 'string') {
      imgProps.sizes = sizes;
    }

    void _priority;
    void _placeholder;
    void _blurDataURL;
    void _quality;
    void _loader;
    void _fill;
    void _onLoadingComplete;

    const resolvedSrc = typeof src === 'string' ? src : src.src;
    // Using <img> here is intentional for test mocks and static export compatibility.
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} src={resolvedSrc} {...imgProps} />;
  },
}));

vi.mock('next/font/google', () => ({
  __esModule: true,
  Geist: () => ({ variable: 'font-geist-sans' }),
  Geist_Mono: () => ({ variable: 'font-geist-mono' }),
}));

import { renderToString } from 'react-dom/server';
import { JSDOM } from 'jsdom';
import { render, screen, fireEvent, waitFor } from '@/test/test-utils';
import ContactPage from '@/app/contact/page';
import Header from '@/components/Header';
import EnhancedHero from '@/app/components/EnhancedHero';
import RootLayout, { viewport, metadata } from '@/app/layout';
import { businessInfo } from '@/lib/metadata';
import { generateOrganizationSchema } from '@/lib/structured-data';
import nextConfig from '../../next.config';

describe('Performance Optimization for Local Users', () => {
  describe('Contact Information Accessibility', () => {
    it('communicates phone availability status for local visitors', () => {
      render(<ContactPage />);

      expect(screen.getByText(/phone line coming soon/i)).toBeVisible();
    });

    it('includes local mailing address details for in-person visits', () => {
      render(<ContactPage />);

      expect(screen.getByText('124 Grant Street')).toBeVisible();
      expect(screen.getByText('Turtle Creek, PA 15145')).toBeVisible();
    });

    it('exposes email and booking options with accessible attributes', () => {
      render(<ContactPage />);

      const emailLink = screen.getByRole('link', { name: /info@threeriverstech\.com/i });
      expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'));
      expect(emailLink.className).toContain('focus:ring-2');

      const bookingFrame = screen.getByRole('application', {
        name: /schedule an appointment with three rivers tech/i,
      });
      expect(bookingFrame).toHaveAttribute('src', 'https://calendar.app.google/1EwGScdmrC1dcwMR8');
      expect(bookingFrame).toHaveAttribute('loading', 'lazy');
    });
  });

  describe('Mobile Optimization', () => {
    it('exports a device-width viewport configuration for responsive rendering', () => {
      expect(viewport.width).toBe('device-width');
      expect(viewport.initialScale).toBe(1.0);
      expect(viewport.viewportFit).toBe('cover');
    });

    it('provides touch-friendly CTAs in the header navigation', () => {
      render(<Header />);

      const contactLink = screen.getByRole('link', { name: 'Contact' });
      expect(contactLink.className).toContain('min-h-[48px]');

      const mobileCallLink = screen.getByRole('link', { name: /contact three rivers tech/i });
      expect(mobileCallLink).toHaveAttribute('href', '/contact');
      expect(mobileCallLink.className).toContain('focus:ring-2');
    });

    it('opens the mobile menu with body scroll locking and accessible dialog content', async () => {
      render(<Header />);

      const toggleButton = screen.getByRole('button', { name: /open mobile menu/i });
      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

      fireEvent.click(toggleButton);
      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
      expect(document.body.style.overflow).toBe('hidden');
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      const buttons = await screen.findAllByRole('button', { name: /close mobile menu/i });
      fireEvent.click(buttons[buttons.length - 1]);

      await waitFor(() => expect(toggleButton).toHaveAttribute('aria-expanded', 'false'));
      await waitFor(() => expect(document.body.style.overflow).toBe(''));
      await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    });
  });

  describe('Performance Optimizations', () => {
    it('preloads brand imagery in the root layout head', () => {
      const head = renderToString(
        <RootLayout>
          <div>content</div>
        </RootLayout>,
      );

      ['avif', 'webp', 'png'].forEach((format) => {
        expect(head).toContain(`rel="preload" href="/company_logo.${format}"`);
      });
    });

    it('renders the logo with optimized formats and eager loading', () => {
      render(<Header />);

      const logo = screen.getByRole('img', {
        name: /three rivers tech - comprehensive technology solutions company logo/i,
      });
      expect(logo).toHaveAttribute('src', expect.stringContaining('/company_logo.avif'));
      expect(logo).toHaveAttribute('loading', 'eager');
    });

    it('injects structured data for organization, local business, and website schemas', () => {
      const markup = renderToString(
        <RootLayout>
          <div>content</div>
        </RootLayout>,
      );
      const dom = new JSDOM(markup);

      const scripts = Array.from(
        dom.window.document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]'),
      );
      expect(scripts.length).toBeGreaterThanOrEqual(3);

      const parsedSchemas = scripts.map((script) => JSON.parse(script.textContent ?? '{}'));
      const schemaTypes = parsedSchemas.map((schema) => schema['@type']);
      expect(schemaTypes).toEqual(expect.arrayContaining(['Organization', 'LocalBusiness', 'WebSite']));

      const localBusiness = parsedSchemas.find((schema) => schema['@type'] === 'LocalBusiness');
      expect(localBusiness?.address?.streetAddress).toBe('124 Grant Street');
      expect(localBusiness?.telephone).toBeTruthy();
    });
  });

  describe('Local SEO and Community Focus', () => {
    it('publishes Turtle Creek-focused keywords in shared metadata', () => {
      const keywords = Array.isArray(metadata.keywords)
        ? metadata.keywords
        : metadata.keywords
          ? [metadata.keywords]
          : [];
      expect(keywords).toEqual(expect.arrayContaining(['Mon Valley', 'computer repair Turtle Creek PA']));
    });

    it('maintains consistent contact details in reusable business metadata', () => {
      expect(businessInfo.phone).toMatch(/coming soon/i);
      expect(businessInfo.address.street).toBe('124 Grant Street');
      expect(businessInfo.serviceAreas).toContain('Mon Valley');
    });

    it('describes hometown messaging in the hero experience', () => {
      render(<EnhancedHero />);

      expect(
        screen.getByRole('heading', { name: /your hometown tech partner in turtle creek/i }),
      ).toBeVisible();
      expect(screen.getByText(/124 Grant Street, Turtle Creek, PA 15145/i)).toBeVisible();
      expect(screen.getByRole('link', { name: /contact our team for a free consultation/i })).toHaveAttribute(
        'href',
        '/contact',
      );
    });

    it('generates organization schemas that reference local service areas', () => {
      const schema = generateOrganizationSchema();
      expect(schema.sameAs ?? []).toContain('https://www.facebook.com/threeriverstech');
      expect(schema.areaServed ?? []).toContain('Mon Valley, PA');
    });
  });

  describe('Accessibility for All Community Members', () => {
    it('exposes landmark roles and navigation labelling in the header', () => {
      render(<Header />);

      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(
        screen.getByRole('navigation', { name: /main navigation/i }),
      ).toBeInTheDocument();
    });

    it('provides focus-visible styles on the mobile menu toggle', () => {
      render(<Header />);

      const toggleButton = screen.getByRole('button', { name: /open mobile menu/i });
      expect(toggleButton.className).toContain('focus:ring-2');
      expect(toggleButton.className).toContain('h-12');
      expect(toggleButton).toHaveAttribute('aria-haspopup', 'true');
    });

    it('keeps primary contact links keyboard-focusable on the contact page', () => {
      render(<ContactPage />);

      const emailLinks = screen.getAllByRole('link', { name: /info@threeriverstech\.com/i });
      emailLinks.forEach((link) => {
        expect(link.className).toContain('focus:ring-2');
      });
    });
  });

  describe('Loading Performance', () => {
    it('applies Geist font variables and antialiasing to the document body', () => {
      const htmlOutput = renderToString(
        <RootLayout>
          <div>content</div>
        </RootLayout>,
      );
      expect(htmlOutput).toContain('font-geist-sans');
      expect(htmlOutput).toContain('font-geist-mono');
      expect(htmlOutput).toContain('antialiased');
    });

    it('configures Next.js images for static export compatibility', () => {
      expect(nextConfig.images?.unoptimized).toBe(true);
      expect(nextConfig.output).toBe('export');
    });
  });
});
