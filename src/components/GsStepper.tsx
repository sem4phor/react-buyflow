import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useCallback
} from 'react'

interface Step {
  id: string | number
  content: ReactElement
}

interface Props {
  steps: Step[]
  activeStep: number
}

/**
 * GsStepper
 * 
 * Use this component to display one step at a time out of multiple steps.
 */
const GsStepper: FC<Props> = ({ steps, activeStep }) => {

  const getCurrentStep = useCallback(() => {
    const currStep = steps[activeStep]
    return currStep && currStep.content;
  }, [steps, activeStep]);

  const [step, setStep] = useState<Step['content'] | undefined>(getCurrentStep());

  useEffect(() => {
    setStep(getCurrentStep());
  }, [activeStep, getCurrentStep]);

  return (
    <>
      <div>
        {step}
      </div>
    </>
  )
}

export default GsStepper
