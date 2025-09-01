'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How much does installation cost?',
    answer: 'Installation costs vary based on your location and installation complexity. Most residential installations range from $299-$599. Get a free quote for exact pricing.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Most installations are completed within 2-3 hours. Complex commercial installations may take longer.',
  },
  {
    question: 'Are your technicians certified?',
    answer: 'Yes, all our technicians are certified, insured, and have passed comprehensive background checks.',
  },
  {
    question: 'What if I need to reschedule?',
    answer: 'You can reschedule your installation up to 24 hours before your appointment without any fees.',
  },
  {
    question: 'Do you offer warranty on installations?',
    answer: 'Yes, all installations come with a 90-day workmanship warranty. Extended warranties are available.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-gray-50">
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
              className="bg-white rounded-lg shadow-sm"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-brand-600" />
                ) : (
                  <Plus className="h-5 w-5 text-brand-600" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}