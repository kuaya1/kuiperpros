'use client'

import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import QuoteForm from '@/components/quote/QuoteForm'

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Get Your Free Installation Quote
          </h1>
          <QuoteForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}