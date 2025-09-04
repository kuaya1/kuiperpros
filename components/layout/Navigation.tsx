'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Satellite } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Satellite className="h-8 w-8 text-brand-600" />
            <span className="font-bold text-xl text-gray-900">KuiperPros</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link href="/installation-guide" className="text-gray-700 hover:text-brand-600 transition">
                Installation
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/installation-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Installation Guide
                  </Link>
                  <Link href="/kuiper-vs-starlink-installation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Kuiper vs Competitors
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link href="/locations/california" className="text-gray-700 hover:text-brand-600 transition">
                Locations
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/locations/california" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    California
                  </Link>
                  <Link href="/locations/texas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Texas
                  </Link>
                  <Link href="/locations/florida" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Florida
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/blog" className="text-gray-700 hover:text-brand-600 transition">
              Blog
            </Link>
            <Link href="/technician/apply" className="text-gray-700 hover:text-brand-600 transition">
              Join Network
            </Link>
            <Link href="/quote">
              <Button>Get Free Quote</Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/installation-guide" className="text-gray-700 hover:text-brand-600">
                Installation Guide
              </Link>
              <Link href="/kuiper-vs-starlink-installation" className="text-gray-700 hover:text-brand-600">
                Kuiper vs Competitors
              </Link>
              <Link href="/locations/california" className="text-gray-700 hover:text-brand-600">
                California
              </Link>
              <Link href="/locations/texas" className="text-gray-700 hover:text-brand-600">
                Texas
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-brand-600">
                Blog
              </Link>
              <Link href="/technician/apply" className="text-gray-700 hover:text-brand-600">
                Join Network
              </Link>
              <Link href="/quote">
                <Button className="w-full">Get Free Quote</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}