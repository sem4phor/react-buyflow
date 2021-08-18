import React, { useState, FC } from 'react'

interface NameStepProps {
  onSubmit: (data :{
    firstName: string
    lastName: string
  }) => void
}

const NameStep: FC<NameStepProps> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <>
      <div>
        First Name:
        <input
          data-testid="first-name"
          type="text"
          onChange={({ target: { value } }) => {
            setFirstName(value)
          }}
          value={firstName}
        />
      </div>
      <div>        
        Last Name:
        <input
          data-testid="last-name"
          type="text"
          onChange={({ target: { value } }) => {
            setLastName(value)
          }}
          value={lastName}
        />
      </div>
      <button
        onClick={() => onSubmit({ firstName, lastName })}
        disabled={!firstName ||!lastName}
      >
        Next
      </button>
    </>
  )
}

export default NameStep
