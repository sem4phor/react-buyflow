import React, { useState } from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import NameStep from './NameStep'
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

export interface FormData {
  email: string
  age: number
  firstName: string
  lastName: string
}

const Buyflow: React.FC<BuyflowProps> = (props) => {

  const [collectedData, updateData] = useState<FormData>({
    email: '',
    age: 0,
    firstName: '',
    lastName: ''
  })

  const onNext = (data: Partial<FormData>) => {
    updateData({ ...collectedData, ...data })
    nextStep()
  }

  const steps = [
    {
      id: 'name',
      content: <NameStep onSubmit={onNext} />
    },
    {
      id: 'email',
      content: <EmailStep onSubmit={onNext} />
    },
    {
      id: 'age',
      content: <AgeStep onSubmit={onNext} />
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
