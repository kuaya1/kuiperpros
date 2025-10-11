'use client'

import { useState } from 'react'
import { ChevronDown, Satellite, Zap, Globe, DollarSign } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function KuiperEducationPanel() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-left group"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center">
              <Satellite className="h-5 w-5 text-accent-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">New to Amazon Kuiper?</h3>
              <p className="text-kuiper-300 text-sm">Learn about next-generation satellite internet</p>
            </div>
          </div>
          <ChevronDown 
            className={`h-6 w-6 text-accent-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/20 border-t-0 rounded-b-2xl p-8 -mt-2">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="h-4 w-4 text-accent-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Lightning-Fast Speeds</h4>
                      <p className="text-kuiper-300 text-sm">
                        Up to <span className="text-accent-400 font-semibold">1Gbps+ download speeds</span> powered by Amazon's low Earth orbit (LEO) satellite constellation. Perfect for streaming, gaming, and remote work.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Globe className="h-4 w-4 text-secondary-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Nationwide Coverage</h4>
                      <p className="text-kuiper-300 text-sm">
                        Available in <span className="text-white font-semibold">all 50 states</span> including rural and underserved areas. No cable infrastructure required—just sky.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <DollarSign className="h-4 w-4 text-accent-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Competitive Pricing</h4>
                      <p className="text-kuiper-300 text-sm">
                        Amazon's mission: <span className="text-accent-400 font-semibold">affordable broadband for all</span>. Lock in early adopter pricing by pre-registering today.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Satellite className="h-4 w-4 text-secondary-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Amazon Partnership</h4>
                      <p className="text-kuiper-300 text-sm">
                        Backed by <span className="text-white font-semibold">Amazon's infrastructure</span> and reliability. Kuiper is a $10B investment in global connectivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white font-bold text-lg mb-3">How Does It Compare?</h4>
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-kuiper-300 mb-1">Technology</div>
                      <div className="text-white font-semibold">LEO Satellites (like Starlink)</div>
                    </div>
                    <div>
                      <div className="text-kuiper-300 mb-1">Latency</div>
                      <div className="text-white font-semibold">~30ms (gaming-ready)</div>
                    </div>
                    <div>
                      <div className="text-kuiper-300 mb-1">Availability</div>
                      <div className="text-accent-400 font-semibold">Q1 2026 Launch</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-kuiper-300">
                <span className="inline-block w-2 h-2 bg-accent-500 rounded-full"></span>
                <span>Professional installation ensures optimal performance from day one</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
