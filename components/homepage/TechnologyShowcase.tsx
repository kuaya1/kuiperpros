'use client'

import { motion } from 'framer-motion'
import { Satellite, Zap, Shield, Wifi, Gauge, Globe } from 'lucide-react'

const technologies = [
  {
    icon: Satellite,
    title: 'Low Earth Orbit Satellites',
    description: 'Network of 3,236 satellites orbiting at 590-630 km altitude for minimal latency',
    color: 'accent',
  },
  {
    icon: Zap,
    title: 'High-Speed Connectivity',
    description: 'Up to 1 Gbps download speeds with low latency under 20ms',
    color: 'secondary',
  },
  {
    icon: Shield,
    title: 'Advanced Security',
    description: 'End-to-end encryption and AWS-grade security infrastructure',
    color: 'location',
  },
  {
    icon: Wifi,
    title: 'Next-Gen Wi-Fi 6E',
    description: 'Latest wireless technology for faster speeds and better range',
    color: 'tech',
  },
  {
    icon: Gauge,
    title: 'Consistent Performance',
    description: 'No throttling or data caps, unlimited data at full speed',
    color: 'brand',
  },
  {
    icon: Globe,
    title: 'Wide Coverage',
    description: 'Service available in remote and rural areas where fiber can\'t reach',
    color: 'accent',
  },
]

const comparisonData = [
  { feature: 'Download Speed', kuiper: '1 Gbps', competitor: '150 Mbps', traditional: '25 Mbps' },
  { feature: 'Latency', kuiper: '< 20ms', competitor: '20-40ms', traditional: '50-150ms' },
  { feature: 'Data Caps', kuiper: 'Unlimited', competitor: '1TB/month', traditional: 'Varies' },
  { feature: 'Weather Impact', kuiper: 'Minimal', competitor: 'Moderate', traditional: 'None' },
  { feature: 'Installation', kuiper: '2-3 hours', competitor: '4-6 hours', traditional: 'N/A' },
]

export default function TechnologyShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-brand-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Technology
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
            Powered by
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-accent-600 to-secondary-600">
              Amazon Kuiper Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Next-generation satellite internet delivering fiber-like speeds from space
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`bg-${tech.color}-100 rounded-xl p-3 inline-flex mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <tech.icon className={`h-8 w-8 text-${tech.color}-600`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.title}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Speed Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-brand-900 via-brand-800 to-accent-900 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 font-display">
                How Kuiper Compares
              </h3>
              <p className="text-brand-200 text-lg">
                See how Amazon Kuiper stacks up against other internet options
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 p-6 bg-white/5 border-b border-white/10">
                <div className="font-semibold text-white">Feature</div>
                <div className="text-center">
                  <div className="bg-accent-500 text-brand-900 font-bold px-3 py-1 rounded-lg text-sm inline-block">
                    Kuiper
                  </div>
                </div>
                <div className="text-center font-semibold text-brand-200">Other Satellite</div>
                <div className="text-center font-semibold text-brand-200">Traditional ISP</div>
              </div>

              {/* Table Rows */}
              {comparisonData.map((row, index) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`grid grid-cols-4 gap-4 p-6 ${
                    index !== comparisonData.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  <div className="font-medium text-white">{row.feature}</div>
                  <div className="text-center text-accent-300 font-bold">{row.kuiper}</div>
                  <div className="text-center text-brand-300">{row.competitor}</div>
                  <div className="text-center text-brand-400">{row.traditional}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="/quote"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-brand-900 font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Zap className="h-5 w-5" />
                Get Professional Installation
              </a>
            </div>
          </div>
        </motion.div>

        {/* Key Benefits Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl p-6 text-white text-center"
          >
            <p className="text-4xl font-bold mb-2">20ms</p>
            <p className="text-brand-100">Ultra-Low Latency</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl p-6 text-white text-center"
          >
            <p className="text-4xl font-bold mb-2">1 Gbps</p>
            <p className="text-accent-100">Maximum Speed</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl p-6 text-white text-center"
          >
            <p className="text-4xl font-bold mb-2">∞</p>
            <p className="text-secondary-100">Unlimited Data</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
