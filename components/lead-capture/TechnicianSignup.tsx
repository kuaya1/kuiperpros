'use client'

import { useState } from 'react'
import { Wrench, CheckCircle, Star, DollarSign } from 'lucide-react'

export default function TechnicianSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    location: '',
    certifications: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Track the event
    if (typeof window !== 'undefined' && (window as any).trackTechnicianSignup) {
      (window as any).trackTechnicianSignup()
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Technician application:', formData)
    
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Application Submitted!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in joining our technician network. 
          We'll review your application and get back to you within 2-3 business days.
        </p>
        <div className="bg-brand-50 rounded-lg p-4">
          <p className="text-sm text-brand-700 font-medium">
            What's next? We'll contact you to schedule a brief interview and 
            discuss certification requirements.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-brand-600 text-white p-8 text-center">
        <Wrench className="h-12 w-12 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Join Our Technician Network</h2>
        <p className="opacity-90">
          Become a certified Kuiper installer and build a profitable business
        </p>
      </div>

      {/* Benefits */}
      <div className="p-6 bg-gray-50 border-b">
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <DollarSign className="h-8 w-8 text-green-500 mb-2" />
            <div className="text-sm">
              <div className="font-bold text-gray-900">$150-$400</div>
              <div className="text-gray-600">Per Installation</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Star className="h-8 w-8 text-yellow-500 mb-2" />
            <div className="text-sm">
              <div className="font-bold text-gray-900">5-Star</div>
              <div className="text-gray-600">Support System</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="h-8 w-8 text-blue-500 mb-2" />
            <div className="text-sm">
              <div className="font-bold text-gray-900">Flexible</div>
              <div className="text-gray-600">Schedule</div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of Experience *
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                required
              >
                <option value="">Select experience</option>
                <option value="0-1">0-1 years</option>
                <option value="2-5">2-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Area (City, State) *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Denver, CO"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Relevant Certifications
            </label>
            <textarea
              name="certifications"
              value={formData.certifications}
              onChange={handleChange}
              rows={3}
              placeholder="List any relevant certifications (electrical, telecommunications, satellite installation, etc.)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-600 text-white py-4 rounded-lg hover:bg-brand-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Submitting Application...' : 'Apply to Join Network'}
          </button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> All technicians must pass background checks and 
            complete Kuiper-specific training before being approved for installations.
          </p>
        </div>
      </div>
    </div>
  )
}
