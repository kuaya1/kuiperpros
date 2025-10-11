'use client'

import { useState } from 'react'
import { ChevronDown, Satellite, Zap, Shield, CheckCircle, AlertCircle, Wrench } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type AccordionSection = 'what-is-kuiper' | 'vs-starlink' | 'why-professional' | null

export default function KuiperEducationAccordion() {
  const [openSection, setOpenSection] = useState<AccordionSection>(null)

  const toggleSection = (section: AccordionSection) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 rounded-full px-4 py-2 mb-4">
              <Satellite className="h-4 w-4" />
              <span className="text-sm font-semibold">Essential Knowledge</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Everything You Need to Know About Kuiper
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to the most common questions before you reserve your installation spot
            </p>
          </motion.div>

          {/* Accordion Items */}
          <div className="space-y-4">
            {/* What is Amazon Kuiper? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleSection('what-is-kuiper')}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                aria-expanded={openSection === 'what-is-kuiper'}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Satellite className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">What is Amazon Kuiper?</h3>
                    <p className="text-sm text-gray-600">Learn about Amazon's satellite internet revolution</p>
                  </div>
                </div>
                <ChevronDown 
                  className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${
                    openSection === 'what-is-kuiper' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openSection === 'what-is-kuiper' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 border-t border-gray-100 pt-6">
                      <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          <span className="font-bold text-brand-600">Amazon Kuiper</span> is Amazon's <span className="font-semibold">$10 billion investment</span> in creating a revolutionary satellite internet constellation. It's Amazon's answer to bringing high-speed broadband to underserved and unserved communities worldwide.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                            <div className="flex items-start gap-3">
                              <Satellite className="h-6 w-6 text-accent-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-bold text-gray-900 mb-2">3,236 Satellites</h4>
                                <p className="text-gray-700 text-sm">
                                  Massive LEO constellation at <span className="font-semibold">590-630 km altitude</span> providing global coverage with minimal latency.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-brand-50 rounded-xl p-6 border border-brand-200">
                            <div className="flex items-start gap-3">
                              <Zap className="h-6 w-6 text-brand-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-bold text-gray-900 mb-2">Up to 1 Gbps Speeds</h4>
                                <p className="text-gray-700 text-sm">
                                  Lightning-fast downloads with <span className="font-semibold">&lt;20ms latency</span>—perfect for gaming, streaming, and remote work.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-secondary-50 rounded-xl p-6 border border-secondary-200">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-6 w-6 text-secondary-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-bold text-gray-900 mb-2">Q1 2026 Launch</h4>
                                <p className="text-gray-700 text-sm">
                                  Expected commercial service beginning <span className="font-semibold">early 2026</span> with nationwide coverage.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-location-50 rounded-xl p-6 border border-location-200">
                            <div className="flex items-start gap-3">
                              <Shield className="h-6 w-6 text-location-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-bold text-gray-900 mb-2">Amazon Reliability</h4>
                                <p className="text-gray-700 text-sm">
                                  Backed by Amazon's world-class infrastructure and engineering expertise.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* LEO vs GEO Visualization */}
                        <div className="bg-gray-900 rounded-xl p-8 text-white mb-6">
                          <h4 className="font-bold text-xl mb-4">Why Low Earth Orbit (LEO) Matters</h4>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <div className="text-accent-400 font-bold text-sm mb-2">KUIPER (LEO)</div>
                              <div className="text-4xl font-bold mb-2">590 km</div>
                              <div className="text-gray-400 text-sm mb-4">Altitude</div>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-400" />
                                  <span>&lt;20ms latency</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-400" />
                                  <span>1 Gbps+ speeds</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-400" />
                                  <span>Gaming-ready</span>
                                </div>
                              </div>
                            </div>
                            <div className="opacity-60">
                              <div className="text-gray-400 font-bold text-sm mb-2">TRADITIONAL SATELLITE (GEO)</div>
                              <div className="text-4xl font-bold mb-2">35,786 km</div>
                              <div className="text-gray-400 text-sm mb-4">Altitude</div>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                  <AlertCircle className="h-4 w-4 text-red-400" />
                                  <span>600ms+ latency</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <AlertCircle className="h-4 w-4 text-red-400" />
                                  <span>Slower speeds</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <AlertCircle className="h-4 w-4 text-red-400" />
                                  <span>High lag</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 pt-6 border-t border-gray-700">
                            <p className="text-sm text-gray-400">
                              <span className="font-semibold text-white">Distance matters:</span> Kuiper's low orbit means your data travels <span className="text-accent-400 font-semibold">60x shorter distance</span>, resulting in dramatically faster response times.
                            </p>
                          </div>
                        </div>

                        {/* Use Cases */}
                        <div className="bg-gradient-to-br from-brand-50 to-accent-50 rounded-xl p-6 border border-brand-200">
                          <h4 className="font-bold text-gray-900 mb-4">What You Can Do with 1 Gbps Kuiper</h4>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">Stream 4K on 5+ devices simultaneously</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">Zero-lag gaming and video calls</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">Work from anywhere with cloud apps</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">Download 4GB file in 32 seconds</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">Smart home devices always connected</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">Unlimited data—no throttling</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* How is Kuiper Different from Starlink? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleSection('vs-starlink')}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                aria-expanded={openSection === 'vs-starlink'}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">How is Kuiper Different from Starlink?</h3>
                    <p className="text-sm text-gray-600">Compare LEO satellite internet providers</p>
                  </div>
                </div>
                <ChevronDown 
                  className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${
                    openSection === 'vs-starlink' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openSection === 'vs-starlink' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 border-t border-gray-100 pt-6">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="border-b-2 border-gray-200">
                              <th className="pb-4 pr-4 text-gray-600 font-semibold text-sm">Feature</th>
                              <th className="pb-4 px-4 text-brand-600 font-bold">Amazon Kuiper</th>
                              <th className="pb-4 px-4 text-gray-900 font-semibold">Starlink</th>
                              <th className="pb-4 pl-4 text-gray-600 font-semibold">Traditional Satellite</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <tr>
                              <td className="py-4 pr-4 font-semibold text-gray-900">Max Speed</td>
                              <td className="py-4 px-4 text-brand-600 font-bold">Up to 1 Gbps</td>
                              <td className="py-4 px-4">50-200 Mbps</td>
                              <td className="py-4 pl-4 text-gray-500">25 Mbps</td>
                            </tr>
                            <tr>
                              <td className="py-4 pr-4 font-semibold text-gray-900">Latency</td>
                              <td className="py-4 px-4 text-brand-600 font-bold">&lt;20ms</td>
                              <td className="py-4 px-4">20-40ms</td>
                              <td className="py-4 pl-4 text-gray-500">600ms+</td>
                            </tr>
                            <tr>
                              <td className="py-4 pr-4 font-semibold text-gray-900">Data Caps</td>
                              <td className="py-4 px-4 text-brand-600 font-bold">Unlimited</td>
                              <td className="py-4 px-4">Unlimited*</td>
                              <td className="py-4 pl-4 text-gray-500">Limited</td>
                            </tr>
                            <tr>
                              <td className="py-4 pr-4 font-semibold text-gray-900">Weather Impact</td>
                              <td className="py-4 px-4 text-brand-600 font-bold">Minimal (LEO)</td>
                              <td className="py-4 px-4">Minimal (LEO)</td>
                              <td className="py-4 pl-4 text-gray-500">Moderate</td>
                            </tr>
                            <tr>
                              <td className="py-4 pr-4 font-semibold text-gray-900">Availability</td>
                              <td className="py-4 px-4 text-accent-600 font-bold">Q1 2026</td>
                              <td className="py-4 px-4 text-green-600 font-semibold">Available Now</td>
                              <td className="py-4 pl-4">Varies</td>
                            </tr>
                            <tr>
                              <td className="py-4 pr-4 font-semibold text-gray-900">Backing</td>
                              <td className="py-4 px-4 text-brand-600 font-bold">Amazon ($10B)</td>
                              <td className="py-4 px-4">SpaceX</td>
                              <td className="py-4 pl-4 text-gray-500">Various</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-200">
                        <p className="text-sm text-gray-700">
                          <span className="font-bold text-blue-900">Bottom line:</span> Both Kuiper and Starlink use LEO technology for fast, low-latency internet. Kuiper's advantage is Amazon's infrastructure expertise and commitment to affordable pricing. <span className="font-semibold">We install both</span>—Starlink available now, Kuiper when it launches in Q1 2026.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Why Do I Need Professional Installation? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleSection('why-professional')}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                aria-expanded={openSection === 'why-professional'}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Why Do I Need Professional Installation?</h3>
                    <p className="text-sm text-gray-600">LEO satellites require precision—here's why DIY risks poor performance</p>
                  </div>
                </div>
                <ChevronDown 
                  className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${
                    openSection === 'why-professional' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openSection === 'why-professional' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 border-t border-gray-100 pt-6">
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        LEO satellites move across the sky at <span className="font-bold">17,000+ mph</span>. Your terminal must track and switch between satellites seamlessly. <span className="font-semibold text-brand-600">Professional installation ensures optimal performance from day one.</span>
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        {/* Professional Installation */}
                        <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
                          <div className="flex items-center gap-2 mb-4">
                            <CheckCircle className="h-6 w-6 text-green-600" />
                            <h4 className="font-bold text-gray-900">Professional Installation</h4>
                          </div>
                          <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><span className="font-semibold">Precise alignment</span> using professional tools for maximum signal strength</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><span className="font-semibold">Weatherproofing</span> to protect equipment from elements</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><span className="font-semibold">Cable routing</span> through walls without damage or signal degradation</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><span className="font-semibold">Speed optimization</span> to achieve advertised 1 Gbps performance</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span><span className="font-semibold">Warranty protection</span> and ongoing support</span>
                            </li>
                          </ul>
                          <div className="mt-4 pt-4 border-t border-green-200">
                            <p className="text-xs text-green-800 font-semibold">Result: Full 1 Gbps speeds, reliable connection</p>
                          </div>
                        </div>

                        {/* DIY Installation */}
                        <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
                          <div className="flex items-center gap-2 mb-4">
                            <AlertCircle className="h-6 w-6 text-red-600" />
                            <h4 className="font-bold text-gray-900">DIY Installation Risks</h4>
                          </div>
                          <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span><span className="font-semibold">Poor alignment</span> reduces speeds by 50-70%</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span><span className="font-semibold">Water damage</span> from improper sealing voids warranty</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span><span className="font-semibold">Signal loss</span> from kinked cables or wrong connectors</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span><span className="font-semibold">Obstructions</span> you didn't account for (trees, buildings)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span><span className="font-semibold">No support</span> when troubleshooting issues</span>
                            </li>
                          </ul>
                          <div className="mt-4 pt-4 border-t border-red-200">
                            <p className="text-xs text-red-800 font-semibold">Result: Degraded performance, potential equipment damage</p>
                          </div>
                        </div>
                      </div>

                      {/* Key Stats */}
                      <div className="bg-gradient-to-br from-brand-900 to-accent-900 rounded-xl p-8 text-white">
                        <h4 className="font-bold text-xl mb-6">Installation Quality Impact</h4>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                          <div>
                            <div className="text-4xl font-bold text-accent-400 mb-2">2°</div>
                            <div className="text-sm text-gray-300">Misalignment can reduce speeds by 50%+</div>
                          </div>
                          <div>
                            <div className="text-4xl font-bold text-accent-400 mb-2">99.5%</div>
                            <div className="text-sm text-gray-300">Uptime with professional weatherproofing</div>
                          </div>
                          <div>
                            <div className="text-4xl font-bold text-accent-400 mb-2">&lt;2hr</div>
                            <div className="text-sm text-gray-300">Average professional installation time</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                        <p className="text-sm text-gray-700">
                          <span className="font-bold text-yellow-900">Our Guarantee:</span> We optimize for the full 1 Gbps speeds Kuiper advertises. If you're not getting advertised performance within 30 days, we'll re-align at no charge.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* CTA after education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a href="#kuiper-waitlist">
              <button className="bg-accent-500 hover:bg-accent-600 text-brand-900 font-bold text-lg px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-3 group">
                <Satellite className="h-6 w-6" />
                Secure Your Professional Installation Spot
                <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform rotate-[-90deg]" />
              </button>
            </a>
            <p className="text-sm text-gray-600 mt-4">
              Join <span className="font-semibold text-brand-600">thousands</span> who've pre-registered for priority Q1 2026 installation
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
