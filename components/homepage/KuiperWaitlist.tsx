'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Mail, MapPin, Home, CheckCircle, Sparkles } from 'lucide-react'

export default function KuiperWaitlist() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    zip: '',
    propertyType: 'residential'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    // Simulate waitlist position (would come from actual backend in production)
    const waitlistPosition = Math.floor(Math.random() * 500) + 200; // Random number between 200-700
    
    return (
      <section id="kuiper-waitlist" className="py-20 bg-gradient-to-br from-brand-900 via-brand-800 to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/50">
                <CheckCircle className="h-14 w-14 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">
                🎉 You're In!
              </h3>
              <p className="text-2xl font-bold text-accent-300 mb-2">
                You're #{waitlistPosition} in line
              </p>
              <p className="text-lg text-white/80 mb-8">
                for {formData.propertyType === 'residential' ? 'residential' : formData.propertyType === 'commercial' ? 'commercial' : 'rural'} installation in ZIP {formData.zip}
              </p>

              {/* What Happens Next */}
              <div className="bg-white rounded-xl p-6 mb-6 text-left">
                <h4 className="font-bold text-gray-900 text-xl mb-4 text-center">What Happens Next:</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <p className="font-semibold text-gray-900">We'll email you in early Q1 2026</p>
                      <p className="text-sm text-gray-600">As soon as Kuiper is available in your area</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <p className="font-semibold text-gray-900">Choose your installation date</p>
                      <p className="text-sm text-gray-600">Priority scheduling for pre-registered customers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <p className="font-semibold text-gray-900">Get connected in under 2 hours</p>
                      <p className="text-sm text-gray-600">Professional installation, lifetime support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Referral Opportunity */}
              <div className="bg-[#ff9900]/20 border-2 border-[#ff9900]/40 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-white text-lg mb-2">Want priority access?</h4>
                <p className="text-white/90 text-sm mb-4">
                  Refer 3 friends and move up <span className="font-bold text-accent-300">50 spots</span> in line!
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-white text-brand-900 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-sm">
                    Share on Twitter
                  </button>
                  <button className="flex-1 bg-white text-brand-900 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-sm">
                    Copy Referral Link
                  </button>
                </div>
              </div>

              {/* Starlink Alternative */}
              <div className="bg-white/10 border border-white/20 rounded-xl p-6 mb-6">
                <p className="text-white font-semibold mb-2">
                  Meanwhile, Starlink is Available Now
                </p>
                <p className="text-white/80 text-sm mb-4">
                  Get satellite internet today while you wait for Kuiper. Same professional installation service.
                </p>
                <a href="/quote">
                  <button className="w-full bg-white text-brand-900 py-3 px-6 rounded-lg hover:bg-gray-100 transition-all font-semibold">
                    Get Starlink Installation Quote
                  </button>
                </a>
              </div>

              <p className="text-sm text-white/70">
                Confirmation email sent to <span className="font-semibold text-white">{formData.email}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="kuiper-waitlist" className="py-20 bg-gradient-to-br from-brand-900 via-brand-800 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Rocket className="h-5 w-5 text-accent-400" />
              <span className="font-semibold text-white">Expected Q1 2026</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-white mb-6"
            >
              Get Ready for Amazon Kuiper
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 max-w-2xl mx-auto mb-8"
            >
              Join the waitlist to be among the first to get professional installation when Amazon's satellite internet service launches
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              {/* Value Proposition - Above Form */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Reserve Your Priority Installation Slot
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Be notified the moment Kuiper launches</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Lock in pre-launch installation pricing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Skip the general availability waitlist</span>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="zip" className="block text-sm font-semibold text-gray-700 mb-2">
                    ZIP Code
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      required
                      pattern="[0-9]{5}"
                      inputMode="numeric"
                      value={formData.zip}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
                      placeholder="12345"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Type
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all appearance-none bg-white"
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="rural">Rural Property</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-600 to-accent-500 text-white py-4 px-6 rounded-lg hover:shadow-xl transition-all font-semibold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      Secure My Installation Spot
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-600 text-center">
                  No payment required. Cancel anytime before installation.
                </p>
              </form>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <h4 className="font-bold text-white text-lg mb-2">What Happens Next?</h4>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span>We'll email you when Kuiper launches in Q1 2026</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span>Schedule installation at your convenience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span>Professional installation in under 2 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span>No payment required until installation day</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent-500/20 backdrop-blur-sm border border-accent-400/30 rounded-xl p-6">
                <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent-400" />
                  Currently Available: Starlink
                </h4>
                <p className="text-white/90 mb-4">
                  While you wait for Kuiper, we're installing Starlink satellite internet today. Same professional service, available now.
                </p>
                <a href="/quote">
                  <button className="w-full bg-white text-brand-900 py-3 px-6 rounded-lg hover:bg-gray-100 transition-all font-semibold">
                    Get Starlink Quote Instead
                  </button>
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-sm text-white/70">
                  <span className="font-semibold text-white">Important:</span> KuiperPros is an independent installation service. Amazon Kuiper launch dates are estimated and subject to change by Amazon.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
