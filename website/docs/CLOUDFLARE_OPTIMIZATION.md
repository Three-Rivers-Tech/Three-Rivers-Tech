# Cloudflare Pages Optimization Guide

Comprehensive guide for optimizing the Three Rivers Tech website for Cloudflare Pages deployment, including static export requirements, edge computing, and performance optimization.

## 🎯 Quick Reference

### Deployment Configuration
| Setting | Value | Reason |
|---------|-------|--------|
| Output Mode | `export` | Static site for Cloudflare Pages |
| Trailing Slash | `true` | Consistent URL structure |
| Image Optimization | `unoptimized: true` | No server-side image optimization |
| Build Command | `npm run build` | Generates `/out` directory |
| Output Directory | `out` | Static files for deployment |
| Node Version | `18.x` or higher | Required for Next.js 15 |

---

## 🚀 Cloudflare Pages Overview

### What is Cloudflare Pages?

Cloudflare Pages is a **JAMstack platform** for deploying static sites with:
- ✅ Global CDN with 300+ edge locations
- ✅ Automatic HTTPS with SSL certificates
- ✅ Unlimited bandwidth (no data transfer fees)
- ✅ Git integration for automatic deployments
- ✅ Edge computing capabilities
- ✅ Built-in analytics and performance monitoring

### Static Export vs Server-Side Rendering

**Our Configuration**: Static Export (JAMstack)

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',        // Generate static HTML files
  trailingSlash: true,     // URLs end with /
  images: {
    unoptimized: true      // No server-side image optimization
  }
};
```

**What This Means**:
- ✅ All pages are pre-rendered at build time
- ✅ No server-side code execution
- ✅ Entire site served from CDN edge
- ✅ Lightning-fast load times (sub-100ms)
- ❌ No server-side rendering (SSR)
- ❌ No API routes (use Cloudflare Workers instead)
- ❌ No Next.js Image Optimization API

---

## 📁 Project Structure for Static Export

### Build Output
```
out/
├── index.html              # Homepage
├── about/
│   └── index.html          # /about/ page
├── services/
│   └── index.html          # /services/ page
├── _next/
│   └── static/             # JS, CSS bundles
├── images/                 # Optimized images
└── [other static assets]
```

### Only `/out` is Deployed
**Critical**: Only the contents of the `/out` directory are deployed to Cloudflare Pages.

```bash
# Build process
npm run build           # Generates /out directory

# Deployed to Cloudflare
/out/* → Cloudflare Pages CDN
```

**What's NOT deployed**:
- Source code (`/src`)
- Node modules (`/node_modules`)
- Configuration files
- Development files

---

## ⚙️ Next.js Configuration

### Current Configuration (`next.config.ts`)

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages
  output: 'export',
  
  // Consistent URLs with trailing slashes
  trailingSlash: true,
  
  // Disable Next.js Image Optimization (not available in static export)
  images: {
    unoptimized: true
  },
  
  // Turbopack configuration
  turbopack: {
    root: __dirname
  },
  
  // Build configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
```

### Why These Settings?

#### `output: 'export'`
- Generates static HTML files for all pages
- Required for Cloudflare Pages deployment
- All rendering happens at build time

#### `trailingSlash: true`
- URLs: `/about/` instead of `/about`
- Consistent with static file structure
- Prevents redirect issues

#### `images: { unoptimized: true }`
- Next.js Image Optimization requires a server
- Static export cannot use image optimization API
- We handle optimization manually with Sharp

---

## 🖼️ Image Optimization Strategy

### Manual Optimization (Pre-build)

Since Next.js Image Optimization is unavailable, we optimize images before build:

```bash
# Optimize all images
npm run optimize:images
```

**Process**:
1. Source images in `/public/`
2. Generate AVIF and WebP formats
3. Create multiple sizes (32w, 48w, 64w, etc.)
4. Compress with Sharp

### Format Priority
```html
<picture>
  <source srcset="/image.avif" type="image/avif">  <!-- Best compression -->
  <source srcset="/image.webp" type="image/webp">  <!-- Good fallback -->
  <img src="/image.png" alt="Description">         <!-- Universal fallback -->
</picture>
```

**File Sizes**:
- AVIF: 60-80% smaller than PNG
- WebP: 30-50% smaller than PNG
- Both have excellent browser support

### Image Loading Strategy

```tsx
// Above the fold (hero images, logo)
<OptimizedImage 
  src="/hero.png"
  priority={true}    // Load immediately
  loading="eager"
/>

// Below the fold (service cards, footer)
<OptimizedImage 
  src="/service.png"
  priority={false}   // Lazy load
  loading="lazy"
/>
```

**Lazy Loading Benefits**:
- Initial page load: Only load visible images
- Bandwidth savings: 40-60% reduction
- Faster Time to Interactive (TTI)

---

## 🌐 Cloudflare CDN Optimization

### Edge Caching Strategy

**Headers File** (`_headers`):

```
# Static assets - cache for 1 year (immutable)
/_next/static/*
  Cache-Control: public, max-age=31536000, immutable

# Images - cache for 1 week
/*.avif
  Cache-Control: public, max-age=604800, s-maxage=604800

# HTML pages - cache for 1 hour with revalidation
/*.html
  Cache-Control: public, max-age=3600, must-revalidate

# Service worker - no cache
/sw.js
  Cache-Control: public, max-age=0, must-revalidate
```

### Cache Levels
| Asset Type | Cache Duration | Rationale |
|------------|---------------|-----------|
| JS/CSS bundles | 1 year | Versioned, never change |
| Images | 1 week | Rarely change, good balance |
| HTML | 1 hour | Content updates possible |
| Fonts | 1 year | Never change |
| Service Worker | No cache | Must stay current |

### CDN Performance
- **300+ edge locations** worldwide
- **Sub-100ms** latency globally
- **Automatic gzip/brotli** compression
- **HTTP/3** and **QUIC** support

---

## 🔒 Security Headers

### Current Security Configuration

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Security Headers Explained

#### `X-Frame-Options: DENY`
- Prevents clickjacking attacks
- Site cannot be embedded in iframes
- Exception: If you need embeds, use `SAMEORIGIN`

#### `X-Content-Type-Options: nosniff`
- Prevents MIME-type sniffing
- Forces browser to respect Content-Type header
- Reduces XSS attack surface

#### `Referrer-Policy: strict-origin-when-cross-origin`
- Sends full URL for same-origin requests
- Sends only origin for cross-origin requests
- Protects user privacy

#### `Permissions-Policy`
- Disables camera, microphone, geolocation
- Reduces attack surface
- Add features as needed: `camera=(self)`

### Additional Recommended Headers

```
/*
  # Existing headers
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  
  # Additional recommendations
  X-XSS-Protection: 1; mode=block
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;
```

**Note**: CSP should be customized based on third-party scripts used.

---

## ⚡ Performance Optimization

### Build Optimization

**Bundle Size Targets**:
- First Load JS: < 200KB
- Total JS: < 500KB
- Page-specific JS: < 50KB

**Check bundle size**:
```bash
npm run build

# Output shows:
Route (app)              Size     First Load JS
┌ ○ /                   5.2 kB         150 kB
├ ○ /about              3.8 kB         148 kB
└ ○ /services           4.1 kB         149 kB
```

### Code Splitting

Next.js automatically splits code by page:

```tsx
// Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Spinner />,
  ssr: false  // Don't include in initial HTML
});
```

**Benefits**:
- Smaller initial bundle
- Faster Time to Interactive
- Load components on-demand

### Font Optimization

```tsx
// app/layout.tsx
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],     // Only Latin characters
  display: 'swap',        // Use fallback during load
  preload: true,          // Preload critical fonts
});
```

**Optimization**:
- ✅ Subset to Latin only (smaller file)
- ✅ Font display: swap (no FOIT)
- ✅ Preload critical fonts
- ✅ Self-host via next/font (no external requests)

---

## 🧪 Testing for Cloudflare Pages

### Local Testing

**Test static export locally**:
```bash
# Build static site
npm run build

# Serve with local server
npx serve out

# Test at http://localhost:3000
```

**What to verify**:
- ✅ All pages load correctly
- ✅ Navigation works
- ✅ Images display properly
- ✅ Styles applied correctly
- ✅ No console errors
- ✅ Links have trailing slashes

### Production Testing Checklist

Before deploying to Cloudflare Pages:

#### Functionality
- [ ] All pages render correctly
- [ ] Navigation between pages works
- [ ] Forms submit (if using form handlers)
- [ ] External links open in new tabs
- [ ] Internal links work with trailing slashes

#### Performance
- [ ] Lighthouse score > 90 (Performance)
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] Total bundle size < 500KB
- [ ] Images are optimized (AVIF/WebP)

#### SEO
- [ ] All pages have meta descriptions
- [ ] Structured data is present
- [ ] Canonical URLs set correctly
- [ ] Sitemap generates correctly
- [ ] Robots.txt is accessible

#### Accessibility
- [ ] Lighthouse score > 90 (Accessibility)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG AA
- [ ] Alt text on all images

---

## 🚢 Deployment Workflow

### Automatic Deployment

**Trigger**: Push/merge to `master` branch

```bash
# Workflow
1. Git push to master
2. GitHub triggers webhook
3. Cloudflare Pages pulls code
4. Runs: npm install && npm run build
5. Deploys /out to CDN
6. Site live at threeriverstech.pages.dev
```

### Deployment Configuration

**Cloudflare Pages Settings**:
```yaml
Build command:        npm run build
Build output:         out
Root directory:       website
Node version:         18
Environment variables:
  - NODE_VERSION: 18
  - NPM_VERSION: latest
```

### Branch Deployments

Cloudflare Pages creates preview deployments for branches:

- **Production**: `master` → `threeriverstech.pages.dev`
- **Preview**: `feature-xyz` → `feature-xyz.threeriverstech.pages.dev`

**Benefits**:
- Test changes before merging
- Share previews with team
- No impact on production

---

## 🔧 Limitations & Workarounds

### No Server-Side Code

**Limitation**: Static export cannot execute server-side code

**Workarounds**:

#### API Routes → Cloudflare Workers
```typescript
// Instead of /api/contact in Next.js
// Use Cloudflare Workers

// workers/contact.ts
export default {
  async fetch(request: Request) {
    const data = await request.json();
    // Process form submission
    return new Response(JSON.stringify({ success: true }));
  }
}
```

#### Server-Side Rendering → Build-Time Generation
```tsx
// Instead of SSR with getServerSideProps
// Use getStaticProps (runs at build time)

export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data } };
}
```

#### Dynamic Routes → Static Paths
```tsx
// Generate static pages for dynamic routes
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
    ],
    fallback: false  // 404 for other paths
  };
}
```

### No Image Optimization API

**Limitation**: Next.js Image Optimization requires server

**Solution**: Pre-optimize images with Sharp

```bash
# Optimize before build
npm run optimize:images

# Then build
npm run build
```

**Optimization Script** (`scripts/optimize-images.mjs`):
```javascript
import sharp from 'sharp';
import { glob } from 'glob';

const images = await glob('public/**/*.{png,jpg,jpeg}');

for (const image of images) {
  await sharp(image)
    .avif({ quality: 80 })
    .toFile(image.replace(/\.(png|jpg|jpeg)$/, '.avif'));
    
  await sharp(image)
    .webp({ quality: 85 })
    .toFile(image.replace(/\.(png|jpg|jpeg)$/, '.webp'));
}
```

### No Middleware

**Limitation**: Static export doesn't support middleware

**Workaround**: Use Cloudflare Workers for edge logic

```typescript
// _worker.js at root of /out
export default {
  async fetch(request, env) {
    // Custom logic at edge
    // Redirects, A/B testing, etc.
    return env.ASSETS.fetch(request);
  }
}
```

---

## 📊 Performance Monitoring

### Cloudflare Web Analytics

**Free built-in analytics**:
- Page views and unique visitors
- Core Web Vitals (LCP, FID, CLS)
- Geographic distribution
- Browser and device breakdown

**Enable in dashboard**:
1. Cloudflare Pages → Your Site → Analytics
2. Enable Web Analytics
3. Add beacon to site (automatic)

### Lighthouse CI

**Automated performance testing**:

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://threeriverstech.pages.dev/
            https://threeriverstech.pages.dev/about/
          uploadArtifacts: true
```

### Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Performance | > 90 | Check in CI |
| First Contentful Paint | < 1.5s | Sub-second on CDN |
| Time to Interactive | < 3.5s | Fast with static |
| Largest Contentful Paint | < 2.5s | Optimized images |
| Cumulative Layout Shift | < 0.1 | Dimensions set |
| Total Blocking Time | < 300ms | Minimal JS |

---

## 🔍 Debugging Static Export Issues

### Common Issues

#### 1. Images Not Loading
**Symptom**: Images work locally but not in production

**Cause**: Image paths incorrect or not in `/public`

**Fix**:
```tsx
// ❌ Wrong - references /src
<img src="/src/images/logo.png" />

// ✅ Correct - references /public
<img src="/logo.png" />
```

#### 2. Links Don't Work
**Symptom**: Clicking links shows 404

**Cause**: Missing trailing slashes with `trailingSlash: true`

**Fix**:
```tsx
// ❌ Wrong
<Link href="/about">About</Link>

// ✅ Correct
<Link href="/about/">About</Link>
```

#### 3. Styles Missing
**Symptom**: No CSS applied in production

**Cause**: CSS not included in build output

**Fix**: Check CSS imports are in layout.tsx
```tsx
// app/layout.tsx
import './globals.css';  // ✅ Import global styles
```

#### 4. Dynamic Features Don't Work
**Symptom**: Form submissions fail, data doesn't update

**Cause**: Trying to use server-side features in static export

**Fix**: Use Cloudflare Workers or client-side only features

### Build Debugging

**Check build output**:
```bash
npm run build 2>&1 | tee build.log

# Review build.log for errors
# Check /out directory structure
ls -R out/
```

**Common build errors**:
- Missing dependencies: `npm install`
- TypeScript errors: Fix types in source
- Missing pages: Check route configuration

---

## ✅ Deployment Checklist

### Pre-Deployment
- [ ] Run `npm run build` successfully
- [ ] Test with `npx serve out`
- [ ] Verify all pages load
- [ ] Check images display (AVIF/WebP)
- [ ] Test navigation with trailing slashes
- [ ] Run Lighthouse audit (scores > 90)
- [ ] Verify no console errors
- [ ] Test on mobile devices

### Cloudflare Configuration
- [ ] Build command: `npm run build`
- [ ] Build output: `out`
- [ ] Root directory: `website`
- [ ] Node version: 18 or higher
- [ ] Environment variables set (if any)
- [ ] Custom domain configured (if applicable)
- [ ] SSL/TLS mode: Full (strict)

### Post-Deployment
- [ ] Site loads at production URL
- [ ] All pages accessible
- [ ] Images load correctly
- [ ] Navigation works
- [ ] Forms function (if using Workers)
- [ ] Analytics tracking works
- [ ] Security headers present (check in DevTools)
- [ ] Performance metrics acceptable

### Monitoring
- [ ] Set up Cloudflare Web Analytics
- [ ] Configure uptime monitoring
- [ ] Set up performance alerts
- [ ] Monitor error rates
- [ ] Review Core Web Vitals weekly

---

## 📚 Additional Resources

### Cloudflare Documentation
- [Pages Documentation](https://developers.cloudflare.com/pages/)
- [Workers Documentation](https://developers.cloudflare.com/workers/)
- [Web Analytics](https://developers.cloudflare.com/analytics/web-analytics/)

### Next.js Documentation
- [Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Deployment](https://nextjs.org/docs/app/building-your-application/deploying)

### Performance Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 💡 Best Practices Summary

### DO ✅
- Pre-optimize images with Sharp before build
- Use trailing slashes in all internal links
- Set image dimensions to prevent layout shift
- Lazy load below-the-fold images
- Cache static assets aggressively
- Test static export locally before deploying
- Monitor Core Web Vitals in production
- Use Cloudflare Workers for server logic

### DON'T ❌
- Use Next.js Image Optimization API
- Rely on server-side rendering (SSR)
- Use API routes in Next.js
- Forget to run `npm run build` before testing
- Reference files outside `/public`
- Use absolute URLs for internal links
- Deploy without testing static export
- Ignore security headers

---

## 🎯 Quick Commands

```bash
# Optimize images before build
npm run optimize:images

# Build static export
npm run build

# Test locally
npx serve out

# Check bundle sizes
npm run build | grep "Route (app)"

# Validate static export
ls -R out/
```

---

**Remember**: Cloudflare Pages serves static files from the `/out` directory. Everything must be pre-rendered at build time. Use Cloudflare Workers for any dynamic functionality needed.
