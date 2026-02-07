import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Google - explicitly allowed
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/client/', '/proposal/'],
      },
      // AI Search Crawlers - explicitly allowed
      {
        userAgent: 'OAI-SearchBot',
        allow: ['/', '/api/glossary'],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/', '/api/glossary'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/', '/api/glossary'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: ['/', '/api/glossary'],
      },
      {
        userAgent: 'Claude-Web',
        allow: ['/', '/api/glossary'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/', '/api/glossary'],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/', '/api/glossary'],
      },
      // Default rules for all other crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/client/', '/proposal/'],
      },
    ],
    sitemap: 'https://www.slowmorocco.com/sitemap.xml',
  }
}
