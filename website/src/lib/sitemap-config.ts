import { MetadataRoute } from 'next'

export interface SitemapPage {
  path: string
  priority: number
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  lastModified?: string
}

export const SITE_CONFIG = {
  baseUrl: 'https://threeriverstech.com',
  name: 'Three Rivers Tech',
  description: 'Comprehensive Technology Solutions for Your Business',
}

// Static pages configuration with SEO priorities
export const STATIC_PAGES: SitemapPage[] = [
  {
    path: '/',
    priority: 1.0,
    changeFrequency: 'weekly',
  },
  {
    path: '/services/',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/about/',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/portfolio/',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    path: '/software-development/',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/contact/',
    priority: 0.7,
    changeFrequency: 'yearly',
  },
  {
    path: '/community-involvement/',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
]

// Pages to exclude from search engine crawling
export const EXCLUDED_PATHS = [
  '/api/',
  '/_next/',
  '/admin/',
  '/private/',
  '/search/', // Search results page doesn't need to be indexed
  '*.json',
  '*.xml$',
]

export function generateSitemapEntry(page: SitemapPage, baseUrl: string = SITE_CONFIG.baseUrl): MetadataRoute.Sitemap[0] {
  return {
    url: `${baseUrl}${page.path}`,
    lastModified: page.lastModified || new Date().toISOString(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }
}

export function generateSitemapEntries(pages: SitemapPage[], baseUrl: string = SITE_CONFIG.baseUrl): MetadataRoute.Sitemap {
  return pages.map(page => generateSitemapEntry(page, baseUrl))
}