'use client'

import { motion } from 'framer-motion'
import { Star, Users, BadgeCheck, Rocket } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-4">
            <Rocket className="h-5 w-5 text-blue-500" />
            <span className="font-semibold text-gray-900">Launching Q4 2025</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Join 10,000+ People Waiting for Kuiper
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be among the first to get professional Amazon Kuiper installation when the service launches late 2025
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-50 to-accent-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Users className="h-8 w-8 text-brand-600" />
            </div>
            <p className="text-4xl font-bold text-brand-900 mb-2">10,000+</p>
            <p className="text-gray-700 font-medium">People Pre-Registered</p>
            <p className="text-sm text-gray-600 mt-2">Reserve your installation spot today</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent-50 to-secondary-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <BadgeCheck className="h-8 w-8 text-accent-600" />
            </div>
            <p className="text-4xl font-bold text-accent-900 mb-2">$299+</p>
            <p className="text-gray-700 font-medium">Early Bird Pricing</p>
            <p className="text-sm text-gray-600 mt-2">Lock in launch pricing now</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-secondary-50 to-brand-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <Star className="h-8 w-8 text-secondary-600" />
            </div>
            <p className="text-4xl font-bold text-secondary-900 mb-2">50</p>
            <p className="text-gray-700 font-medium">States Ready to Serve</p>
            <p className="text-sm text-gray-600 mt-2">Nationwide coverage planned</p>
          </motion.div>
        </div>

        {/* What to Expect Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What to Expect When Kuiper Launches
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-green-600" />
                Certified Professional Installation
              </h4>
              <p className="text-gray-600">
                Licensed and insured technicians trained specifically for Amazon Kuiper satellite installations
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-green-600" />
                No Payment Until Installation
              </h4>
              <p className="text-gray-600">
                Reserve your spot now with zero upfront payment. You'll only pay when installation is scheduled
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-green-600" />
                Same-Week Installation Goal
              </h4>
              <p className="text-gray-600">
                When Kuiper launches, we aim to complete installations within the same week you schedule
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-green-600" />
                90-Day Workmanship Warranty
              </h4>
              <p className="text-gray-600">
                Our professional installations will be backed by a 90-day warranty on all workmanship
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
            Preparing for Launch
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-100 rounded-lg p-3">
                <BadgeCheck className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Licensed & Insured</p>
                <p className="text-sm text-gray-600">Ready in All 50 States</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-100 rounded-lg p-3">
                <BadgeCheck className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Background Checked</p>
                <p className="text-sm text-gray-600">Vetted Technicians</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-100 rounded-lg p-3">
                <BadgeCheck className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Independent Service</p>
                <p className="text-sm text-gray-600">Not Affiliated with Amazon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Disclaimer */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto">
          <p className="text-sm text-gray-700 text-center">
            <span className="font-semibold text-gray-900">Important:</span> KuiperPros is an independent installation service provider not affiliated with or endorsed by Amazon. Amazon Kuiper satellite internet service is expected to launch in late 2025. Pre-registration does not guarantee service availability. All pricing estimates are subject to change. No payment is required until installation is scheduled. Full refunds available for cancellations before installation.
          </p>
        </div>
      </div>
    </section>
  )
}