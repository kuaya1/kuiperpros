'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import StepIndicator from './StepIndicator'
import AddressStep from './AddressStep'
import DetailsStep from './DetailsStep'
import ContactStep from './ContactStep'
import PhotoStep from './PhotoStep'
import ConfirmationStep from './ConfirmationStep'

export interface QuoteFormData {
  address: string
  city: string
  state: string
  zipCode: string
  propertyType: string
  stories: string
  roofType: string
  hasKit: boolean
  firstName: string
  lastName: string
  email: string
  phone: string
  preferredDate: string
  photos: File[]
  notes: string
}

const steps = [
  { id: 1, name: 'Address' },
  { id: 2, name: 'Details' },
  { id: 3, name: 'Contact' },
  { id: 4, name: 'Photos' },
  { id: 5, name: 'Confirm' },
]

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { control, handleSubmit, watch, formState: { errors } } = useForm<QuoteFormData>()

  const onSubmit = async (data: QuoteFormData) => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
      return
    }

    setIsSubmitting(true)
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Quote request submitted successfully!')
      setCurrentStep(6) // Show confirmation
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {currentStep <= 5 && (
        <StepIndicator steps={steps} currentStep={currentStep} />
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <AddressStep control={control} errors={errors} />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <DetailsStep control={control} errors={errors} />
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ContactStep control={control} errors={errors} />
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <PhotoStep control={control} />
            </motion.div>
          )}

          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ConfirmationStep data={watch()} />
            </motion.div>
          )}

          {currentStep === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quote Request Submitted!
              </h2>
              <p className="text-gray-600 mb-8">
                We'll review your information and send you a detailed quote within 24 hours.
              </p>
              <a href="/" className="text-brand-600 hover:text-brand-700 font-semibold">
                Return to Homepage
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {currentStep <= 5 && (
          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={goBack}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed ${
                currentStep === 1 ? 'ml-auto' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : currentStep === 5 ? 'Submit Quote' : 'Continue'}
            </button>
          </div>
        )}
      </form>
    </div>
  )
}