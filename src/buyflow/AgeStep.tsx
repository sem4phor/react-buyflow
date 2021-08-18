import React, { useState } from 'react'

interface AgeStepProps {
  onSubmit: (data :{
    age: number
  }) => void
}

const AgeStep: React.FC<AgeStepProps> = ({ onSubmit }) => {
  const [age, setAge] = useState(0)
  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
        ></input>
      </div>
      <button onClick={() => onSubmit({ age })}>Next</button>
    </>
  )
}

export default AgeStep
