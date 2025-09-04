/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kuiperpros.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*', '/sitemap.xml'], // Exclude the dynamic sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://kuiperpros.com/sitemap.xml', // Dynamic sitemap from app/sitemap.ts
    ],
  },
  transform: async (config, path) => {
    // Custom priority for important pages
    const priorities = {
      '/': 1.0,
      '/quote': 0.9,
      '/installation-guide': 0.9,
      '/kuiper-vs-starlink-installation': 0.8,
      '/locations/california': 0.8,
      '/locations/texas': 0.8,
      '/locations/florida': 0.8,
      '/locations/new-york': 0.8,
      '/blog': 0.7,
      '/technician': 0.6,
    }

    // Enhanced change frequency based on content type
    let changefreq = 'monthly'
    if (path.includes('/blog/')) {
      changefreq = 'weekly'
    } else if (path.includes('/locations/')) {
      changefreq = 'monthly'
    } else if (path === '/' || path === '/quote') {
      changefreq = 'weekly'
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priorities[path] || 0.6,
      lastmod: new Date().toISOString(),
    }
  },
}
