'use client'

import { motion } from 'framer-motion'
import { FileText, UserCheck, Calendar, Wifi } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Get a Quote',
    description: 'Fill out our simple form with your installation details and receive a free quote instantly.',
  },
  {
    icon: UserCheck,
    title: 'Match with a Pro',
    description: 'We connect you with a certified technician in your area who specializes in satellite installations.',
  },
  {
    icon: Calendar,
    title: 'Schedule Service',
    description: 'Choose a convenient time for your installation. Most appointments available within 48 hours.',
  },
  {
    icon: Wifi,
    title: 'Get Connected',
    description: 'Your technician completes the installation and ensures everything is working perfectly.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting your Kuiper satellite internet installed is easy with our streamlined process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}