import React from 'react'
import { render, screen } from '@testing-library/react'
import { isRTL } from './isRTL'

describe('isRTL', () => {
  it('returns false when no element with dir found', () => {
    const Example = (): JSX.Element => <button type="button">Test</button>
    render(<Example />)
    const button = screen.getByRole('button')
    expect(isRTL(button)).toBe(false)
  })

  it('returns false when greater parent is dir=rtl, but closer parent is dir=ltr', () => {
    const Example = (): JSX.Element => (
      <div dir="rtl">
        <div dir="ltr">
          <button type="button">Test</button>
        </div>
      </div>
    )
    render(<Example />)
    const button = screen.getByRole('button')
    expect(isRTL(button)).toBe(false)
  })

  it('returns true when greater parent is dir=ltr, but closer parent is dir=rtl', () => {
    const Example = (): JSX.Element => (
      <div dir="ltr">
        <div dir="rtl">
          <button type="button">Test</button>
        </div>
      </div>
    )
    render(<Example />)
    const button = screen.getByRole('button')
    expect(isRTL(button)).toBe(true)
  })
})
