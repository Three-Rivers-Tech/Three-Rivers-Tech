#!/usr/bin/env node

/**
 * Bundle analysis script
 * Analyzes JavaScript and CSS bundles to identify optimization opportunities
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Analyze JavaScript files in the build output
function analyzeJavaScript() {
  const buildDir = path.join(__dirname, '../.next');
  const staticDir = path.join(buildDir, 'static');
  
  if (!fs.existsSync(staticDir)) {
    console.log('Build directory not found. Run "npm run build" first.');
    return;
  }
  
  console.log('📊 JavaScript Bundle Analysis');
  console.log('================================');
  
  // Find all JS files
  const findJSFiles = (dir) => {
    const files = [];
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...findJSFiles(fullPath));
      } else if (item.endsWith('.js')) {
        const size = stat.size;
        files.push({
          name: path.relative(buildDir, fullPath),
          size,
          sizeKB: (size / 1024).toFixed(2)
        });
      }
    });
    
    return files;
  };
  
  const jsFiles = findJSFiles(staticDir);
  
  // Sort by size (largest first)
  jsFiles.sort((a, b) => b.size - a.size);
  
  console.log('\n🔍 JavaScript Files (sorted by size):');
  jsFiles.forEach(file => {
    const sizeIndicator = file.size > 100000 ? '🔴' : file.size > 50000 ? '🟡' : '🟢';
    console.log(`${sizeIndicator} ${file.name}: ${file.sizeKB}KB`);
  });
  
  const totalSize = jsFiles.reduce((sum, file) => sum + file.size, 0);
  console.log(`\n📈 Total JavaScript: ${(totalSize / 1024).toFixed(2)}KB`);
  
  // Identify large files that might need optimization
  const largeFiles = jsFiles.filter(file => file.size > 100000);
  if (largeFiles.length > 0) {
    console.log('\n⚠️  Large files that may need optimization:');
    largeFiles.forEach(file => {
      console.log(`   • ${file.name}: ${file.sizeKB}KB`);
    });
  }
}

// Analyze CSS files
function analyzeCSS() {
  const buildDir = path.join(__dirname, '../.next');
  const staticDir = path.join(buildDir, 'static');
  
  console.log('\n🎨 CSS Bundle Analysis');
  console.log('======================');
  
  const findCSSFiles = (dir) => {
    const files = [];
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...findCSSFiles(fullPath));
      } else if (item.endsWith('.css')) {
        const size = stat.size;
        files.push({
          name: path.relative(buildDir, fullPath),
          size,
          sizeKB: (size / 1024).toFixed(2)
        });
      }
    });
    
    return files;
  };
  
  const cssFiles = findCSSFiles(staticDir);
  
  if (cssFiles.length === 0) {
    console.log('No CSS files found in build output.');
    return;
  }
  
  cssFiles.sort((a, b) => b.size - a.size);
  
  console.log('\n🔍 CSS Files (sorted by size):');
  cssFiles.forEach(file => {
    const sizeIndicator = file.size > 50000 ? '🔴' : file.size > 25000 ? '🟡' : '🟢';
    console.log(`${sizeIndicator} ${file.name}: ${file.sizeKB}KB`);
  });
  
  const totalSize = cssFiles.reduce((sum, file) => sum + file.size, 0);
  console.log(`\n📈 Total CSS: ${(totalSize / 1024).toFixed(2)}KB`);
}

// Generate optimization recommendations
function generateRecommendations() {
  console.log('\n💡 Optimization Recommendations');
  console.log('================================');
  
  console.log('1. 🚀 Code Splitting:');
  console.log('   • Large components should be lazy-loaded');
  console.log('   • Use dynamic imports for non-critical features');
  
  console.log('\n2. 🗜️  Bundle Size:');
  console.log('   • Remove unused dependencies');
  console.log('   • Use tree shaking for libraries');
  console.log('   • Consider lighter alternatives for heavy libraries');
  
  console.log('\n3. 📦 Asset Optimization:');
  console.log('   • Compress images and use modern formats (WebP, AVIF)');
  console.log('   • Minify CSS and remove unused styles');
  console.log('   • Enable gzip/brotli compression');
  
  console.log('\n4. ⚡ Loading Strategy:');
  console.log('   • Preload critical resources');
  console.log('   • Lazy load below-the-fold content');
  console.log('   • Use service workers for caching');
}

// Main execution
function main() {
  console.log('🔍 Three Rivers Tech - Bundle Analyzer');
  console.log('======================================\n');
  
  analyzeJavaScript();
  analyzeCSS();
  generateRecommendations();
  
  console.log('\n✅ Analysis complete!');
  console.log('💡 Run this script after each build to monitor bundle size changes.');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  analyzeJavaScript,
  analyzeCSS,
  generateRecommendations
};