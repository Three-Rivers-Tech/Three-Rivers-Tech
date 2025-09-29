#!/usr/bin/env node

/**
 * Image optimization script for generating WebP and AVIF versions
 * Run this script to optimize all images in the public directory
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];
const OUTPUT_FORMATS = ['webp', 'avif'];

// Quality settings for different image types
const QUALITY_SETTINGS = {
  webp: {
    quality: 85,
    effort: 6
  },
  avif: {
    quality: 80,
    effort: 9
  }
};

// Responsive sizes for different image categories
const RESPONSIVE_SIZES = {
  'company_logo.png': [32, 48, 64],
  'service-icon-': [32, 48, 64, 96],
  'feature-icon-': [32, 48, 64],
  'portfolio-': [300, 400, 600, 800],
  'favicon-': [16, 32, 48, 192]
};

async function getImageFiles(dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      const subFiles = await getImageFiles(fullPath);
      files.push(...subFiles);
    } else if (SUPPORTED_FORMATS.includes(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function getResponsiveSizes(filename) {
  for (const [pattern, sizes] of Object.entries(RESPONSIVE_SIZES)) {
    if (filename.includes(pattern)) {
      return sizes;
    }
  }
  return []; // No responsive sizes needed
}

async function optimizeImage(inputPath, outputFormat) {
  const filename = path.basename(inputPath);
  const nameWithoutExt = path.parse(filename).name;
  const dir = path.dirname(inputPath);
  
  console.log(`Optimizing ${filename} to ${outputFormat}...`);
  
  try {
    // Get responsive sizes for this image
    const responsiveSizes = getResponsiveSizes(filename);
    
    if (responsiveSizes.length > 0) {
      // Generate responsive versions
      for (const size of responsiveSizes) {
        const outputPath = path.join(dir, `${nameWithoutExt}-${size}w.${outputFormat}`);
        
        await sharp(inputPath)
          .resize(size, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          [outputFormat](QUALITY_SETTINGS[outputFormat])
          .toFile(outputPath);
        
        console.log(`  Generated ${size}w version`);
      }
    }
    
    // Generate main optimized version
    const mainOutputPath = path.join(dir, `${nameWithoutExt}.${outputFormat}`);
    
    await sharp(inputPath)
      [outputFormat](QUALITY_SETTINGS[outputFormat])
      .toFile(mainOutputPath);
    
    console.log(`  Generated main ${outputFormat} version`);
    
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, error.message);
  }
}

async function generateOptimizedImages() {
  console.log('Starting image optimization...');
  console.log(`Scanning directory: ${PUBLIC_DIR}`);
  
  try {
    const imageFiles = await getImageFiles(PUBLIC_DIR);
    console.log(`Found ${imageFiles.length} images to optimize`);
    
    for (const imagePath of imageFiles) {
      const filename = path.basename(imagePath);
      console.log(`\nProcessing: ${filename}`);
      
      // Skip if already optimized versions exist
      const nameWithoutExt = path.parse(filename).name;
      const dir = path.dirname(imagePath);
      
      for (const format of OUTPUT_FORMATS) {
        const optimizedPath = path.join(dir, `${nameWithoutExt}.${format}`);
        
        try {
          await fs.access(optimizedPath);
          console.log(`  ${format.toUpperCase()} version already exists, skipping...`);
        } catch {
          // File doesn't exist, create it
          await optimizeImage(imagePath, format);
        }
      }
    }
    
    console.log('\n✅ Image optimization complete!');
    console.log('\nGenerated formats:');
    console.log('  - WebP: Modern format with excellent compression');
    console.log('  - AVIF: Next-generation format with superior compression');
    console.log('  - Responsive sizes: Multiple sizes for different breakpoints');
    
  } catch (error) {
    console.error('Error during image optimization:', error);
    process.exit(1);
  }
}

// Add image analysis function
async function analyzeImages() {
  console.log('\n📊 Analyzing current images...');
  
  const imageFiles = await getImageFiles(PUBLIC_DIR);
  const analysis = {
    total: imageFiles.length,
    formats: {},
    sizes: {},
    totalSize: 0
  };
  
  for (const imagePath of imageFiles) {
    const stats = await fs.stat(imagePath);
    const ext = path.extname(imagePath).toLowerCase();
    
    analysis.formats[ext] = (analysis.formats[ext] || 0) + 1;
    analysis.totalSize += stats.size;
    
    if (stats.size > 100000) { // > 100KB
      analysis.sizes.large = (analysis.sizes.large || 0) + 1;
    } else if (stats.size > 50000) { // > 50KB
      analysis.sizes.medium = (analysis.sizes.medium || 0) + 1;
    } else {
      analysis.sizes.small = (analysis.sizes.small || 0) + 1;
    }
  }
  
  console.log(`Total images: ${analysis.total}`);
  console.log(`Total size: ${(analysis.totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log('Formats:', analysis.formats);
  console.log('Size distribution:', analysis.sizes);
}

// Run the optimization
if (require.main === module) {
  (async () => {
    await analyzeImages();
    await generateOptimizedImages();
  })();
}

module.exports = { generateOptimizedImages, analyzeImages };