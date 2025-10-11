'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Satellite, Zap, ArrowRight, Badge, CheckCircle, Shield, Clock, Timer, TrendingUp, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import KuiperEducationPanel from './KuiperEducationPanel'

// Calculate days until Q1 2026 launch (March 31, 2026)
function useLaunchCountdown() {
  const [days, setDays] = useState(0)
  
  useEffect(() => {
    const launchDate = new Date('2026-03-31')
    const today = new Date()
    const diffTime = launchDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDays(diffDays > 0 ? diffDays : 0)
  }, [])
  
  return days
}

export default function HeroSection() {
  const daysUntilLaunch = useLaunchCountdown()
  return (
    <section className="relative min-h-screen bg-kuiper-hero overflow-hidden">
      {/* Animated satellite constellation background */}
      <div className="absolute inset-0 bg-orbit-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-satellite-grid opacity-20"></div>
      
      {/* Animated orbital rings - Responsive sizing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-accent-500/20 animate-orbit"></div>
        <div className="absolute inset-4 md:inset-8 rounded-full border border-accent-500/15 animate-orbit" style={{ animationDuration: '25s' }}></div>
        <div className="absolute inset-8 md:inset-16 rounded-full border border-accent-500/10 animate-orbit" style={{ animationDuration: '30s' }}></div>
      </div>

      {/* Floating satellite icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: ['0%', '100%'],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-0"
        >
          <Satellite className="h-8 w-8 text-accent-500/30" />
        </motion.div>
        <motion.div
          animate={{
            x: ['100%', '0%'],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
            delay: 5,
          }}
          className="absolute top-1/3 right-0"
        >
          <Satellite className="h-6 w-6 text-accent-500/20" />
        </motion.div>
      </div>

      <div className="container relative z-10 flex items-center min-h-screen py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Kuiper Authority Badge with Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-brand-800/80 backdrop-blur-md border border-accent-500/30 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-3 sm:mb-4"
          >
            <div className="flex items-center gap-2">
              <Satellite className="h-4 w-4 sm:h-5 sm:w-5 text-accent-500 animate-pulse" />
              <span className="font-bold text-white text-xs sm:text-sm md:text-base">
                <span className="hidden md:inline">Leading America's Kuiper Installation Network</span>
                <span className="md:hidden">America's Kuiper Leader</span>
              </span>
              <Badge className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-500" />
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 bg-accent-500/20 backdrop-blur-md border border-accent-500/40 rounded-full px-3 py-2 sm:px-5 mb-6 sm:mb-8 text-center"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Timer className="h-4 w-4 text-accent-400" />
              <span className="text-accent-100 font-semibold text-xs sm:text-sm">
                <span className="hidden md:inline">Amazon Kuiper Launch: <span className="text-white font-bold">{daysUntilLaunch} Days</span> • Secure Your Slot Today</span>
                <span className="md:hidden">Launch: <span className="text-white font-bold">{daysUntilLaunch}d</span> • Reserve Now</span>
              </span>
            </div>
          </motion.div>

          {/* Hero Headline - Kuiper First with Authority */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight px-4 sm:px-0"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-400 to-kuiper-400">
              Leading America's
            </span>
            <br />
            <span className="text-white">
              <span className="hidden sm:inline">Amazon Kuiper Installation Network</span>
              <span className="sm:hidden">Kuiper Installation</span>
            </span>
          </motion.h1>

          {/* Value Proposition - Clear Benefits */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-kuiper-200 mb-3 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6"
          >
            <span className="text-accent-400 font-bold">Get it right the first time.</span> Professional installation maximizes your{' '}
            <span className="text-white font-semibold">1Gbps+ speeds</span> and ensures optimal satellite positioning for{' '}
            <span className="text-accent-400 font-semibold">
              <span className="hidden sm:inline">Amazon's revolutionary Kuiper network</span>
              <span className="sm:inline md:hidden">Kuiper network</span>
            </span>.
          </motion.p>

          {/* Dual Service Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
          >
            <span className="text-kuiper-300 text-sm sm:text-base text-center">
              <span className="text-accent-400 font-semibold">Kuiper Q1 2026</span> • <span className="text-white font-semibold">Starlink Now</span>
            </span>
          </motion.div>

          {/* CTAs - Kuiper Primary with Urgency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4"
          >
            <Link href="#kuiper-waitlist" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto group bg-accent-500 hover:bg-accent-600 text-brand-900 shadow-2xl shadow-accent-500/50 hover:shadow-accent-600/70 transition-all duration-300 border-0 text-sm sm:text-base md:text-lg px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 relative overflow-hidden"
              >
                <span className="flex items-center justify-center gap-2 font-bold relative z-10">
                  <Satellite className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="hidden sm:inline">Secure Your Kuiper Installation Spot</span>
                  <span className="sm:hidden">Reserve Kuiper Spot</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            
            <Link href="/quote" className="w-full sm:w-auto">
              <Button 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-sm sm:text-base md:text-lg px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6"
              >
                <span className="flex items-center justify-center gap-2 font-semibold">
                  <span className="hidden sm:inline">Get Starlink Quote</span>
                  <span className="sm:hidden">Starlink Quote</span>
                  <span className="text-xs bg-secondary-500 text-white px-2 py-0.5 sm:py-1 rounded-full">Now</span>
                </span>
              </Button>
            </Link>
          </motion.div>

          {/* Early Adopter Urgency Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12 md:mb-16 px-4"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-secondary-500/20 border border-secondary-500/40 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-secondary-400" />
              <span className="text-secondary-100 text-xs sm:text-sm font-semibold">
                <span className="hidden sm:inline">First 500 Pre-Registrations: Priority Installation</span>
                <span className="sm:hidden">First 500: Priority Install</span>
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-accent-500/20 border border-accent-500/40 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-accent-400" />
              <span className="text-accent-100 text-xs sm:text-sm font-semibold">
                Lock in 2026 Pricing
              </span>
            </div>
          </motion.div>

          {/* Trust Indicators with Enhanced Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-colors">
              <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-accent-500 mx-auto mb-2 sm:mb-3" />
              <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Kuiper-Ready Network</h3>
              <p className="text-kuiper-300 text-xs sm:text-sm">Nationwide certified technicians prepared for day-one Q1 2026 installations</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-colors">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-secondary-500 mx-auto mb-2 sm:mb-3" />
              <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Get It Right First Time</h3>
              <p className="text-kuiper-300 text-xs sm:text-sm">Expert LEO satellite positioning ensures maximum 1Gbps+ performance</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-colors">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-accent-500 mx-auto mb-2 sm:mb-3" />
              <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">Priority Installation Slots</h3>
              <p className="text-kuiper-300 text-xs sm:text-sm">Pre-register now for first-wave access in your area</p>
            </div>
          </motion.div>

          {/* Visual Launch Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center">Your Path to Kuiper Connectivity</h3>
              
              {/* Timeline Bar */}
              <div className="relative mb-6 sm:mb-8">
                <div className="absolute top-3 sm:top-4 left-0 right-0 h-0.5 sm:h-1 bg-white/20 rounded-full"></div>
                <div className="absolute top-3 sm:top-4 left-0 h-0.5 sm:h-1 bg-accent-500 rounded-full" style={{ width: '25%' }}></div>
                
                <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-0 sm:flex sm:justify-between">
                  {/* You Are Here */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent-500 rounded-full border-2 sm:border-4 border-brand-900 mb-2 sm:mb-3 flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-accent-400 font-bold text-xs sm:text-sm">You Are Here</span>
                    <span className="text-kuiper-300 text-[10px] sm:text-xs mt-0.5 sm:mt-1">Pre-Register</span>
                  </div>

                  {/* Get Notified */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full border-2 sm:border-4 border-brand-900 mb-2 sm:mb-3"></div>
                    <span className="text-white font-semibold text-xs sm:text-sm">Get Notified</span>
                    <span className="text-kuiper-300 text-[10px] sm:text-xs mt-0.5 sm:mt-1">Launch Alert</span>
                  </div>

                  {/* Schedule Install */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full border-2 sm:border-4 border-brand-900 mb-2 sm:mb-3"></div>
                    <span className="text-white font-semibold text-xs sm:text-sm">Schedule</span>
                    <span className="text-kuiper-300 text-[10px] sm:text-xs mt-0.5 sm:mt-1">Q1 2026</span>
                  </div>

                  {/* Connected */}
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full border-2 sm:border-4 border-brand-900 mb-2 sm:mb-3"></div>
                    <span className="text-white font-semibold text-xs sm:text-sm">Connected!</span>
                    <span className="text-kuiper-300 text-[10px] sm:text-xs mt-0.5 sm:mt-1">1Gbps+</span>
                  </div>
                </div>
              </div>

              <p className="text-center text-kuiper-300 text-xs sm:text-sm">
                <span className="text-accent-400 font-semibold">Limited installation slots available in launch markets.</span> 
                <span className="hidden sm:inline"> Secure your spot today to guarantee day-one service.</span>
              </p>
            </div>
          </motion.div>

          {/* Kuiper Education Panel */}
          <KuiperEducationPanel />

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10 sm:mt-12 md:mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 mx-4 sm:mx-0"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent-400 mb-0.5 sm:mb-1">Q1 2026</p>
                <p className="text-xs sm:text-sm text-kuiper-300">Kuiper Launch</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">50 States</p>
                <p className="text-xs sm:text-sm text-kuiper-300">Nationwide Coverage</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-secondary-500 mb-0.5 sm:mb-1">Available</p>
                <p className="text-xs sm:text-sm text-kuiper-300">Starlink Now</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent-400 mb-0.5 sm:mb-1">10+ Years</p>
                <p className="text-xs sm:text-sm text-kuiper-300">Satellite Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
