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
                  <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Bell className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2 font-display">
                    Wait! Don't Miss Out
                  </h2>
                  <p className="text-lg text-gray-600">
                    Get notified when Kuiper launches in your area and secure <span className="font-bold text-secondary-600">20% early bird pricing</span>.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="exit-popup-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="exit-popup-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all focus-visible:outline-none"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Claim My 20% Discount
                  </button>
                </form>

                <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500">
                  <Zap className="h-4 w-4 text-location-500" />
                  <span>Join 10,000+ people on the waitlist</span>
                </div>
                
                <p className="text-xs text-gray-400 text-center mt-3">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="bg-location-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="h-10 w-10 text-location-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 font-display">
                  You're On The List!
                </h2>
                <p className="text-gray-600">
                  Check your email for your exclusive 20% discount code.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
