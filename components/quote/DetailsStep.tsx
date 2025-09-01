'use client'

import { Control, FieldErrors } from 'react-hook-form'
import { QuoteFormData } from './QuoteForm'

interface DetailsStepProps {
  control: Control<QuoteFormData>
  errors: FieldErrors<QuoteFormData>
}

export default function DetailsStep({ control, errors }: DetailsStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Property Details
        </h2>
        <p className="text-gray-600">
          Tell us about your property to help us prepare for the installation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Type *
          </label>
          <select
            {...control.register('propertyType', { required: 'Property type is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            <option value="">Select property type</option>
            <option value="single-family">Single Family Home</option>
            <option value="townhouse">Townhouse</option>
            <option value="condo">Condominium</option>
            <option value="apartment">Apartment</option>
            <option value="business">Business/Commercial</option>
            <option value="other">Other</option>
          </select>
          {errors.propertyType && (
            <p className="mt-1 text-sm text-red-600">{errors.propertyType.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Stories *
          </label>
          <select
            {...control.register('stories', { required: 'Number of stories is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            <option value="">Select stories</option>
            <option value="1">1 Story</option>
            <option value="2">2 Stories</option>
            <option value="3">3 Stories</option>
            <option value="4+">4+ Stories</option>
          </select>
          {errors.stories && (
            <p className="mt-1 text-sm text-red-600">{errors.stories.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Roof Type
          </label>
          <select
            {...control.register('roofType')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            <option value="">Select roof type</option>
            <option value="asphalt-shingle">Asphalt Shingle</option>
            <option value="metal">Metal</option>
            <option value="tile">Tile</option>
            <option value="slate">Slate</option>
            <option value="flat">Flat</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            {...control.register('hasKit')}
            className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700">
            I already have a Starlink kit
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Notes
        </label>
        <textarea
          {...control.register('notes')}
          rows={4}
          placeholder="Any special requirements, accessibility needs, or additional information..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
        />
      </div>
    </div>
  )
}
