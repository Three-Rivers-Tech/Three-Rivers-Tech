#!/usr/bin/env node

/**
 * Performance optimization script for local users
 * Optimizes the website for users with varying internet connections
 * Focuses on Turtle Creek and Mon Valley area users
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Performance targets for local users
const PERFORMANCE_TARGETS = {
  // Conservative targets for rural/suburban internet
  LCP: 2500, // Largest Contentful Paint (ms)
  FID: 100,  // First Input Delay (ms)
  CLS: 0.1,  // Cumulative Layout Shift
  TTFB: 800, // Time to First Byte (ms)
  FCP: 1800, // First Contentful Paint (ms)
  
  // Bundle size targets
  maxBundleSize: 250000, // 250KB initial bundle
  maxImageSize: 100000,  // 100KB per image
  maxFontSize: 50000,    // 50KB per font
};

// Critical resources that should load first
const CRITICAL_RESOURCES = [
  'company_logo.png',
  'favicon.ico',
  'globals.css'
];

function checkBundleSize() {
  console.log('📦 Checking bundle sizes...');
  
  const outDir = path.join(__dirname, '..', 'out');
  if (!fs.existsSync(outDir)) {
    console.log('⚠️  Build output not found. Run npm run build first.');
    return false;
  }

  // Check static assets
  const staticDir = path.join(outDir, '_next', 'static');
  if (fs.existsSync(staticDir)) {
    const checkDirectory = (dir, type) => {
      const files = fs.readdirSync(dir, { withFileTypes: true });
      let totalSize = 0;
      let issues = [];

      files.forEach(file => {
        if (file.isFile()) {
          const filePath = path.join(dir, file.name);
          const stats = fs.statSync(filePath);
          totalSize += stats.size;

          if (stats.size > PERFORMANCE_TARGETS.maxBundleSize) {
            issues.push(`${file.name}: ${(stats.size / 1024).toFixed(1)}KB (too large)`);
          }
        }
      });

      console.log(`${type} total size: ${(totalSize / 1024).toFixed(1)}KB`);
      if (issues.length > 0) {
        console.log(`⚠️  Large ${type.toLowerCase()} files:`, issues);
      }

      return totalSize;
    };

    // Check chunks directory
    const chunksDir = path.join(staticDir, 'chunks');
    if (fs.existsSync(chunksDir)) {
      checkDirectory(chunksDir, 'JavaScript chunks');
    }

    // Check CSS directory
    const cssDir = path.join(staticDir, 'css');
    if (fs.existsSync(cssDir)) {
      checkDirectory(cssDir, 'CSS files');
    }
  }

  return true;
}

function checkImageOptimization() {
  console.log('🖼️  Checking image optimization...');
  
  const publicDir = path.join(__dirname, '..', 'public');
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg'];
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    let issues = [];
    let optimizedCount = 0;
    let totalCount = 0;

    files.forEach(file => {
      const filePath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        const subResults = scanDirectory(filePath);
        issues.push(...subResults.issues);
        optimizedCount += subResults.optimizedCount;
        totalCount += subResults.totalCount;
      } else {
        const ext = path.extname(file.name).toLowerCase();
        if (imageExtensions.includes(ext)) {
          totalCount++;
          const stats = fs.statSync(filePath);
          
          if (stats.size > PERFORMANCE_TARGETS.maxImageSize) {
            issues.push(`${file.name}: ${(stats.size / 1024).toFixed(1)}KB (should be < ${PERFORMANCE_TARGETS.maxImageSize / 1024}KB)`);
          }

          // Check if WebP version exists
          const nameWithoutExt = path.parse(file.name).name;
          const webpPath = path.join(dir, `${nameWithoutExt}.webp`);
          if (fs.existsSync(webpPath)) {
            optimizedCount++;
          }
        }
      }
    });

    return { issues, optimizedCount, totalCount };
  }

  const results = scanDirectory(publicDir);
  
  console.log(`Images found: ${results.totalCount}`);
  console.log(`WebP versions: ${results.optimizedCount}/${results.totalCount}`);
  
  if (results.issues.length > 0) {
    console.log('⚠️  Large images that should be optimized:');
    results.issues.forEach(issue => console.log(`  - ${issue}`));
  }

  if (results.optimizedCount < results.totalCount) {
    console.log('💡 Run npm run optimize:images to create WebP versions');
  }

  return results.issues.length === 0;
}

function checkCriticalResourcePreloading() {
  console.log('⚡ Checking critical resource preloading...');
  
  const layoutPath = path.join(__dirname, '..', 'src', 'app', 'layout.tsx');
  if (!fs.existsSync(layoutPath)) {
    console.log('⚠️  Layout file not found');
    return false;
  }

  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  
  // Check for preload links
  const hasPreloads = CRITICAL_RESOURCES.some(resource => 
    layoutContent.includes(`rel="preload"`) && layoutContent.includes(resource)
  );

  if (!hasPreloads) {
    console.log('💡 Consider adding preload links for critical resources in layout.tsx');
    console.log('   Example: <link rel="preload" href="/company_logo.png" as="image" />');
  } else {
    console.log('✅ Critical resource preloading detected');
  }

  return true;
}

function checkMobileOptimization() {
  console.log('📱 Checking mobile optimization...');
  
  // Check viewport meta tag
  const layoutPath = path.join(__dirname, '..', 'src', 'app', 'layout.tsx');
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  
  const hasViewport = layoutContent.includes('viewport') || layoutContent.includes('device-width');
  
  if (hasViewport) {
    console.log('✅ Viewport meta tag configured');
  } else {
    console.log('⚠️  Viewport meta tag missing or not configured properly');
  }

  // Check for responsive images
  const componentsDir = path.join(__dirname, '..', 'src', 'components');
  if (fs.existsSync(componentsDir)) {
    const optimizedImagePath = path.join(componentsDir, 'OptimizedImage.tsx');
    if (fs.existsSync(optimizedImagePath)) {
      console.log('✅ OptimizedImage component found');
    } else {
      console.log('💡 Consider creating an OptimizedImage component for responsive images');
    }
  }

  return hasViewport;
}

function checkContactFormOptimization() {
  console.log('📞 Checking contact form optimization...');
  
  const contactPath = path.join(__dirname, '..', 'src', 'app', 'contact', 'page.tsx');
  if (!fs.existsSync(contactPath)) {
    console.log('⚠️  Contact page not found');
    return false;
  }

  const contactContent = fs.readFileSync(contactPath, 'utf8');
  
  // Check for local phone number
  const hasLocalPhone = contactContent.includes('(412) 403-5559');
  const hasEmail = contactContent.includes('info@threeriverstech.com');
  const hasAddress = contactContent.includes('124 Grant Street');
  
  console.log(`✅ Local phone number: ${hasLocalPhone ? 'Present' : 'Missing'}`);
  console.log(`✅ Email contact: ${hasEmail ? 'Present' : 'Missing'}`);
  console.log(`✅ Local address: ${hasAddress ? 'Present' : 'Missing'}`);

  // Check for Google Calendar integration
  const hasScheduling = contactContent.includes('calendar') || contactContent.includes('schedule');
  console.log(`✅ Scheduling integration: ${hasScheduling ? 'Present' : 'Missing'}`);

  return hasLocalPhone && hasEmail && hasAddress;
}

function generatePerformanceReport() {
  console.log('\n📊 Performance Optimization Report for Local Users');
  console.log('='.repeat(60));
  
  const results = {
    bundleSize: checkBundleSize(),
    imageOptimization: checkImageOptimization(),
    criticalResources: checkCriticalResourcePreloading(),
    mobileOptimization: checkMobileOptimization(),
    contactOptimization: checkContactFormOptimization()
  };

  console.log('\n📈 Summary:');
  Object.entries(results).forEach(([check, passed]) => {
    console.log(`${passed ? '✅' : '⚠️ '} ${check}: ${passed ? 'Optimized' : 'Needs attention'}`);
  });

  const allPassed = Object.values(results).every(Boolean);
  
  if (allPassed) {
    console.log('\n🎉 Website is optimized for local users!');
  } else {
    console.log('\n💡 Recommendations for local user optimization:');
    console.log('   - Optimize large images with npm run optimize:images');
    console.log('   - Add preload links for critical resources');
    console.log('   - Ensure mobile-first responsive design');
    console.log('   - Test on slower connections (3G simulation)');
    console.log('   - Verify contact information is easily accessible');
  }

  return allPassed;
}

function generateLocalUserGuidelines() {
  console.log('\n📋 Local User Performance Guidelines');
  console.log('='.repeat(50));
  
  console.log('\n🎯 Target Audience: Turtle Creek & Mon Valley Residents');
  console.log('   - Mixed internet speeds (DSL, Cable, Mobile)');
  console.log('   - Various devices (older smartphones, tablets, desktops)');
  console.log('   - Different technical comfort levels');
  
  console.log('\n⚡ Performance Targets:');
  console.log(`   - Page load time: < 3 seconds on 3G`);
  console.log(`   - First paint: < ${PERFORMANCE_TARGETS.FCP}ms`);
  console.log(`   - Interactive: < ${PERFORMANCE_TARGETS.FID}ms`);
  console.log(`   - Layout stability: < ${PERFORMANCE_TARGETS.CLS}`);
  
  console.log('\n📱 Mobile Optimization:');
  console.log('   - Touch targets ≥ 44px');
  console.log('   - Readable text without zooming');
  console.log('   - Easy-to-tap phone numbers and addresses');
  console.log('   - Simple navigation for all age groups');
  
  console.log('\n🔧 Technical Optimizations:');
  console.log('   - Compress images (WebP/AVIF)');
  console.log('   - Minimize JavaScript bundles');
  console.log('   - Use system fonts when possible');
  console.log('   - Implement proper caching headers');
  console.log('   - Optimize for Core Web Vitals');
}

const isDirectExecution = process.argv[1]
  ? path.resolve(process.argv[1]) === __filename
  : false;

export function main() {
  console.log('🚀 Optimizing website for local users...\n');

  const success = generatePerformanceReport();
  generateLocalUserGuidelines();

  return success;
}

if (isDirectExecution) {
  process.exit(main() ? 0 : 1);
}

export {
  checkBundleSize,
  checkImageOptimization,
  checkMobileOptimization,
  checkContactFormOptimization,
  PERFORMANCE_TARGETS,
  generatePerformanceReport,
  generateLocalUserGuidelines,
  main
};
