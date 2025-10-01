'use client'

import { motion } from 'framer-motion'
import { FileText, UserCheck, Calendar, Wifi, ArrowRight, Clock, DollarSign } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Get a Quote',
    description: 'Fill out our simple form with your installation details and receive a free quote instantly.',
    duration: '60 seconds',
    color: 'accent',
  },
  {
    icon: UserCheck,
    title: 'Match with a Pro',
    description: 'We connect you with a certified technician in your area who specializes in satellite installations.',
    duration: '5 minutes',
    color: 'secondary',
  },
  {
    icon: Calendar,
    title: 'Schedule Service',
    description: 'Choose a convenient time for your installation. Most appointments available within 48 hours.',
    duration: '24-48 hours',
    color: 'tech',
  },
  {
    icon: Wifi,
    title: 'Get Connected',
    description: 'Your technician completes the installation and ensures everything is working perfectly.',
    duration: '2 hours avg',
    color: 'location',
  },
]

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; text: string; icon: string; border: string }> = {
    accent: { bg: 'bg-accent-50', text: 'text-accent-600', icon: 'text-accent-600', border: 'border-accent-200' },
    secondary: { bg: 'bg-secondary-50', text: 'text-secondary-600', icon: 'text-secondary-600', border: 'border-secondary-200' },
    tech: { bg: 'bg-tech-50', text: 'text-tech-600', icon: 'text-tech-600', border: 'border-tech-200' },
    location: { bg: 'bg-location-50', text: 'text-location-600', icon: 'text-location-600', border: 'border-location-200' },
  }
  return colorMap[color] || colorMap.accent
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Getting your Kuiper satellite internet installed is easy with our streamlined process
            </p>
          </motion.div>
        </div>

        {/* Desktop Timeline View */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-accent-200 via-secondary-200 via-tech-200 to-location-200"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step number circle */}
                  <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 ${colors.bg} ${colors.border} border-4 rounded-full flex items-center justify-center z-10 shadow-lg`}>
                    <span className={`text-2xl font-bold ${colors.text}`}>{index + 1}</span>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 mt-14 group cursor-pointer border-2 border-transparent hover:border-gray-100">
                    {/* Icon */}
                    <div className={`${colors.bg} rounded-2xl w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className={`h-7 w-7 ${colors.icon}`} />
                    </div>

                    {/* Duration badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm font-semibold text-gray-600">{step.duration}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hover arrow */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className={`h-5 w-5 ${colors.icon}`} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const colors = getColorClasses(step.color)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4" style={{ borderLeftColor: colors.icon }}>
                  <div className="flex items-start gap-4">
                    <div className={`${colors.bg} rounded-2xl w-14 h-14 flex items-center justify-center flex-shrink-0`}>
                      <step.icon className={`h-7 w-7 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`${colors.bg} ${colors.text} text-sm font-bold px-3 py-1 rounded-full`}>
                          Step {index + 1}
                        </span>
                        <span className="text-sm text-gray-500">• {step.duration}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Connecting arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="h-6 w-6 text-gray-300 rotate-90" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-brand-900 to-accent-900 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-gray-200 mb-6">
                Join 2,500+ satisfied customers who chose professional installation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-brand-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Your Free Quote
                  <ArrowRight className="h-5 w-5" />
                </a>
                <div className="flex items-center gap-2 text-white">
                  <DollarSign className="h-5 w-5 text-accent-400" />
                  <span className="text-sm">Starting at $299</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}