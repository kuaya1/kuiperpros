import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kuiperpros.com'
  const currentDate = new Date()

  // Define all our location pages with custom priorities
  const locationPages = [
    { state: 'california', priority: 0.8 },
    { state: 'texas', priority: 0.8 },
    { state: 'florida', priority: 0.8 },
    // Future states can be added here
  ]

  // Define blog posts with publication dates and priorities
  const blogPosts = [
    { 
      slug: 'do-i-need-professional-kuiper-installation',
      priority: 0.7,
      lastModified: new Date('2024-12-01')
    },
    { 
      slug: 'what-is-amazon-project-kuiper',
      priority: 0.6,
      lastModified: new Date('2024-11-15')
    },
    { 
      slug: 'kuiper-vs-starlink-comparison',
      priority: 0.6,
      lastModified: new Date('2024-11-10')
    },
  ]

  const sitemap: MetadataRoute.Sitemap = [
    // Homepage - Highest Priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // High-Priority Service Pages
    {
      url: `${baseUrl}/quote`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/installation-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    
    // Competitive & Comparison Content
    {
      url: `${baseUrl}/kuiper-vs-starlink-installation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Blog Section
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    
    // Technician & Business Pages
    {
      url: `${baseUrl}/technician/apply`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/technician/dashboard`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    
    // Admin Pages (Lower Priority)
    {
      url: `${baseUrl}/admin/dashboard`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.3,
    },
  ]

  // Dynamically add location pages
  locationPages.forEach(location => {
    sitemap.push({
      url: `${baseUrl}/locations/${location.state}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: location.priority,
    })
  })

  // Dynamically add blog posts
  blogPosts.forEach(post => {
    sitemap.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.lastModified,
      changeFrequency: 'monthly',
      priority: post.priority,
    })
  })

  return sitemap
}
