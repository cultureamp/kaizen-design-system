import React from 'react'
import { render } from '@testing-library/react'
import { SingleSelect, type SingleSelectProps } from './SingleSelect'

const SingleSelectWrapper = (customProps?: Partial<SingleSelectProps>): JSX.Element => (
  <SingleSelect labelText="Select label" {...customProps} />
)

describe('<SingleSelect />', () => {
  it('does something', () => {
    render(<SingleSelectWrapper />)
    expect(true).toBe(true)
  })
})
