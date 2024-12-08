import React from 'react'
import { screen, waitFor, render } from '@testing-library/react'
import { DropdownButton, DropdownButtonProps } from './DropdownButton'

const DropdownButtonWrapper = (props?: Partial<DropdownButtonProps>): JSX.Element => (
  <DropdownButton {...props} />
)

describe('<DropdownButton />', () => {
  it('has default accessible name', async () => {
    render(<DropdownButtonWrapper />)
    await waitFor(() => {
      const button = screen.getByRole('button', { name: 'Additional actions' })
      expect(button).toBeInTheDocument()
    })
  })

  it('can customise accessible name', async () => {
    render(<DropdownButtonWrapper aria-label="Custom aria label" />)
    await waitFor(() => {
      const button = screen.getByRole('button', { name: 'Custom aria label' })
      expect(button).toBeInTheDocument()
    })
  })
})
