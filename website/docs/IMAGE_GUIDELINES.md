# Image Guidelines & Specifications

Comprehensive guidelines for images used across the Three Rivers Tech website to ensure visual consistency, optimal performance, and accessibility.

## 🎯 Quick Reference

### Standard Sizes
| Type | Dimensions | Aspect Ratio | Usage |
|------|------------|--------------|-------|
| Logo | 512×512px | 1:1 | Header, footer, favicons |
| Hero Image | 1920×1080px | 16:9 | Hero sections, banners |
| Service Icon | 512×512px | 1:1 | Service cards, features |
| Portfolio Preview | 1200×800px | 3:2 | Portfolio grid items |
| Team Photo | 800×800px | 1:1 | About page, team section |
| Blog Featured | 1200×630px | 1.91:1 | Blog posts, social sharing |
| Thumbnail | 400×300px | 4:3 | Small previews, lists |

### Format Priority
1. **AVIF** - Best compression, modern browsers (primary)
2. **WebP** - Good compression, wide support (fallback)
3. **PNG/JPG** - Universal support (source)

---

## 📐 Image Specifications by Usage

### Logo Images

**Primary Logo**
- Size: 512×512px (source)
- Format: PNG with transparency
- Optimized variants: 32w, 48w, 64w, 96w
- Background: Transparent
- Color mode: Works on light and dark backgrounds
- Usage: Header, footer, favicons

**File naming**:
```
company_logo.png          (source)
company_logo.avif         (optimized)
company_logo.webp         (fallback)
company_logo-32w.avif     (small)
company_logo-48w.avif     (medium)
company_logo-64w.avif     (large)
```

**Code example**:
```tsx
import { LogoImage } from "@/components/OptimizedImage";

<LogoImage 
  className="h-12 w-12"
  priority={true}  // For header
/>
```

### Hero Images

**Specifications**:
- Size: 1920×1080px minimum
- Aspect ratio: 16:9
- Format: JPG for photos, PNG for graphics
- Max file size: 500KB (after optimization)
- Color space: sRGB
- Content: Community-focused, warm, welcoming

**Guidelines**:
- Show real people from the community when possible
- Use warm lighting and teal/amber color grading
- Avoid stock photos with obvious watermarks
- Include local landmarks or recognizable locations
- High resolution for retina displays

**Optimization**:
```bash
# Generate optimized formats
npm run optimize:images
```

### Service Icons

**Specifications**:
- Size: 512×512px (for crisp display at 64px)
- Aspect ratio: 1:1
- Format: PNG with transparency or SVG
- Style: Simple, recognizable, warm colors
- Icon weight: Medium (not too thin or bold)

**Color palette**:
- Primary: #0d9488 (teal)
- Secondary: #d97706 (amber)
- Accent: #059669 (emerald)
- Background: Transparent or white

**Usage in cards**:
```tsx
<div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-2xl">
  <Icon className="w-16 h-16 text-primary" />
</div>
```

### Portfolio Images

**Specifications**:
- Size: 1200×800px
- Aspect ratio: 3:2
- Format: JPG for photos, PNG for UI screenshots
- Max file size: 300KB
- Quality: 85% for JPG

**Content guidelines**:
- Show completed work, not stock images
- Include before/after comparisons when relevant
- Annotate screenshots with highlights
- Use consistent framing and composition

**Thumbnail version**:
- Size: 400×267px (3:2 ratio maintained)
- Max file size: 80KB
- Same optimization stack

### Background Images

**Specifications**:
- Size: 1920×1080px or larger
- Usage: Hero sections, full-width banners
- Format: JPG (photos) or PNG (graphics)
- Compression: Heavy (70-75% quality)
- Effect: Often used with overlay or blur

**Guidelines**:
- Use subtle patterns, not busy images
- Ensure text remains readable with overlay
- Test with both light and dark text
- Consider parallax effect performance

---

## 🎨 Visual Style Guide

### Color Temperature
All images should maintain warm color temperature:
- **Preferred**: Warm tones (orange, amber, teal, green)
- **Avoid**: Cool blues, grays, sterile whites
- **Post-processing**: Add warm color grade if needed

### Composition
- **Rule of thirds**: Position subjects at intersection points
- **Negative space**: Leave breathing room around subjects
- **Focal point**: Clear subject or area of interest
- **Balance**: Distribute visual weight evenly

### Photography Style
- **Lighting**: Natural, warm, golden hour preferred
- **Depth of field**: Shallow for portraits, deep for scenes
- **Perspective**: Eye-level or slightly above
- **Authenticity**: Real people, real places, real situations

---

## ⚡ Optimization Workflow

### Step 1: Source Images
Requirements before optimization:
- High resolution (at least 2x intended display size)
- Proper format (PNG for logos, JPG for photos)
- Color mode: RGB, sRGB color space
- No embedded thumbnails or metadata bloat

### Step 2: Resize & Crop
```bash
# Using Sharp (automated in our scripts)
npm run optimize:images
```

Creates multiple sizes:
- Full resolution (1920w or source)
- Large (1200w)
- Medium (800w)
- Small (400w)
- Thumbnail (200w)

### Step 3: Format Conversion
Generates modern formats:
```bash
original.png → original.avif (smallest)
             → original.webp (fallback)
             → original.png (preserved)
```

### Step 4: Compression
- **AVIF**: Quality 80, effort 4
- **WebP**: Quality 85
- **PNG**: Lossless with optimization
- **JPG**: Quality 85

### Step 5: Verification
Check each optimized image:
- [ ] File size reduced by 60-80%
- [ ] No visible quality loss
- [ ] Proper dimensions
- [ ] Correct format

---

## 📱 Responsive Images

### Picture Element Pattern
```tsx
<picture>
  <source 
    srcSet="/image-400w.avif 400w, /image-800w.avif 800w, /image-1200w.avif 1200w"
    type="image/avif"
  />
  <source 
    srcSet="/image-400w.webp 400w, /image-800w.webp 800w, /image-1200w.webp 1200w"
    type="image/webp"
  />
  <img 
    src="/image-800w.jpg"
    alt="Descriptive alt text"
    loading="lazy"
    width={800}
    height={600}
  />
</picture>
```

### Sizes Attribute
Tell browser which size to load:
```tsx
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
```

**Breakdown**:
- Mobile (≤640px): Full width (100vw)
- Tablet (≤1024px): Half width (50vw)
- Desktop: One-third width (33vw)

### OptimizedImage Component
Use our wrapper for consistent implementation:
```tsx
import { OptimizedImage } from "@/components/OptimizedImage";

<OptimizedImage
  src="/service-icon.png"
  alt="Home tech support icon"
  width={512}
  height={512}
  priority={false}  // true for above-fold
  className="w-16 h-16"
/>
```

---

## ♿ Accessibility Requirements

### Alt Text Guidelines

#### ✅ Good Alt Text:
```tsx
alt="Three Rivers Tech team helping senior client with laptop in Turtle Creek home"
```
- Descriptive and specific
- Includes context and relevant details
- Natural language, not keyword stuffing

#### ❌ Bad Alt Text:
```tsx
alt="image"  // Too vague
alt="IMG_1234.jpg"  // Filename not description
alt="computer laptop technology support"  // Keyword stuffing
alt=""  // Missing (only OK for decorative)
```

### Decorative Images
If image is purely decorative:
```tsx
<img src="/decoration.png" alt="" role="presentation" />
```

### Complex Images
For charts, diagrams, infographics:
```tsx
<figure>
  <img src="/chart.png" alt="Community growth chart" />
  <figcaption>
    Detailed description: Chart showing 40% growth in community 
    engagement from 2020 to 2024...
  </figcaption>
</figure>
```

### Text in Images
- **Avoid**: Putting important text in images
- **If required**: Include exact text in alt attribute
- **Better**: Use CSS for text overlays

---

## 🎭 Design Consistency

### Image Borders & Effects

**Card images**:
```tsx
<img 
  src="/image.jpg"
  className="rounded-2xl border border-border/50"  // Matches card style
/>
```

**Hero images**:
```tsx
<img 
  src="/hero.jpg"
  className="rounded-3xl shadow-large"  // Larger radius for heroes
/>
```

**Thumbnails**:
```tsx
<img 
  src="/thumb.jpg"
  className="rounded-xl object-cover"  // Smaller radius, cover fit
/>
```

### Consistent Styling
All images should follow card standards:
- Border radius: `rounded-2xl` (1.5rem)
- Border: `border border-border/50`
- Object fit: `object-cover` for cards
- Aspect ratio: Define with `aspect-ratio` CSS

---

## 📋 Image Checklist

Before adding any image to the site:

### Pre-Upload
- [ ] Image serves a clear purpose
- [ ] Appropriate dimensions for usage
- [ ] Correct format (PNG/JPG/SVG)
- [ ] High enough resolution (2x minimum)
- [ ] Colors match brand palette (warm tones)
- [ ] Proper filename (descriptive, kebab-case)

### Optimization
- [ ] Ran through `npm run optimize:images`
- [ ] AVIF version generated
- [ ] WebP version generated
- [ ] Multiple sizes created
- [ ] File size acceptable (<300KB for most)

### Implementation
- [ ] Alt text written and meaningful
- [ ] Width and height attributes set
- [ ] Loading strategy chosen (lazy/priority)
- [ ] Responsive sizes defined
- [ ] Tested on all devices
- [ ] Works in light and dark mode

### Accessibility
- [ ] Alt text describes image content
- [ ] Decorative images marked with empty alt
- [ ] Sufficient color contrast if text overlay
- [ ] No text embedded in image (or provided elsewhere)

---

## 🚫 Common Mistakes

### ❌ Don't:
1. Upload unoptimized images directly
2. Use inconsistent aspect ratios
3. Mix cool and warm color temperatures
4. Use generic stock photos
5. Forget alt text
6. Hardcode pixel dimensions in JSX
7. Skip lazy loading for below-fold images
8. Use tiny images stretched large
9. Include text in images when CSS works
10. Ignore dark mode appearance

### ✅ Do:
1. Optimize all images before upload
2. Maintain consistent aspect ratios per category
3. Use warm, community-focused imagery
4. Prefer authentic local photos
5. Write descriptive alt text
6. Use responsive images with srcset
7. Lazy load below-fold images
8. Provide 2x resolution for retina
9. Use CSS for text overlays
10. Test images in both light and dark themes

---

## 🗂️ File Organization

### Directory Structure
```
public/
├── company_logo.png          # Source files
├── company_logo.avif
├── company_logo.webp
├── company_logo-32w.avif     # Size variants
├── company_logo-48w.avif
├── company_logo-64w.avif
├── images/
│   ├── hero/
│   │   ├── homepage-hero.jpg
│   │   ├── homepage-hero.avif
│   │   └── homepage-hero.webp
│   ├── services/
│   │   ├── home-support.png
│   │   ├── home-support.avif
│   │   └── home-support.webp
│   ├── portfolio/
│   │   └── [project-name]/
│   └── team/
```

### Naming Conventions
```
[category]-[description]-[size].[format]

Examples:
service-home-support-512w.avif
portfolio-website-redesign-1200w.webp
hero-community-involvement.jpg
team-john-smith-800w.avif
```

**Rules**:
- Lowercase only
- Kebab-case (hyphens)
- Descriptive, not generic
- Include size for variants
- Format extension last

---

## 🔄 Maintenance

### Regular Reviews
Every 3 months:
- [ ] Audit all images for usage
- [ ] Remove unused images
- [ ] Check file sizes haven't grown
- [ ] Verify new formats are available
- [ ] Update alt text for accuracy
- [ ] Test loading performance

### Update Workflow
When adding new images:
1. Add to appropriate `/public/images/` subdirectory
2. Run `npm run optimize:images`
3. Verify optimized versions created
4. Update component with proper implementation
5. Test on multiple devices and connections
6. Commit both source and optimized versions

---

## 📚 Resources

### Tools
- **Sharp**: Node.js image processing (used in our scripts)
- **Squoosh**: Web-based image optimizer
- **AVIF Encoder**: avif.io
- **WebP Converter**: developers.google.com/speed/webp

### Testing
- **PageSpeed Insights**: Check image optimization
- **WebPageTest**: Test image loading performance
- **Chrome DevTools**: Network tab for size/timing
- **Lighthouse**: Accessibility and performance

### Learning
- [MDN: Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Web.dev: Image Optimization](https://web.dev/fast/#optimize-your-images)
- [WCAG: Text Alternatives](https://www.w3.org/WAI/WCAG21/Understanding/text-alternatives)

---

## 💡 Pro Tips

1. **Save source files**: Always keep original high-res versions
2. **Automate optimization**: Use `npm run optimize:images` consistently
3. **Monitor file sizes**: Use bundle analyzer to track image weight
4. **Lazy load smartly**: Priority for above-fold, lazy for below
5. **Test slow connections**: Use DevTools network throttling
6. **Consider CDN**: Cloudflare Pages provides automatic optimization
7. **Use modern formats**: AVIF first, WebP fallback, always have source
8. **Dimension attributes**: Always include width/height to prevent layout shift
9. **Batch processing**: Optimize multiple images at once with scripts
10. **Document custom images**: Add README in subdirectories for context

---

Remember: Every image should serve a purpose, load fast, look great, and be accessible to all users. When in doubt, optimize more and test thoroughly.
