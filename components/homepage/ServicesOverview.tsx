'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Building, Wrench, Shield, Clock, DollarSign, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Installation',
    price: 'Starting at $299',
    description: 'Professional installation for homes with expert dish mounting and weatherproofing.',
    features: [
      'Roof & ground mounting',
      '2-hour average install time',
      'Weatherproof sealing',
      '90-day workmanship warranty'
    ],
    bestFor: 'Single-family homes and small properties with clear sky access',
    color: 'blue'
  },
  {
    id: 'commercial',
    icon: Building,
    title: 'Commercial Installation',
    price: 'Starting at $499',
    description: 'Enterprise-grade installations for businesses requiring reliable connectivity.',
    features: [
      'Multi-unit setup capability',
      'Network integration support',
      'Backup system configuration',
      'Priority technical support'
    ],
    bestFor: 'Offices, retail locations, and multi-tenant buildings',
    color: 'purple'
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Maintenance & Repair',
    price: 'Starting at $199',
    description: 'Keep your system running smoothly with expert maintenance and quick repairs.',
    features: [
      'System diagnostics & troubleshooting',
      'Dish realignment service',
      'Component replacement',
      'Performance optimization'
    ],
    bestFor: 'Existing installations needing service or upgrades',
    color: 'green'
  },
]

const benefits = [
  { icon: Shield, text: 'All technicians are insured and certified' },
  { icon: Clock, text: 'Same-week installation available' },
  { icon: DollarSign, text: 'Transparent, upfront pricing' },
]

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState('residential')
  const activeService = services.find(s => s.id === activeTab) || services[0]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      green: 'bg-green-50 text-green-600 border-green-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

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

        {/* Desktop: Tabbed Interface */}
        <div className="hidden md:block max-w-4xl mx-auto mb-12">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex-1 px-6 py-4 text-center font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-t-lg ${
                  activeTab === service.id
                    ? 'text-brand-600 border-b-2 border-brand-600 bg-brand-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <service.icon className="h-6 w-6 mx-auto mb-2" />
                {service.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 rounded-xl p-8 shadow-sm"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className={`rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 ${getColorClasses(activeService.color)}`}>
                <activeService.icon className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {activeService.title}
                  </h3>
                  <span className="text-2xl font-bold text-brand-600">
                    {activeService.price}
                  </span>
                </div>
                <p className="text-gray-600 text-lg">
                  {activeService.description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {activeService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Best For:</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {activeService.bestFor}
                </p>
                <Link href="/quote">
                  <button className="w-full bg-brand-600 text-white py-3 px-6 rounded-lg hover:bg-brand-700 transition-all font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
                    Get Quote for {activeService.title}
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile: Card Grid */}
        <div className="grid md:hidden gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`rounded-full w-12 h-12 flex items-center justify-center ${getColorClasses(service.color)}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <span className="text-lg font-bold text-brand-600">
                  {service.price}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-brand-50 to-purple-50 rounded-2xl p-8 border border-brand-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Why Choose KuiperPros?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <benefit.icon className="h-6 w-6 text-brand-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}