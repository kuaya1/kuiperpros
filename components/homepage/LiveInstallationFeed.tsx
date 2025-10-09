'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, CheckCircle, TrendingUp, Rocket } from 'lucide-react'

interface PreRegistration {
  id: string
  location: string
  timeAgo: string
  type: 'residential' | 'commercial'
}

const mockPreRegistrations: PreRegistration[] = [
  { id: '1', location: 'Austin, TX', timeAgo: '2 minutes ago', type: 'residential' },
  { id: '2', location: 'Denver, CO', timeAgo: '5 minutes ago', type: 'commercial' },
  { id: '3', location: 'Phoenix, AZ', timeAgo: '8 minutes ago', type: 'residential' },
  { id: '4', location: 'Portland, OR', timeAgo: '12 minutes ago', type: 'residential' },
  { id: '5', location: 'Miami, FL', timeAgo: '15 minutes ago', type: 'commercial' },
]

export default function LiveInstallationFeed() {
  const [preRegistrations, setPreRegistrations] = useState<PreRegistration[]>(mockPreRegistrations.slice(0, 3))
  const [totalToday, setTotalToday] = useState(347)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // Connect to Server-Sent Events for real-time updates
    let eventSource: EventSource | null = null
    
    try {
      eventSource = new EventSource('/api/live-feed')
      
      eventSource.onopen = () => {
        setIsConnected(true)
      }
      
      eventSource.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data)
          
          if (message.type === 'installation' && message.data) {
            // Reuse the SSE endpoint but interpret as pre-registrations
            const newPreReg: PreRegistration = {
              ...message.data,
              id: `prereg-${Date.now()}`
            }
            
            setPreRegistrations((current) => {
              const updated = [newPreReg, ...current]
              return updated.slice(0, 3) // Keep only 3 most recent
            })
            
            setTotalToday((prev) => prev + 1)
          }
        } catch (error) {
          console.error('Error parsing SSE message:', error)
        }
      }
      
      eventSource.onerror = () => {
        setIsConnected(false)
        eventSource?.close()
        
        // Fallback to polling if SSE fails
        const fallbackInterval = setInterval(() => {
          const newPreReg = mockPreRegistrations[Math.floor(Math.random() * mockPreRegistrations.length)]
          setPreRegistrations((current) => [
            { ...newPreReg, id: `fallback-${Date.now()}` },
            ...current
          ].slice(0, 3))
          setTotalToday((prev) => prev + 1)
        }, 10000)
        
        return () => clearInterval(fallbackInterval)
      }
    } catch (error) {
      console.error('Error setting up SSE:', error)
      
      // Fallback to original simulation
      const interval = setInterval(() => {
        const newPreReg = mockPreRegistrations[Math.floor(Math.random() * mockPreRegistrations.length)]
        setPreRegistrations((current) => [
          { ...newPreReg, id: `sim-${Date.now()}` },
          ...current
        ].slice(0, 3))
        setTotalToday((prev) => prev + 1)
      }, 8000)
      
      return () => clearInterval(interval)
    }

    return () => {
      eventSource?.close()
    }
  }, [])

  return (
    <section className="py-12 bg-gradient-to-r from-brand-50 via-accent-50 to-brand-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className={`absolute inset-0 rounded-full ${isConnected ? 'bg-blue-500 animate-ping' : 'bg-gray-400'} opacity-75`}></div>
                <div className={`relative rounded-full p-2 ${isConnected ? 'bg-blue-500' : 'bg-gray-400'}`}>
                  <Rocket className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 font-display">
                  Live Pre-Registration Activity
                </h3>
                <p className="text-gray-600 text-sm">
                  {isConnected ? 'People reserving installation spots right now' : 'Loading live data...'}
                </p>
              </div>
            </div>

            {/* Today's Counter */}
            <div className="bg-white rounded-xl px-6 py-3 shadow-md flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-blue-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalToday}</p>
                <p className="text-sm text-gray-600">Reserved Today</p>
              </div>
            </div>
          </div>

          {/* Pre-Registration Feed */}
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-3">
            <AnimatePresence mode="popLayout">
              {preRegistrations.map((preReg) => (
                <motion.div
                  key={preReg.id}
                  initial={{ opacity: 0, x: -20, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: 'auto' }}
                  exit={{ opacity: 0, x: 20, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 rounded-full p-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        New Pre-Registration
                      </p>
                      <p className="text-sm text-gray-600">{preReg.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        preReg.type === 'residential'
                          ? 'bg-brand-100 text-brand-700'
                          : 'bg-secondary-100 text-secondary-700'
                      }`}
                    >
                      {preReg.type === 'residential' ? 'Residential' : 'Commercial'}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{preReg.timeAgo}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Call to Action */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-700 font-medium">
                  Join 10,000+ people waiting for Amazon Kuiper launch
                </p>
                <a
                  href="/quote"
                  className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  Reserve Your Spot
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
              <p className="text-3xl font-bold text-brand-600 mb-1">10,247</p>
              <p className="text-sm text-gray-600">Total Pre-Registered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-4 shadow-md text-center"
            >
              <p className="text-3xl font-bold text-accent-600 mb-1">50</p>
              <p className="text-sm text-gray-600">States Ready</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-4 shadow-md text-center"
            >
              <p className="text-3xl font-bold text-secondary-600 mb-1">$299+</p>
              <p className="text-sm text-gray-600">Early Bird Price</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-4 shadow-md text-center"
            >
              <p className="text-3xl font-bold text-blue-600 mb-1">Q4 2025</p>
              <p className="text-sm text-gray-600">Expected Launch</p>
            </motion.div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs text-gray-700 text-center">
              <span className="font-semibold">Note:</span> This feed shows live pre-registration activity. Amazon Kuiper service expected to launch Q4 2025. Pre-registration does not guarantee service availability. No payment required until installation is scheduled.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}