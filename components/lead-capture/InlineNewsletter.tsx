'use client'

import { useState } from 'react'
import { Bell, MapPin, Zap, CheckCircle } from 'lucide-react'

interface InlineNewsletterProps {
  variant?: 'default' | 'compact' | 'sidebar'
  title?: string
  description?: string
  source?: string
}

export default function InlineNewsletter({ 
  variant = 'default',
  title = 'Get Notified When Kuiper Launches',
  description = 'Be among the first to access Amazon Kuiper internet service in your area. Plus, get early bird installation discounts.',
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
        text-center border-2 border-green-200
      `}>
        <div className="flex items-center justify-center mb-4">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          You're on the list!
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          We'll notify you when Kuiper becomes available in your area, plus exclusive early bird installation discounts.
        </p>
      </div>
    )
  }

  return (
    <div className={`
      ${variant === 'compact' ? 'p-4 bg-gradient-to-br from-brand-50 to-purple-50 rounded-lg' : 'bg-gradient-to-br from-brand-50 to-purple-50 rounded-2xl p-6 lg:p-8'}
      ${variant === 'sidebar' ? 'max-w-sm' : ''}
      border border-brand-100
    `}>
      <div className="text-center mb-6">
        <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-md">
          <Bell className="h-7 w-7 text-brand-600" />
        </div>
        <h3 className={`
          ${variant === 'compact' ? 'text-lg' : 'text-xl lg:text-2xl'}
          font-bold text-gray-900 mb-2
        `}>
          {title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-3">
          <div>
            <label htmlFor={`newsletter-email-${source}`} className="sr-only">
              Email Address
            </label>
            <input
              id={`newsletter-email-${source}`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm transition-all shadow-sm focus-visible:outline-none"
              required
              aria-required="true"
            />
          </div>
          
          {variant !== 'compact' && (
            <div className="relative">
              <label htmlFor={`newsletter-location-${source}`} className="sr-only">
                City or ZIP Code
              </label>
              <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" aria-hidden="true" />
              <input
                id={`newsletter-location-${source}`}
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Your city or ZIP code"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm transition-all shadow-sm focus-visible:outline-none"
              />
            </div>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-brand-600 text-white py-3 rounded-lg hover:bg-brand-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          aria-disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Subscribing...
            </span>
          ) : (
            'Get Notified & Save'
          )}
        </button>
      </form>

      <div className="flex items-center justify-center gap-6 mt-5 text-xs text-gray-600">
        <div className="flex items-center gap-1.5">
          <Zap className="h-4 w-4 text-green-500" aria-hidden="true" />
          <span className="font-medium">No spam ever</span>
        </div>
        <span className="text-gray-400">•</span>
        <div className="flex items-center gap-1.5">
          <Bell className="h-4 w-4 text-blue-500" aria-hidden="true" />
          <span className="font-medium">Exclusive discounts</span>
        </div>
      </div>
    </div>
  )
}