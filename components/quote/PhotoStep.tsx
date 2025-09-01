'use client'

import { Control } from 'react-hook-form'
import { QuoteFormData } from './QuoteForm'
import { useState } from 'react'
import { Upload, X, Camera } from 'lucide-react'

interface PhotoStepProps {
  control: Control<QuoteFormData>
}

export default function PhotoStep({ control }: PhotoStepProps) {
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const [dragActive, setDragActive] = useState(false)

  const handleFiles = (files: FileList) => {
    const newFiles = Array.from(files)
    const newUrls = newFiles.map(file => URL.createObjectURL(file))
    setPreviewUrls(prev => [...prev, ...newUrls])
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const removePhoto = (index: number) => {
    setPreviewUrls(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Property Photos
        </h2>
        <p className="text-gray-600">
          Upload photos of your property to help us provide an accurate quote. Include exterior views, roof area, and any obstacles.
        </p>
      </div>

      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive
            ? 'border-brand-500 bg-brand-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          {...control.register('photos', {
            onChange: (e) => e.target.files && handleFiles(e.target.files)
          })}
        />
        
        <div className="space-y-4">
          <div className="flex justify-center">
            <Upload className="h-12 w-12 text-gray-400" />
          </div>
          <div>
            <p className="text-lg font-medium text-gray-900">
              Drop photos here or click to browse
            </p>
            <p className="text-sm text-gray-500 mt-1">
              PNG, JPG up to 10MB each
            </p>
          </div>
        </div>
      </div>

      {/* Photo Suggestions */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Camera className="h-5 w-5 mr-2" />
          Helpful Photos to Include
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800">Exterior Views</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Front of the house</li>
              <li>• Side views showing roof access</li>
              <li>• Back of the house</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800">Installation Area</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Roof area for dish placement</li>
              <li>• Path from roof to internet entry point</li>
              <li>• Any obstacles (trees, other structures)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Photo Previews */}
      {previewUrls.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Uploaded Photos ({previewUrls.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative group">
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg border border-gray-200"
                />
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex">
          <svg className="w-5 h-5 text-yellow-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Photos Optional
            </h3>
            <p className="mt-1 text-sm text-yellow-700">
              While photos help us provide a more accurate quote, they're not required. You can skip this step if you prefer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
