'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Rocket, Satellite, Zap } from 'lucide-react'

interface EducationalVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  videoUrl: string
  duration: string
  category: string
}

const videos: EducationalVideo[] = [
  {
    id: '1',
    title: 'What is Amazon Kuiper?',
    description: 'Learn about Amazon\'s revolutionary satellite internet constellation launching in 2025',
    thumbnail: '/videos/kuiper-intro-thumb.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with real educational videos
    duration: '3:45',
    category: 'Introduction',
  },
  {
    id: '2',
    title: 'How Satellite Internet Works',
    description: 'Discover the technology behind high-speed satellite internet and low-latency connections',
    thumbnail: '/videos/tech-explainer-thumb.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '5:20',
    category: 'Technology',
  },
  {
    id: '3',
    title: 'Installation Process Overview',
    description: 'See what to expect when Kuiper launches - from dish installation to activation',
    thumbnail: '/videos/installation-thumb.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '4:15',
    category: 'Installation',
  },
]

export default function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<EducationalVideo | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 flex items-center gap-2 w-fit mx-auto">
            <Rocket className="h-4 w-4" />
            Coming Q4 2025
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
            Learn About
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-accent-600 to-secondary-600">
              Amazon Kuiper
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Educational videos about the future of satellite internet and what to expect when Kuiper launches
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mb-4">
                {/* Thumbnail placeholder */}
                <div className="aspect-video bg-gradient-to-br from-brand-100 via-accent-100 to-secondary-100 relative flex items-center justify-center">
                  {/* Icon based on category */}
                  {video.category === 'Introduction' && <Rocket className="h-16 w-16 text-brand-400 opacity-50" />}
                  {video.category === 'Technology' && <Satellite className="h-16 w-16 text-accent-400 opacity-50" />}
                  {video.category === 'Installation' && <Zap className="h-16 w-16 text-secondary-400 opacity-50" />}
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform shadow-xl">
                      <Play className="h-8 w-8 text-accent-600 ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded-full">
                    {video.duration}
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Video info */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Pre-Register for KuiperPros Installation?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-brand-100 to-brand-200 rounded-2xl p-6 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-brand-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Be First in Line</h4>
              <p className="text-gray-600">
                Lock in your installation spot and early bird pricing before the official launch
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl p-6 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Satellite className="h-8 w-8 text-accent-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Certified Professionals</h4>
              <p className="text-gray-600">
                Licensed technicians trained specifically for Amazon Kuiper installations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl p-6 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-secondary-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">No Risk Reservation</h4>
              <p className="text-gray-600">
                No payment required until installation day. Cancel anytime for full refund
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4 text-lg">
            Join 10,000+ people waiting for Amazon Kuiper
          </p>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Reserve Your Installation Spot
          </a>
          <p className="text-sm text-gray-500 mt-3">
            No payment required • Cancel anytime • Launch expected Q4 2025
          </p>
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
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>

                {/* Video info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-sm font-semibold text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                        {selectedVideo.category}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-2">{selectedVideo.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-700">{selectedVideo.description}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}