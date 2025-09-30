import { MetadataRoute } from 'next'
import { SITE_CONFIG, EXCLUDED_PATHS } from '@/lib/sitemap-config'

// Configure for static export
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Disallow crawling of API routes and internal directories
        disallow: EXCLUDED_PATHS,
      },
      // Allow search engines to crawl all public pages
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${SITE_CONFIG.baseUrl}/sitemap.xml`,
    host: SITE_CONFIG.baseUrl,
  }
}