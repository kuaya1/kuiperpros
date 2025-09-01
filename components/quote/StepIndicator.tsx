interface StepIndicatorProps {
  steps: { id: number; name: string }[]
  currentStep: number
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {steps.map((step) => (
          <div key={step.id} className="flex-1">
            <div className="relative">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto ${
                  step.id <= currentStep
                    ? 'bg-brand-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step.id < currentStep ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step.id
                )}
              </div>
              {step.id < steps.length && (
                <div
                  className={`absolute top-5 left-1/2 w-full h-0.5 ${
                    step.id < currentStep ? 'bg-brand-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
            <p className="text-xs mt-2 text-center text-gray-600">{step.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}