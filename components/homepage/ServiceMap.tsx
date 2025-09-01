'use client'

import { motion } from 'framer-motion'
import { MapPin, Users } from 'lucide-react'

const states = [
  'California', 'Texas', 'Florida', 'New York', 'Pennsylvania',
  'Illinois', 'Ohio', 'Georgia', 'North Carolina', 'Michigan',
]

export default function ServiceMap() {
  return (
    <section id="coverage" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nationwide Coverage
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional installation services available in all 50 states
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Service Available Nationwide
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <Users className="h-8 w-8 text-brand-600 mb-2" />
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Certified Technicians</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <MapPin className="h-8 w-8 text-brand-600 mb-2" />
                  <p className="text-2xl font-bold text-gray-900">50</p>
                  <p className="text-sm text-gray-600">States Covered</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Top Service Areas:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {states.map((state, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{state}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/api/placeholder/600/400"
              alt="USA Coverage Map"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-brand-600 opacity-20 rounded-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}