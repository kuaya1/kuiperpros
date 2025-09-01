'use client'

import { useState, useEffect } from 'react'
import { X, Bell, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    // Also show after 30 seconds if user is still on page
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }, 30000)

    document.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timer)
    }
  }, [hasShown])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track the event
    if (typeof window !== 'undefined' && (window as any).trackNewsletterSignup) {
      (window as any).trackNewsletterSignup('exit_intent_popup')
    }

    // Here you would typically send to your email service
    console.log('Exit intent email signup:', email)
    
    setIsSubmitted(true)
    
    // Close popup after 2 seconds
    setTimeout(() => {
      setIsVisible(false)
    }, 2000)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="bg-brand-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Bell className="h-8 w-8 text-brand-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Don't Miss Out!
                  </h2>
                  <p className="text-gray-600">
                    Get notified the moment Kuiper launches in your area and secure early bird pricing.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    required
                  />
                  
                  <button
                    type="submit"
                    className="w-full bg-brand-600 text-white py-3 rounded-lg hover:bg-brand-700 transition-colors font-medium"
                  >
                    Get Early Access
                  </button>
                </form>

                <div className="flex items-center space-x-2 mt-4 text-sm text-gray-500">
                  <Zap className="h-4 w-4 text-green-500" />
                  <span>Join 10,000+ people waiting for Kuiper</span>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  You're All Set!
                </h2>
                <p className="text-gray-600">
                  We'll notify you as soon as Kuiper becomes available in your area.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
