'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { CheckCircle, Shield, Clock, ArrowRight, MapPin } from 'lucide-react'
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
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Certified Amazon Kuiper Installation
              <span className="text-brand-600"> Professionals</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with certified Kuiper installers for expert satellite internet setup. 
              Professional dish mounting, weatherproof installation, and 2-hour average completion time across all 50 states.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/quote" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full group shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Your Quote in 60 Seconds
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
            
            <div className="text-center sm:text-left mb-8">
              <Link 
                href="/installation-guide" 
                className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center gap-1 underline-offset-4 hover:underline transition-colors"
              >
                How does installation work?
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-900">Certified Installers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-900">Insured & Vetted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-900">Same Week Service</span>
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
              alt="Professional technician installing Kuiper satellite dish on residential roof with clear blue sky background"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-[200px]">
              <div className="flex items-start space-x-3">
                <div className="bg-brand-100 rounded-full p-2 flex-shrink-0">
                  <Shield className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-gray-900">2,500+</p>
                  <p className="text-sm text-gray-600 leading-tight">Installations Completed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}