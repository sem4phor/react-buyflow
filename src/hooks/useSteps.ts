import { useState } from 'react'

/**
 * useSteps
 *
 * Hook for working with steppers
 *
 * @param steps Total number of steps
 */
const useSteps = (steps: number) => {
  const [currentStep, setStep] = useState<number>(0)

  const nextStep = () => {
    currentStep < steps && setStep(currentStep + 1);
  }

  return {
    currentStep,
    nextStep,
  }
}

export default useSteps
