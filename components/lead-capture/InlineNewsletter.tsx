'use client'

import { useState } from 'react'
import { Bell, MapPin, Zap } from 'lucide-react'

interface InlineNewsletterProps {
  variant?: 'default' | 'compact' | 'sidebar'
  title?: string
  description?: string
  source?: string
}

export default function InlineNewsletter({ 
  variant = 'default',
  title = 'Get Notified When Kuiper Launches',
  description = 'Be among the first to access Amazon Kuiper internet service in your area.',
  source = 'inline_form'
}: InlineNewsletterProps) {
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Track the event
    if (typeof window !== 'undefined' && (window as any).trackNewsletterSignup) {
      (window as any).trackNewsletterSignup(source)
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Newsletter signup:', { email, location, source })
    
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className={`
        ${variant === 'compact' ? 'p-4 bg-green-50 rounded-lg' : 'bg-green-50 rounded-2xl p-6 lg:p-8'}
        text-center
      `}>
        <div className="flex items-center justify-center mb-4">
          <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
            <Bell className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Thanks for subscribing!
        </h3>
        <p className="text-gray-600 text-sm">
          We'll notify you when Kuiper becomes available in your area.
        </p>
      </div>
    )
  }

  return (
    <div className={`
      ${variant === 'compact' ? 'p-4 bg-brand-50 rounded-lg' : 'bg-brand-50 rounded-2xl p-6 lg:p-8'}
      ${variant === 'sidebar' ? 'max-w-sm' : ''}
    `}>
      <div className="text-center mb-6">
        <div className="bg-brand-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
          <Bell className="h-6 w-6 text-brand-600" />
        </div>
        <h3 className={`
          ${variant === 'compact' ? 'text-lg' : 'text-xl lg:text-2xl'}
          font-bold text-gray-900 mb-2
        `}>
          {title}
        </h3>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
            required
          />
          
          {variant !== 'compact' && (
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Your city or ZIP code"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
              />
            </div>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-brand-600 text-white py-3 rounded-lg hover:bg-brand-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Subscribing...' : 'Get Notified'}
        </button>
      </form>

      <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-gray-500">
        <div className="flex items-center space-x-1">
          <Zap className="h-3 w-3 text-green-500" />
          <span>No spam</span>
        </div>
        <span>•</span>
        <div className="flex items-center space-x-1">
          <Bell className="h-3 w-3 text-blue-500" />
          <span>Early bird discounts</span>
        </div>
      </div>
    </div>
  )
}
