import { MetadataRoute } from 'next'
import { STATIC_PAGES, SITE_CONFIG, generateSitemapEntries } from '@/lib/sitemap-config'

// Configure for static export
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  // Generate static pages from configuration
  const staticPages = generateSitemapEntries(STATIC_PAGES, SITE_CONFIG.baseUrl)

  // TODO: Add dynamic portfolio pages when portfolio data is available
  // This would typically fetch from a CMS or database
  const dynamicPortfolioPages: MetadataRoute.Sitemap = []
  
  // In the future, you could add dynamic pages like this:
  // const portfolioItems = await getPortfolioItems()
  // const dynamicPortfolioPages = portfolioItems.map((item) => ({
  //   url: `${SITE_CONFIG.baseUrl}/portfolio/${item.id}/`,
  //   lastModified: item.updatedAt || new Date().toISOString(),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }))

  return [
    ...staticPages,
    ...dynamicPortfolioPages,
  ]
}