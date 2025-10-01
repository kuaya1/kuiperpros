'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, CheckCircle, TrendingUp } from 'lucide-react'

interface Installation {
  id: string
  location: string
  timeAgo: string
  type: 'residential' | 'commercial'
}

const mockInstallations: Installation[] = [
  { id: '1', location: 'Austin, TX', timeAgo: '2 minutes ago', type: 'residential' },
  { id: '2', location: 'Denver, CO', timeAgo: '5 minutes ago', type: 'commercial' },
  { id: '3', location: 'Phoenix, AZ', timeAgo: '8 minutes ago', type: 'residential' },
  { id: '4', location: 'Portland, OR', timeAgo: '12 minutes ago', type: 'residential' },
  { id: '5', location: 'Miami, FL', timeAgo: '15 minutes ago', type: 'commercial' },
]

export default function LiveInstallationFeed() {
  const [installations, setInstallations] = useState<Installation[]>(mockInstallations.slice(0, 3))
  const [currentIndex, setCurrentIndex] = useState(3)
  const [totalToday, setTotalToday] = useState(127)

  useEffect(() => {
    // Simulate new installations appearing
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev >= mockInstallations.length ? 0 : prev
        const newInstallation = mockInstallations[nextIndex]
        
        setInstallations((current) => {
          const updated = [newInstallation, ...current]
          return updated.slice(0, 3) // Keep only 3 most recent
        })
        
        setTotalToday((prev) => prev + 1)
        
        return nextIndex + 1
      })
    }, 8000) // New installation every 8 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 bg-gradient-to-r from-brand-50 via-accent-50 to-brand-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-location-500 rounded-full animate-ping opacity-75"></div>
                <div className="relative bg-location-500 rounded-full p-2">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 font-display">
                  Live Installation Activity
                </h3>
                <p className="text-gray-600 text-sm">Real-time installs happening nationwide</p>
              </div>
            </div>

            {/* Today's Counter */}
            <div className="bg-white rounded-xl px-6 py-3 shadow-md flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-location-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalToday}</p>
                <p className="text-sm text-gray-600">Completed Today</p>
              </div>
            </div>
          </div>

          {/* Installation Feed */}
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-3">
            <AnimatePresence mode="popLayout">
              {installations.map((installation) => (
                <motion.div
                  key={installation.id}
                  initial={{ opacity: 0, x: -20, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: 'auto' }}
                  exit={{ opacity: 0, x: 20, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-accent-100 rounded-full p-2">
                      <MapPin className="h-5 w-5 text-accent-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        New Installation Complete
                      </p>
                      <p className="text-sm text-gray-600">{installation.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        installation.type === 'residential'
                          ? 'bg-brand-100 text-brand-700'
                          : 'bg-secondary-100 text-secondary-700'
                      }`}
                    >
                      {installation.type === 'residential' ? 'Residential' : 'Commercial'}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{installation.timeAgo}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Call to Action */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-700 font-medium">
                  Join thousands of satisfied customers nationwide
                </p>
                <a
                  href="/quote"
                  className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  Schedule Your Installation
                </a>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md text-center"
            >
              <p className="text-3xl font-bold text-brand-600 mb-1">2,536</p>
              <p className="text-sm text-gray-600">This Month</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-4 shadow-md text-center"
            >
              <p className="text-3xl font-bold text-accent-600 mb-1">4.9</p>
              <p className="text-sm text-gray-600">Avg Rating</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-4 shadow-md text-center"
            >
              <p className="text-3xl font-bold text-secondary-600 mb-1">24hr</p>
              <p className="text-sm text-gray-600">Avg Response</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-4 shadow-md text-center"
            >
              <p className="text-3xl font-bold text-location-600 mb-1">98%</p>
              <p className="text-sm text-gray-600">Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
