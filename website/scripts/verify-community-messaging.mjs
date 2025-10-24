#!/usr/bin/env node

/**
 * Community Messaging Verification Script
 * Checks for consistent hometown messaging across all website components
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Expected community messaging elements
const expectedElements = {
  businessName: "Three Rivers Tech",
  tagline: "Your hometown tech partner",
  location: "Turtle Creek, PA 15145",
  address: "124 Grant Street",
  phone: "(412) 403-5559",
  email: "info@threeriverstech.com",
  valueProposition: "big-city know-how at small-town prices",
  serviceAreas: ["Turtle Creek", "Monroeville", "Wilmerding", "Mon Valley"],
  ctaPrimary: "Call (412) 403-5559 for Free Consultation",
  ctaSecondary: "Book Your Home Visit Today"
};

// Files to check for consistency
const filesToCheck = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/components/Header.tsx',
  'src/app/components/Footer.tsx',
  'src/app/components/EnhancedHero.tsx',
  'src/app/components/CallToAction.tsx',
  'src/app/about/page.tsx',
  'src/app/services/page.tsx',
  'src/app/contact/page.tsx',
  'src/components/MobileNavigation.tsx',
  'src/lib/metadata.ts',
  'src/lib/structured-data.ts'
];

function checkFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }

  const content = fs.readFileSync(fullPath, 'utf8');
  const issues = [];

  // Check for business name consistency
  if (content.includes(expectedElements.businessName)) {
    console.log(`✅ Business name found in: ${filePath}`);
  } else if (filePath.includes('component') || filePath.includes('page')) {
    issues.push('Missing business name');
  }

  // Check for location information
  if (content.includes(expectedElements.location) || content.includes(expectedElements.zipCode)) {
    console.log(`✅ Location info found in: ${filePath}`);
  } else if (filePath.includes('Hero') || filePath.includes('Footer') || filePath.includes('Contact')) {
    issues.push('Missing location information');
  }

  // Check for phone number consistency
  if (content.includes(expectedElements.phone)) {
    console.log(`✅ Phone number found in: ${filePath}`);
  } else if (filePath.includes('Contact') || filePath.includes('Footer') || filePath.includes('Hero')) {
    issues.push('Missing or inconsistent phone number');
  }

  // Check for community messaging
  const communityTerms = ['hometown', 'community', 'local', 'neighbors', 'Mon Valley'];
  const hasCommunityMessaging = communityTerms.some(term => 
    content.toLowerCase().includes(term.toLowerCase())
  );
  
  if (hasCommunityMessaging) {
    console.log(`✅ Community messaging found in: ${filePath}`);
  } else if (filePath.includes('Hero') || filePath.includes('About') || filePath.includes('page.tsx')) {
    issues.push('Missing community-focused messaging');
  }

  if (issues.length > 0) {
    console.log(`⚠️  Issues in ${filePath}:`, issues);
    return false;
  }

  return true;
}

function main() {
  console.log('🔍 Verifying community messaging consistency...\n');
  
  let allGood = true;
  
  for (const file of filesToCheck) {
    const result = checkFile(file);
    if (!result) {
      allGood = false;
    }
    console.log(''); // Add spacing
  }

  console.log('\n📊 Summary:');
  if (allGood) {
    console.log('✅ All files have consistent community messaging!');
  } else {
    console.log('⚠️  Some files need attention for community messaging consistency.');
  }

  // Check for specific requirements
  console.log('\n🎯 Checking specific requirements:');
  
  // Check metadata for local SEO
  const metadataPath = path.join(__dirname, '..', 'src/lib/metadata.ts');
  if (fs.existsSync(metadataPath)) {
    const metadataContent = fs.readFileSync(metadataPath, 'utf8');
    if (metadataContent.includes('computer repair Turtle Creek PA')) {
      console.log('✅ Local SEO keywords present in metadata');
    } else {
      console.log('⚠️  Local SEO keywords missing in metadata');
    }
  }

  // Check structured data for local business
  const structuredDataPath = path.join(__dirname, '..', 'src/lib/structured-data.ts');
  if (fs.existsSync(structuredDataPath)) {
    const structuredContent = fs.readFileSync(structuredDataPath, 'utf8');
    if (structuredContent.includes('LocalBusiness')) {
      console.log('✅ LocalBusiness schema present');
    } else {
      console.log('⚠️  LocalBusiness schema missing');
    }
  }

  return allGood;
}

const isDirectExecution = process.argv[1]
  ? path.resolve(process.argv[1]) === __filename
  : false;

if (isDirectExecution) {
  const success = main();
  process.exit(success ? 0 : 1);
}

export { checkFile, expectedElements, main };
