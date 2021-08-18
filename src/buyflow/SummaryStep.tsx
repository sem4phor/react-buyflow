import React from 'react'
import { Link } from 'react-router-dom'
import { FormData } from './Buyflow' 
interface SummaryStepProps {
  collectedData: FormData
}
// TODO: show summary
const SummaryStep: React.FC<SummaryStepProps> = ({ collectedData }) => {
  return (
    <>
      <div>Email: {collectedData.email}</div>
      <div>Age: {collectedData.age}</div>
      <div>First Name: {collectedData.firstName}</div>
      <div>Last Name: {collectedData.lastName}</div>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
