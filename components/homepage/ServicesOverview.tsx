'use client'

import { motion } from 'framer-motion'
import { Home, Building, Wrench, Shield, Clock, DollarSign } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Installation',
    description: 'Professional installation for homes, including roof and ground mounting options.',
    features: ['Roof mounting', 'Ground mounting', 'Cable routing', 'System activation'],
  },
  {
    icon: Building,
    title: 'Commercial Installation',
    description: 'Enterprise-grade installations for businesses requiring reliable internet connectivity.',
    features: ['Multi-unit setup', 'Network integration', 'Backup systems', 'Priority support'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repair',
    description: 'Keep your system running smoothly with regular maintenance and quick repairs.',
    features: ['Troubleshooting', 'Realignment', 'Component replacement', 'Performance optimization'],
  },
]

const benefits = [
  { icon: Shield, text: 'All technicians are insured and certified' },
  { icon: Clock, text: 'Same-week installation available' },
  { icon: DollarSign, text: 'Transparent, upfront pricing' },
]

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional Installation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From residential to commercial, we handle all types of Kuiper satellite installations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="bg-brand-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Why Choose KuiperPros?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <benefit.icon className="h-6 w-6 text-brand-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}