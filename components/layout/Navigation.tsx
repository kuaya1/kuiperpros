'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Satellite, ChevronDown } from 'lucide-react'
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

            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button 
                  className="text-gray-900 hover:text-brand-600 transition flex items-center gap-1 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-md px-2 py-1"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Installation
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 border border-gray-100">
                  <div className="py-2">
                    <Link 
                      href="/installation-guide" 
                      className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-brand-50 hover:text-brand-600 transition focus-visible:outline-none focus-visible:bg-brand-50 focus-visible:text-brand-600"
                    >
                      Installation Guide
                    </Link>
                    <Link 
                      href="/kuiper-vs-starlink-installation" 
                      className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-brand-50 hover:text-brand-600 transition focus-visible:outline-none focus-visible:bg-brand-50 focus-visible:text-brand-600"
                    >
                      Kuiper vs Competitors
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button 
                  className="text-gray-900 hover:text-brand-600 transition flex items-center gap-1 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-md px-2 py-1"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Locations
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 border border-gray-100">
                  <div className="py-2">
                    <Link 
                      href="/locations/california" 
                      className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-brand-50 hover:text-brand-600 transition focus-visible:outline-none focus-visible:bg-brand-50 focus-visible:text-brand-600"
                    >
                      California
                    </Link>
                    <Link 
                      href="/locations/texas" 
                      className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-brand-50 hover:text-brand-600 transition focus-visible:outline-none focus-visible:bg-brand-50 focus-visible:text-brand-600"
                    >
                      Texas
                    </Link>
                    <Link 
                      href="/locations/florida" 
                      className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-brand-50 hover:text-brand-600 transition focus-visible:outline-none focus-visible:bg-brand-50 focus-visible:text-brand-600"
                    >
                      Florida
                    </Link>
                  </div>
                </div>
              </div>
              <Link 
                href="/blog" 
                className="text-gray-900 hover:text-brand-600 transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-md px-2 py-1"
              >
                Blog
              </Link>
              <Link 
                href="/technician/apply" 
                className="text-gray-900 hover:text-brand-600 transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-md px-2 py-1"
              >
                For Technicians
              </Link>
              <Link href="/quote">
                <Button className="shadow-md hover:shadow-lg transition-shadow">Get Installation Quote</Button>
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
                  href="/installation-guide" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Installation Guide
                </Link>
                <Link 
                  href="/kuiper-vs-starlink-installation" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kuiper vs Competitors
                </Link>
                <Link 
                  href="/locations/california" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  California
                </Link>
                <Link 
                  href="/locations/texas" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Texas
                </Link>
                <Link 
                  href="/locations/florida" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Florida
                </Link>
                <Link 
                  href="/blog" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/technician/apply" 
                  className="text-gray-900 hover:text-brand-600 hover:bg-brand-50 px-4 py-3 rounded-md transition font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  For Technicians
                </Link>
                <Link href="/quote" className="mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full">Get Installation Quote</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}