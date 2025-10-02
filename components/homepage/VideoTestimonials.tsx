'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Star, Quote } from 'lucide-react'

interface VideoTestimonial {
  id: string
  name: string
  location: string
  thumbnail: string
  videoUrl: string
  quote: string
  rating: number
  installationType: string
}

const testimonials: VideoTestimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Austin, TX',
    thumbnail: '/testimonials/sarah-thumb.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with real videos
    quote: 'The installation was incredibly smooth and professional. Fiber-like speeds in my rural home!',
    rating: 5,
    installationType: 'Residential',
  },
  {
    id: '2',
    name: 'Mike Chen',
    location: 'Denver, CO',
    thumbnail: '/testimonials/mike-thumb.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    quote: 'Our business productivity skyrocketed with Kuiper. Best decision we made this year.',
    rating: 5,
    installationType: 'Commercial',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    location: 'Phoenix, AZ',
    thumbnail: '/testimonials/emily-thumb.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    quote: 'From quote to installation in 48 hours. The technician was knowledgeable and courteous.',
    rating: 5,
    installationType: 'Residential',
  },
]

export default function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-location-100 text-location-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
            See What Our Customers
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-accent-600 to-secondary-600">
              Have to Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real customers who made the switch to Kuiper
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(testimonial)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mb-4">
                {/* Thumbnail placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative">
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform shadow-xl">
                      <Play className="h-8 w-8 text-accent-600 ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded-full">
                    2:15
                  </div>
                </div>

                {/* Rating stars */}
                <div className="absolute top-4 left-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary-500 text-secondary-500" />
                  ))}
                </div>
              </div>

              {/* Testimonial info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <span className="text-sm font-semibold text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                    {testimonial.installationType}
                  </span>
                </div>
                <p className="text-gray-600 flex items-center gap-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {testimonial.location}
                </p>
                <div className="flex items-start gap-2 mt-3">
                  <Quote className="h-5 w-5 text-brand-300 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 italic line-clamp-2">{testimonial.quote}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Join thousands of satisfied customers
          </p>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Your Free Quote
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] cursor-pointer"
            />

            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-4xl mx-4"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                {/* Close button */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                  aria-label="Close video"
                >
                  <X className="h-8 w-8" />
                </button>

                {/* Video iframe */}
                <div className="aspect-video bg-black">
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={`${selectedVideo.name} testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>

                {/* Video info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedVideo.name}</h3>
                      <p className="text-gray-600">{selectedVideo.location}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(selectedVideo.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-secondary-500 text-secondary-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{selectedVideo.quote}"</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
