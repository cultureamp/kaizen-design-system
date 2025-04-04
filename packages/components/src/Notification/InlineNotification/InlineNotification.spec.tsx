import React from 'react'
import { render, screen } from '@testing-library/react'
import { type HeadingProps } from '~components/Heading'
import { InlineNotification } from './InlineNotification'

describe('<InlineNotification />', () => {
  it('renders a notification with a custom heading level', () => {
    const customHeadingProps: HeadingProps = {
      variant: 'heading-6',
      tag: 'h2',
      children: 'Custom',
    }
    render(
      <InlineNotification type="positive" headingProps={customHeadingProps} persistent>
        Something has gone wrong
      </InlineNotification>,
    )

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
})
