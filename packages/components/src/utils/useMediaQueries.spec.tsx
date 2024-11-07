import React from 'react'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { useMediaQueries, subtractOnePixel } from './useMediaQueries'
const ExampleComponent = (): JSX.Element => {
  const { queries, components } = useMediaQueries({
    prefersReducedMotion: '(prefers-reduced-motion: reduce)',
  })
  const { MediumOnly, PrefersReducedMotion } = components

  return (
    <div>
      {queries.isSmall && <button type="button">Small only boolean</button>}
      <MediumOnly>
        <button type="button">Medium only component</button>
      </MediumOnly>
      {queries.prefersReducedMotion && (
        <button type="button">Prefers reduced boolean</button>
      )}
      <PrefersReducedMotion>
        <button type="button">Prefers reduced component</button>
      </PrefersReducedMotion>
    </div>
  )
}

export const mockMatchMedia = (matches: boolean = false): void => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

describe('useMediaQueries()', () => {
  it('shows and hides content based on Kaizen break points', () => {
    mockMatchMedia()
    render(<ExampleComponent />)
    expect(
      screen.queryByRole('button', { name: /Small only boolean/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /Medium only component/i }),
    ).not.toBeInTheDocument()

    mockMatchMedia(true)
    render(<ExampleComponent />)

    expect(
      screen.queryByRole('button', { name: /Small only boolean/i }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /Medium only component/i }),
    ).toBeInTheDocument()
  })

  it('shows and hides content based on based on custom queries passed in', () => {
    mockMatchMedia()
    render(<ExampleComponent />)

    expect(
      screen.queryByRole('button', { name: /Prefers reduced boolean/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /Prefers reduced component/i }),
    ).not.toBeInTheDocument()

    mockMatchMedia(true)
    render(<ExampleComponent />)

    expect(
      screen.queryByRole('button', { name: /Prefers reduced boolean/i }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /Prefers reduced component/i }),
    ).toBeInTheDocument()
  })

  it('subtracts 1px correctly', () => {
    expect(subtractOnePixel('1080px')).toEqual('1079px')
  })
})
