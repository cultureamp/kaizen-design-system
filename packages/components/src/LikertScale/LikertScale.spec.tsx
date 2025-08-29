import React, { act } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { LikertScale, type LikertScaleProps } from './LikertScale'
import { type Scale } from './types'

const scale: Scale = [
  {
    value: -1,
    label: 'Not rated',
  },
  {
    value: 1,
    label: 'Strong Disagree',
  },
  {
    value: 2,
    label: 'Disagree',
  },
  {
    value: 3,
    label: 'Neither agree or disagree',
  },
  {
    value: 4,
    label: 'Agree',
  },
  {
    value: 5,
    label: 'Strongly agree',
  },
]

const LikertScaleWrapper = (props: Partial<LikertScaleProps>): JSX.Element => (
  <LikertScale
    scale={scale}
    labelId="test__likert-scale"
    selectedItem={null}
    onSelect={(): void => undefined}
    isRequired
    {...props}
  />
)

describe('<LikertScale />', () => {
  describe('Keyboard navigation', () => {
    it('shows the correct legend when using tab to go through the scale', async () => {
      render(<LikertScaleWrapper data-testid="ID" />)
      const scaleSteps = screen.getAllByRole('radio')
      const legend = screen.getByTestId('ID-legend')

      expect(legend).toHaveTextContent('Not rated')

      act(() => {
        scaleSteps[2].focus()
      })

      await waitFor(() => {
        expect(legend).toHaveTextContent('Neither agree or disagree')
      })
    })
  })
})
