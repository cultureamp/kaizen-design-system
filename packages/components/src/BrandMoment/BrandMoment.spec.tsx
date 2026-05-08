import React from 'react'
import { render } from '@testing-library/react'
import { vi } from 'vitest'
import { BrandMoment } from './BrandMoment'

describe('<BrandMoment />', () => {
  beforeAll(() => {
    window.matchMedia = vi.fn().mockImplementation(() => ({
      media: '',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      matches: false,
    }))
  })

  it('renders a main element by default', () => {
    const { container } = render(
      <BrandMoment
        variant="informative"
        illustration={<div>illustration</div>}
        header={<div>header</div>}
        text={{ title: 'Title' }}
      />,
    )
    expect(container.querySelector('main')).toBeInTheDocument()
  })

  it('renders the specified tag when provided', () => {
    const { container } = render(
      <BrandMoment
        variant="informative"
        illustration={<div>illustration</div>}
        header={<div>header</div>}
        tag="section"
        text={{ title: 'Title' }}
      />,
    )
    expect(container.querySelector('section')).toBeInTheDocument()
    expect(container.querySelector('main')).not.toBeInTheDocument()
  })
})
