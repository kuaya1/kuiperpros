'use client'

import { motion } from 'framer-motion'
import { Clock, Wrench, Shield, BadgeCheck } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Satellite Internet Customers Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional installation services for Starlink, with expertise ready for Amazon Kuiper
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
          >
            <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Clock className="h-8 w-8 text-accent-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              Fast Professional Service
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Most installations completed in under 2 hours with same-day or next-day availability in major metros
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
          >
            <div className="bg-secondary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Wrench className="h-8 w-8 text-secondary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              Experienced Technicians
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Our installers have years of experience with satellite internet systems including Starlink, Dish, and DirecTV
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
          >
            <div className="bg-brand-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-brand-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              Quality Guaranteed
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              90-day workmanship warranty on all installations with weatherproof sealing and professional cable management
            </p>
          </motion.div>
        </div>

        {/* Trust Badges Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
            Certified & Trusted
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-100 rounded-lg p-3">
                <BadgeCheck className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Licensed & Insured</p>
                <p className="text-sm text-gray-600">All 50 States</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-100 rounded-lg p-3">
                <BadgeCheck className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Background Checked</p>
                <p className="text-sm text-gray-600">Verified Technicians</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-100 rounded-lg p-3">
                <BadgeCheck className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Experienced Installers</p>
                <p className="text-sm text-gray-600">Satellite Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}