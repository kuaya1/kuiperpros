'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { CheckCircle, Shield, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-brand-50 to-white py-20 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional Amazon Kuiper Installation
              <span className="text-brand-600"> Nationwide</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with certified technicians for expert satellite internet installation. 
              Fast, reliable, and professional service across all 50 states.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/quote">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Free Installation Quote
                </Button>
              </Link>
              <Link href="/technician/apply">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Become a Technician
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-700">Certified Installers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-700">Insured & Vetted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-700">Same Week Service</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/api/placeholder/600/400"
              alt="Kuiper Satellite Installation"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-brand-100 rounded-full p-2">
                  <Shield className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">2,500+</p>
                  <p className="text-sm text-gray-600">Installations Completed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}