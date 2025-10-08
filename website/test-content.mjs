/**
 * Simple test script for the content management system
 * Run with: node test-content.js
 */

// Simple test that doesn't require TypeScript compilation

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function simpleContentTest() {
  console.log('\n' + '='.repeat(60));
  console.log('CONTENT MANAGEMENT SYSTEM - SIMPLE TEST');
  console.log('='.repeat(60));

  const results = [];
  const errors = [];

  // Test if content files exist
  const contentFiles = [
    'src/content/global/business.json',
    'src/content/services.json', 
    'src/content/testimonials.json',
    'src/content/pages/home.json'
  ];

  for (const file of contentFiles) {
    const filePath = path.join(__dirname, file);
    try {
      if (fs.existsSync(filePath)) {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        results.push(`✅ ${file}: File exists and is valid JSON`);
        
        // Basic content validation
        if (file.includes('business.json')) {
          if (content.name && content.email && content.phone) {
            results.push(`   • Business: ${content.name}`);
          } else {
            errors.push(`   ❌ Business info missing required fields`);
          }
        } else if (file.includes('services.json')) {
          if (Array.isArray(content) && content.length > 0) {
            results.push(`   • Services: ${content.length} services loaded`);
          } else {
            errors.push(`   ❌ Services array is empty or invalid`);
          }
        } else if (file.includes('testimonials.json')) {
          if (Array.isArray(content) && content.length > 0) {
            results.push(`   • Testimonials: ${content.length} testimonials loaded`);
          } else {
            errors.push(`   ❌ Testimonials array is empty or invalid`);
          }
        } else if (file.includes('home.json')) {
          if (content.hero && content.seo) {
            results.push(`   • Home page: Hero and SEO content present`);
          } else {
            errors.push(`   ❌ Home page missing hero or SEO content`);
          }
        }
      } else {
        errors.push(`❌ ${file}: File not found`);
      }
    } catch (error) {
      errors.push(`❌ ${file}: ${error.message}`);
    }
  }

  // Test if TypeScript files exist
  const tsFiles = [
    'src/lib/types/content.ts',
    'src/lib/schemas/content.ts',
    'src/lib/content/loader.ts',
    'src/lib/content/provider.ts',
    'src/lib/content/index.ts'
  ];

  for (const file of tsFiles) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      results.push(`✅ ${file}: TypeScript file exists`);
    } else {
      errors.push(`❌ ${file}: TypeScript file not found`);
    }
  }

  // Display results
  results.forEach(result => console.log(result));
  
  if (errors.length > 0) {
    console.log('\n❌ ERRORS:');
    errors.forEach(error => console.log(error));
  }

  console.log('\n' + '='.repeat(60));
  console.log(errors.length === 0 ? '✅ BASIC TESTS PASSED' : '❌ SOME TESTS FAILED');
  console.log('='.repeat(60) + '\n');

  return errors.length === 0;
}

// Run the test
simpleContentTest().catch(console.error);