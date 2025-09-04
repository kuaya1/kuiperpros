/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kuiperpros.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://kuiperpros.com/sitemap.xml',
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

    return {
      loc: path,
      changefreq: path.includes('/blog/') ? 'weekly' : 'monthly',
      priority: priorities[path] || 0.6,
      lastmod: new Date().toISOString(),
    }
  },
}
