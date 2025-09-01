'use client'

import { QuoteFormData } from './QuoteForm'

interface ConfirmationStepProps {
  data: Partial<QuoteFormData>
}

export default function ConfirmationStep({ data }: ConfirmationStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Review Your Information
        </h2>
        <p className="text-gray-600">
          Please review your details before submitting your quote request.
        </p>
      </div>

      <div className="space-y-6">
        {/* Address Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Address</h3>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Street:</span> {data.address}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">City:</span> {data.city}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">State:</span> {data.state}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">ZIP Code:</span> {data.zipCode}
            </p>
          </div>
        </div>

        {/* Property Details */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">
                <span className="font-medium">Property Type:</span> {data.propertyType}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-medium">Stories:</span> {data.stories}
              </p>
            </div>
            {data.roofType && (
              <div>
                <p className="text-gray-700">
                  <span className="font-medium">Roof Type:</span> {data.roofType}
                </p>
              </div>
            )}
            <div>
              <p className="text-gray-700">
                <span className="font-medium">Has Starlink Kit:</span> {data.hasKit ? 'Yes' : 'No'}
              </p>
            </div>
          </div>
          {data.notes && (
            <div className="mt-4">
              <p className="text-gray-700">
                <span className="font-medium">Additional Notes:</span>
              </p>
              <p className="text-gray-600 mt-1">{data.notes}</p>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">
                <span className="font-medium">Name:</span> {data.firstName} {data.lastName}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> {data.email}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> {data.phone}
              </p>
            </div>
            {data.preferredDate && (
              <div>
                <p className="text-gray-700">
                  <span className="font-medium">Preferred Date:</span> {new Date(data.preferredDate).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Photos */}
        {data.photos && data.photos.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Photos ({data.photos.length} uploaded)
            </h3>
            <p className="text-gray-600">
              Your photos have been uploaded and will be reviewed by our team.
            </p>
          </div>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">What happens next?</h3>
        <ul className="space-y-2 text-blue-800">
          <li className="flex items-start">
            <span className="font-medium mr-2">1.</span>
            <span>We'll review your information and photos within 2-4 hours</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">2.</span>
            <span>Our team will prepare a detailed quote based on your property</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">3.</span>
            <span>You'll receive your quote via email within 24 hours</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">4.</span>
            <span>If you approve, we'll schedule your installation at your convenience</span>
          </li>
        </ul>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex">
          <svg className="w-5 h-5 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">
              Free Quote Guarantee
            </h3>
            <p className="mt-1 text-sm text-green-700">
              Your quote is completely free with no obligation. We'll provide transparent pricing with no hidden fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
