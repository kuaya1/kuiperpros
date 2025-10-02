'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Search, CheckCircle, Clock, Bell } from 'lucide-react'

export default function CoverageChecker() {
  const [address, setAddress] = useState('')
  const [isChecking, setIsChecking] = useState(false)
  const [result, setResult] = useState<'available' | 'waitlist' | null>(null)
  const [location, setLocation] = useState<{ city: string; state: string } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsChecking(true)
    setError(null)
    
    try {
      const response = await fetch('/api/coverage/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address })
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to check coverage')
      }
      
      setResult(data.available ? 'available' : 'waitlist')
      setLocation({
        city: data.location.city,
        state: data.location.state
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setResult(null)
    } finally {
      setIsChecking(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="coverage-map">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-block bg-accent-100 text-accent-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Coverage Checker
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
              Check Kuiper Availability
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-brand-600">
                at Your Address
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your address to see if Amazon Kuiper service is available in your area
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            <form onSubmit={handleCheck} className="space-y-6">
              <div className="relative">
                <label htmlFor="address-input" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <input
                    id="address-input"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your street address, city, or ZIP code"
                    className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all focus-visible:outline-none"
                    required
                    disabled={isChecking}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isChecking || !address}
                className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isChecking ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    Checking Coverage...
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    Check Availability
                  </>
                )}
              </button>
            </form>

            {/* Results */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-8 bg-red-50 border-2 border-red-200 rounded-xl p-6"
                >
                  <p className="text-red-700">{error}</p>
                </motion.div>
              )}

              {result === 'available' && location && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-8 bg-gradient-to-br from-location-50 to-location-100 border-2 border-location-200 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-location-500 rounded-full p-2 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Great News! Kuiper is Available in {location.city}, {location.state}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Amazon Kuiper service is available at your address. Get professional installation scheduled today!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="/quote"
                          className="inline-flex items-center justify-center gap-2 bg-location-600 hover:bg-location-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                        >
                          Get Free Installation Quote
                        </a>
                        <div className="flex items-center gap-2 text-gray-700 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>Same-week appointments available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {result === 'waitlist' && location && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-8 bg-gradient-to-br from-secondary-50 to-secondary-100 border-2 border-secondary-200 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary-500 rounded-full p-2 flex-shrink-0">
                      <Bell className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Coming Soon to {location.city}, {location.state}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Kuiper isn't available yet at your address, but we're expanding rapidly. Join the waitlist to be notified when service launches.
                      </p>
                      <a
                        href="#newsletter"
                        className="inline-flex items-center gap-2 bg-secondary-600 hover:bg-secondary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                      >
                        <Bell className="h-4 w-4" />
                        Join Waitlist & Save 20%
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Coverage Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <p className="text-4xl font-bold text-brand-600 mb-2">50</p>
              <p className="text-gray-600 font-medium">States Covered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <p className="text-4xl font-bold text-accent-600 mb-2">500+</p>
              <p className="text-gray-600 font-medium">Cities Available</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <p className="text-4xl font-bold text-secondary-600 mb-2">98%</p>
              <p className="text-gray-600 font-medium">Coverage Rate</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
