'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show after scrolling down 500px
    const handleScroll = () => {
      if (isDismissed) return
      
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 shadow-2xl">
            <div className="container flex items-center justify-between gap-4 py-4 px-4">
              <div className="flex-1">
                <p className="text-white font-bold text-sm mb-1">
                  Ready for High-Speed Internet?
                </p>
                <p className="text-accent-100 text-xs">
                  Get your free installation quote in 60 seconds
                </p>
              </div>
              
              <a
                href="/quote"
                className="bg-white hover:bg-gray-100 text-accent-600 font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                Get Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              
              <button
                onClick={handleDismiss}
                className="text-white hover:text-accent-100 p-2 transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
