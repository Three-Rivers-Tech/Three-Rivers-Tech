/**
 * Content Management System Test Utility
 * Simple test to verify the content loading system works correctly
 */

import { contentProvider } from './provider';
// Content loading utilities for testing

/**
 * Test the content management system
 */
export async function testContentSystem(): Promise<{
  success: boolean;
  results: string[];
  errors: string[];
}> {
  const results: string[] = [];
  const errors: string[] = [];

  try {
    results.push('🧪 Testing Content Management System...\n');

    // Test business info loading
    try {
      const businessInfo = await contentProvider.getBusinessInfo();
      results.push(`✅ Business Info: ${businessInfo.name}`);
      results.push(`   📍 Location: ${businessInfo.address.city}, ${businessInfo.address.state}`);
      results.push(`   📞 Phone: ${businessInfo.phone}`);
    } catch (error) {
      errors.push(`❌ Business Info: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    // Test services loading
    try {
      const services = await contentProvider.getServices();
      results.push(`✅ Services: Loaded ${services.length} services`);
      services.forEach(service => {
        results.push(`   • ${service.title} (${service.id})`);
      });
    } catch (error) {
      errors.push(`❌ Services: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    // Test testimonials loading
    try {
      const testimonials = await contentProvider.getTestimonials();
      results.push(`✅ Testimonials: Loaded ${testimonials.length} testimonials`);
      testimonials.forEach(testimonial => {
        results.push(`   • ${testimonial.name} from ${testimonial.company} (${testimonial.rating}⭐)`);
      });
    } catch (error) {
      errors.push(`❌ Testimonials: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    // Test page content loading
    try {
      const homeContent = await contentProvider.getPageContent('home');
      results.push(`✅ Home Page: "${homeContent.hero.headline}"`);
      results.push(`   📝 Description: ${homeContent.hero.description.substring(0, 50)}...`);
      results.push(`   🔍 SEO Title: ${homeContent.seo.title}`);
    } catch (error) {
      errors.push(`❌ Home Page: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    // Test content validation
    try {
      const validation = await contentProvider.validateContent();
      if (validation.valid) {
        results.push('✅ Content Validation: All content is valid');
      } else {
        results.push('⚠️ Content Validation: Some issues found');
        validation.errors.forEach(error => {
          results.push(`   • ${error}`);
        });
      }
    } catch (error) {
      errors.push(`❌ Content Validation: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    // Test content statistics
    try {
      const stats = await contentProvider.getContentStats();
      results.push(`📊 Content Statistics:`);
      results.push(`   • Pages: ${stats.pages}`);
      results.push(`   • Services: ${stats.services}`);
      results.push(`   • Testimonials: ${stats.testimonials}`);
      results.push(`   • Cache Size: ${stats.cacheSize}`);
    } catch (error) {
      errors.push(`❌ Content Statistics: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    results.push('\n🎉 Content Management System test completed!');

    return {
      success: errors.length === 0,
      results,
      errors,
    };
  } catch (error) {
    errors.push(`💥 Fatal Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return {
      success: false,
      results,
      errors,
    };
  }
}

/**
 * Run test and log results
 */
export async function runContentTest(): Promise<void> {
  const { success, results, errors } = await testContentSystem();
  
  console.log('\n' + '='.repeat(60));
  console.log('CONTENT MANAGEMENT SYSTEM TEST');
  console.log('='.repeat(60));
  
  results.forEach(result => console.log(result));
  
  if (errors.length > 0) {
    console.log('\n❌ ERRORS:');
    errors.forEach(error => console.log(error));
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(success ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED');
  console.log('='.repeat(60) + '\n');
}