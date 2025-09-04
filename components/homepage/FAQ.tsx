'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import StructuredData from '@/components/seo/StructuredData'

const faqs = [
  {
    question: 'How much does Amazon Kuiper professional installation cost?',
    answer: 'Kuiper installation costs typically range from $199-$599 depending on installation complexity. Standard residential installations average $299, including site survey, dish mounting, cable routing, and system activation. Commercial installations may cost more due to additional requirements.',
  },
  {
    question: 'How long does Kuiper satellite installation take?',
    answer: 'Most Kuiper installations are completed within 2 hours for standard residential setups. This includes: site survey (15-30 minutes), dish mounting (45-60 minutes), cable routing (20-30 minutes), and system activation (15-20 minutes). Complex installations or challenging roof conditions may take longer.',
  },
  {
    question: 'Are your Kuiper installers certified and insured?',
    answer: 'Yes, all KuiperPros technicians are certified satellite installation specialists, fully insured, and have passed comprehensive background checks. Our installers receive specialized training on Kuiper equipment and installation best practices.',
  },
  {
    question: 'Do I need professional Kuiper installation or can I install it myself?',
    answer: 'While Amazon may offer DIY kits, professional installation ensures optimal performance and safety. Our certified technicians have specialized tools for proper dish alignment, weatherproof sealing, and signal optimization that are difficult to achieve with self-installation.',
  },
  {
    question: 'What warranty do you provide on Kuiper installations?',
    answer: 'All KuiperPros installations include a 90-day workmanship warranty covering mounting, weatherproofing, and system configuration. We also offer extended warranty options for additional peace of mind.',
  },
  {
    question: 'Can you install Kuiper on any type of roof or property?',
    answer: 'Our certified installers can mount Kuiper dishes on most residential and commercial properties using roof mounts, wall mounts, or ground pole installations. We assess each site to determine the optimal mounting solution for maximum signal strength.',
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