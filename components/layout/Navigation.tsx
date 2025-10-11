'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Satellite, ChevronDown, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-md">
              <Satellite className="h-8 w-8 text-brand-600" />
              <span className="font-bold text-xl text-gray-900">KuiperPros</span>
            </Link>

            {/* Aggregate Rating Badge - Early Trust Signal */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="border-l border-gray-300 pl-2">
                <div className="text-sm font-bold text-gray-900">4.8/5</div>
                <div className="text-xs text-gray-600">247 reviews</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/blog/what-is-amazon-project-kuiper" 
                className="text-gray-900 hover:text-brand-600 transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-md px-2 py-1"
              >
                Why Kuiper
              </Link>
              <div className="relative group">
                <button 
                  className="text-gray-900 hover:text-brand-600 transition flex items-center gap-1 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-md px-2 py-1"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 border border-gray-100">
                  <div className="py-2">
                    <Link 
                      href="/quote" 
                      className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-brand-50 hover:text-brand-600 transition focus-visible:outline-none focus-visible:bg-brand-50 focus-visible:text-brand-600"
                    >
                      <div className="font-semibold">Starlink Installation</div>
                      <div className="text-xs text-gray-500">Available Now</div>
                    </Link>
                    <Link 
                      href="#kuiper-waitlist" 
                      className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-brand-50 hover:text-brand-600 transition focus-visible:outline-none focus-visible:bg-brand-50 focus-visible:text-brand-600"
                    >
                      <div className="font-semibold">Kuiper Installation</div>
                      <div className="text-xs text-accent-600">Q1 2026 Launch</div>
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <Link 
                      href="/installation-guide" 
                      className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-brand-50 hover:text-brand-600 transition focus-visible:outline-none focus-visible:bg-brand-50 focus-visible:text-brand-600"
                    >
                      Commercial Installation
                    </Link>
                  </div>
                </div>
              </div>
              <Link 
                href="#coverage-checker" 
                className="text-gray-900 hover:text-brand-600 transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-md px-2 py-1"
              >
                Coverage
              </Link>
              <div className="relative group">
                <button 
                  className="text-gray-900 hover:text-brand-600 transition flex items-center gap-1 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-md px-2 py-1"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Resources
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 border border-gray-100">
                  <div className="py-2">
                    <Link 
                      href="/installation-guide" 
                      className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-brand-50 hover:text-brand-600 transition focus-visible:outline-none focus-visible:bg-brand-50 focus-visible:text-brand-600"
                    >
                      How It Works
                    </Link>
                    <Link 
                      href="#faq" 
                      className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-brand-50 hover:text-brand-600 transition focus-visible:outline-none focus-visible:bg-brand-50 focus-visible:text-brand-600"
                    >
                      FAQs
                    </Link>
                    <Link 
                      href="/blog" 
                      className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-brand-50 hover:text-brand-600 transition focus-visible:outline-none focus-visible:bg-brand-50 focus-visible:text-brand-600"
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/kuiper-vs-starlink-installation" 
                      className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-brand-50 hover:text-brand-600 transition focus-visible:outline-none focus-visible:bg-brand-50 focus-visible:text-brand-600"
                    >
                      Kuiper vs Starlink
                    </Link>
                  </div>
                </div>
              </div>
              <Link 
                href="/technician/apply" 
                className="text-gray-900 hover:text-brand-600 transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-md px-2 py-1"
              >
                For Technicians
              </Link>
              <Link href="#kuiper-waitlist">
                <Button className="bg-accent-500 hover:bg-accent-600 text-brand-900 shadow-md hover:shadow-lg transition-all">Reserve Installation</Button>
              </Link>
            </div>

            <button
              className="md:hidden flex items-center gap-2 px-3 py-2 text-gray-900 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <>
                  <X className="h-6 w-6" aria-hidden="true" />
                  <span className="text-sm font-medium">Close</span>
                </>
              ) : (
                <>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                  <span className="text-sm font-medium">Menu</span>
                </>
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-1">
                <Link 
                  href="/blog/what-is-amazon-project-kuiper" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Why Kuiper
                </Link>
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Services
                </div>
                <Link 
                  href="/quote" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="font-semibold">Starlink Installation</div>
                  <div className="text-xs text-gray-500">Available Now</div>
                </Link>
                <Link 
                  href="#kuiper-waitlist" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="font-semibold">Kuiper Installation</div>
                  <div className="text-xs text-accent-600">Q1 2026 Launch</div>
                </Link>
                <Link 
                  href="/installation-guide" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Commercial Installation
                </Link>
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Resources
                </div>
                <Link 
                  href="/installation-guide" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link 
                  href="#faq" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
                <Link 
                  href="/blog" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/kuiper-vs-starlink-installation" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kuiper vs Starlink
                </Link>
                <Link 
                  href="#coverage-checker" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Coverage
                </Link>
                <Link 
                  href="/technician/apply" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  For Technicians
                </Link>
                <Link href="#kuiper-waitlist" className="mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent-500 hover:bg-accent-600 text-brand-900">Reserve Installation</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}