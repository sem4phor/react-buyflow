import React, { useState } from 'react'

interface EmailStepProps {
  onSubmit: (data :{
    email: string
  }) => void
}

const EmailStep: React.FC<EmailStepProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        ></input>
      </div>
      <button onClick={() => onSubmit({ email })}>Next</button>
    </>
  )
}

export default EmailStep
