import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import NameStep from './NameStep'

it('is disabled while required fields are empty', () => {
  render(<NameStep onSubmit={() => {}} />)
  const nextStepBtn = screen.getByText(/Next/i);
  const lastNameInput = screen.getByTestId('last-name')
  const firstNameInput = screen.getByTestId('first-name')
  expect(nextStepBtn).toBeDisabled()
  fireEvent.change(firstNameInput, { target: { value: 'Get' } })
  fireEvent.change(lastNameInput, { target: { value: 'Safe' } })
  expect(nextStepBtn).toBeEnabled()
})
