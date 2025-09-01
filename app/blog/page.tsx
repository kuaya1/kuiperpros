import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Clock, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kuiper Internet Blog - Latest News & Guides | KuiperPros',
  description: 'Stay updated with the latest Amazon Project Kuiper news, installation guides, and satellite internet insights from industry experts.',
  keywords: 'Amazon Kuiper, satellite internet, installation guides, space internet news',
}

const blogPosts = [
  {
    id: 'what-is-amazon-project-kuiper',
    title: 'What is Amazon Project Kuiper? Complete 2025 Guide',
    excerpt: 'Everything you need to know about Amazon\'s satellite internet constellation, launch timeline, and how it will change internet access.',
    author: 'KuiperPros Team',
    date: '2025-08-31',
    readTime: '8 min read',
    category: 'Guide',
    featured: true,
  },
  {
    id: 'kuiper-vs-starlink-comparison',
    title: 'Kuiper vs Starlink: Detailed Comparison',
    excerpt: 'Compare Amazon Kuiper and Starlink satellite internet services including speed, coverage, pricing, and installation requirements.',
    author: 'Tech Analysis Team',
    date: '2025-08-30',
    readTime: '12 min read',
    category: 'Comparison',
    featured: true,
  },
  {
    id: 'kuiper-internet-cost-pricing',
    title: 'How Much Will Kuiper Internet Cost?',
    excerpt: 'Detailed analysis of expected Kuiper internet pricing, equipment costs, and installation fees based on industry insights.',
    author: 'Market Research Team',
    date: '2025-08-29',
    readTime: '6 min read',
    category: 'Pricing',
    featured: false,
  },
  {
    id: 'kuiper-coverage-map-availability',
    title: 'Kuiper Coverage Map and Availability',
    excerpt: 'Interactive coverage maps showing where Kuiper internet will be available and expected rollout timeline by region.',
    author: 'Coverage Analysis Team',
    date: '2025-08-28',
    readTime: '5 min read',
    category: 'Coverage',
    featured: false,
  },
  {
    id: 'kuiper-installation-requirements',
    title: 'Kuiper Installation Requirements',
    excerpt: 'Complete guide to Kuiper dish installation requirements, site preparation, and what to expect from professional installation.',
    author: 'Installation Experts',
    date: '2025-08-27',
    readTime: '10 min read',
    category: 'Installation',
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="py-16">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kuiper Internet Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest Amazon Project Kuiper news, installation guides, 
              and expert insights into satellite internet technology.
            </p>
          </div>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span className="bg-brand-100 text-brand-600 px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-brand-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      
                      <Link 
                        href={`/blog/${post.id}`}
                        className="flex items-center space-x-1 text-brand-600 hover:text-brand-700 font-medium"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Regular Posts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded font-medium text-xs">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-brand-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-brand-600 hover:text-brand-700 font-medium"
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16 bg-brand-50 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Stay Updated on Kuiper Internet
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest news, guides, and updates about Amazon Project Kuiper delivered 
              straight to your inbox. Be the first to know when service launches in your area.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-brand-600 text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
