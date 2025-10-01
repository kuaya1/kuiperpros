'use client'

import { motion } from 'framer-motion'
import { Star, Quote, BadgeCheck } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Austin, TX',
    rating: 5,
    date: 'March 2025',
    verified: true,
    text: 'The installation was quick and professional. My technician arrived on time and had everything set up in under 2 hours.',
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    rating: 5,
    date: 'February 2025',
    verified: true,
    text: 'Excellent service from start to finish. The quote process was simple and the technician was very knowledgeable.',
    avatar: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    location: 'Miami, FL',
    rating: 5,
    date: 'April 2025',
    verified: true,
    text: 'I was impressed by how smooth the entire process was. Great communication and professional installation.',
    avatar: 'ER'
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2 mb-4">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
            <span className="font-semibold text-gray-900">4.8 out of 5</span>
            <span className="text-gray-600">from 247+ reviews</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers across the country
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 relative hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-200" aria-hidden="true" />
              
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-brand-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 mt-1">
                      <BadgeCheck className="h-4 w-4 text-green-500" />
                      <span className="text-xs text-green-600 font-medium">Verified Customer</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">• {testimonial.date}</span>
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
            Certified & Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-100 rounded-lg p-3">
                <BadgeCheck className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">BBB Accredited</p>
                <p className="text-sm text-gray-600">A+ Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-100 rounded-lg p-3">
                <BadgeCheck className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Licensed & Insured</p>
                <p className="text-sm text-gray-600">All 50 States</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-100 rounded-lg p-3">
                <BadgeCheck className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Background Checked</p>
                <p className="text-sm text-gray-600">Verified Technicians</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}