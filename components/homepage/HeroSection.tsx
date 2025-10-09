'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { CheckCircle, Shield, Clock, ArrowRight, Satellite, Zap, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-accent-900 py-20 lg:py-32 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-space-pattern opacity-20"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Trust badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Satellite className="h-4 w-4 text-accent-400" />
              <span className="text-sm font-semibold text-white">Starlink Available Now • Kuiper Coming Q1 2026</span>
            </motion.div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight font-display">
              Professional Satellite Internet Installation.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600"> Ready for Amazon Kuiper Launch.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Expert satellite dish installation for Starlink, and preparing for Amazon Kuiper. Professional mounting, weatherproofing, and same-day service available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/quote" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full group bg-accent-500 hover:bg-accent-600 text-brand-900 shadow-2xl shadow-accent-500/50 hover:shadow-accent-500/70 transition-all duration-300 border-0"
                >
                  <span className="flex items-center justify-center gap-2 font-semibold">
                    Get Starlink Installation Quote
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              
              <Link href="#kuiper-waitlist" className="w-full sm:w-auto">
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2 font-semibold">
                    <Satellite className="h-5 w-5" />
                    Join Kuiper Waitlist
                  </span>
                </Button>
              </Link>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10"
              >
                <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0" />
                <span className="text-sm font-medium text-white">Certified Installers</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10"
              >
                <Shield className="h-5 w-5 text-accent-400 flex-shrink-0" />
                <span className="text-sm font-medium text-white">Insured & Vetted</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10"
              >
                <Clock className="h-5 w-5 text-accent-400 flex-shrink-0" />
                <span className="text-sm font-medium text-white">2-Hour Average</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/api/placeholder/700/500"
                alt="Professional technician installing satellite dish on modern residential roof with clear blue sky and advanced mounting equipment"
                className="rounded-2xl w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent"></div>
            </div>

            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 max-w-[220px]"
            >
              <div className="flex items-start space-x-3">
                <div className="bg-accent-100 rounded-full p-2 flex-shrink-0">
                  <Users className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <p className="font-bold text-3xl text-brand-900 tabular-nums">10+</p>
                  <p className="text-sm text-gray-600 leading-tight">Years Satellite Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl shadow-2xl p-6 max-w-[200px]"
            >
              <div className="flex items-start space-x-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 flex-shrink-0">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-white">Available Now</p>
                  <p className="text-sm text-accent-50 leading-tight">Starlink Installations</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">10+</p>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">500+</p>
              <p className="text-sm text-gray-300">Experienced Technicians</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">Available</p>
              <p className="text-sm text-gray-300">Starlink Installations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-1">Q1 2026</p>
              <p className="text-sm text-gray-300">Kuiper Launch</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}