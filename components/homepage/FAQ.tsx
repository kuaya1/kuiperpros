'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import StructuredData from '@/components/seo/StructuredData'

const faqs = [
  {
    question: 'Is Amazon Kuiper available now?',
    answer: 'Amazon Kuiper is expected to launch in Q1 2026. Currently, we offer professional Starlink satellite internet installation for customers who need satellite internet today. We\'re preparing our technicians and processes to be ready for Kuiper installations as soon as the service launches.',
  },
  {
    question: 'Can you install Starlink right now?',
    answer: 'Yes! We provide professional Starlink installation services available today. Most installations are completed in under 2 hours with same-day or next-day availability in major metro areas. Our experienced technicians handle roof mounting, weatherproofing, and system optimization to ensure optimal performance.',
  },
  {
    question: 'Will Kuiper installation be the same as Starlink?',
    answer: 'While both are satellite internet systems with similar installation requirements (dish mounting, cable routing, weatherproofing), Amazon Kuiper may have specific equipment and positioning needs. Our team is actively monitoring Kuiper\'s technical specifications to ensure we\'re ready to provide expert installation when it launches.',
  },
  {
    question: 'How much does Amazon Kuiper professional installation cost?',
    answer: 'Kuiper installation is expected to cost from $199-$599 depending on complexity. Standard residential installations are estimated at $299, including site survey, dish mounting, cable routing, and system activation. Commercial installations may cost more. Starlink installations are currently available starting at $299.',
  },
  {
    question: 'How long does satellite installation take?',
    answer: 'Most satellite installations (Starlink currently, Kuiper when available) are completed within 2 hours for standard residential setups. This includes: site survey (15-30 minutes), dish mounting (45-60 minutes), cable routing (20-30 minutes), and system activation (15-20 minutes). Complex installations may take longer.',
  },
  {
    question: 'Are your installers certified and insured?',
    answer: 'Yes, all KuiperPros technicians are experienced satellite installation specialists, fully insured, and have passed comprehensive background checks. Our team has years of experience with satellite systems including Starlink, Dish Network, and DirecTV, and we\'re preparing for Amazon Kuiper certification programs.',
  },
  {
    question: 'Do I need professional installation or can I install it myself?',
    answer: 'While DIY kits may be available, professional installation ensures optimal performance and safety. Our certified technicians have specialized tools for proper dish alignment, weatherproof sealing, and signal optimization that are difficult to achieve with self-installation. We also provide a 90-day workmanship warranty.',
  },
  {
    question: 'What warranty do you provide on installations?',
    answer: 'All KuiperPros installations include a 90-day workmanship warranty covering mounting, weatherproofing, and system configuration. This applies to both Starlink installations (available now) and Kuiper installations (when service launches). We also offer extended warranty options.',
  },
  {
    question: 'Can you install on any type of roof or property?',
    answer: 'Our certified installers can mount satellite dishes on most residential and commercial properties using roof mounts, wall mounts, or ground pole installations. We assess each site to determine the optimal mounting solution for maximum signal strength and durability.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <StructuredData 
        type="FAQPage"
        data={{
          questions: faqs
        }}
      />
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our installation services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-start gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-lg group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setOpenIndex(openIndex === index ? null : index)
                  }
                }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900 text-left pr-4 leading-relaxed group-hover:text-brand-600 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`h-5 w-5 text-brand-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="/quote" 
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors underline-offset-4 hover:underline"
          >
            Contact us for personalized answers
            <ChevronDown className="h-4 w-4 -rotate-90" />
          </a>
        </div>
      </div>
    </section>
  )
}