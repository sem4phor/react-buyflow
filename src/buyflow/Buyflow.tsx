import React, { useState } from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import SummaryStep from './SummaryStep'
import GsStepper from '../components/GsStepper'
import useSteps from '../hooks/useSteps'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
}

interface FormData {
  email: string
  age: number
}

const Buyflow: React.FC<BuyflowProps> = (props) => {

  const [collectedData, updateData] = useState<FormData>({
    email: '',
    age: 0,
  })

  const getStepCallback = (field: keyof FormData, value: any) => {
    updateData({ ...collectedData, [field]: value })
    nextStep()
  }

  const steps = [
    {
      id: 'email',
      content: <EmailStep cb={getStepCallback} />
    },
    {
      id: 'age',
      content: <AgeStep cb={getStepCallback} />
    },
    {
      id: 'summary',
      content: <SummaryStep collectedData={collectedData} />
    },
  ];

  const {
    currentStep,
    nextStep,
  } = useSteps(steps.length);
  
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      <GsStepper steps={steps} activeStep={currentStep} />
    </>
  )
}

export default Buyflow
