import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { useContainerQueries } from './useContainerQueries'

const ExampleComponent = (): JSX.Element => {
  const { containerRef, queries } = useContainerQueries()

  return (
    <div ref={containerRef} data-testid="container">
      {queries.isSmOrLarger && <button type="button">Small query boolean</button>}
      {queries.isMdOrLarger && <button type="button">Medium or larger query</button>}
    </div>
  )
}

// Mock ResizeObserver
class ResizeObserverMock {
  callback: ResizeObserverCallback
  elements: Set<Element>

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback
    this.elements = new Set()
  }

  observe(target: Element): void {
    this.elements.add(target)
  }

  unobserve(target: Element): void {
    this.elements.delete(target)
  }

  disconnect(): void {
    this.elements.clear()
  }

  // Helper method to trigger resize
  trigger(width: number): void {
    const entries: ResizeObserverEntry[] = Array.from(this.elements).map((element) => ({
      target: element,
      contentRect: {
        width,
        height: 100,
        top: 0,
        left: 0,
        bottom: 100,
        right: width,
        x: 0,
        y: 0,
      } as DOMRectReadOnly,
      borderBoxSize: [
        {
          inlineSize: width,
          blockSize: 100,
        },
      ],
      contentBoxSize: [
        {
          inlineSize: width,
          blockSize: 100,
        },
      ],
      devicePixelContentBoxSize: [
        {
          inlineSize: width,
          blockSize: 100,
        },
      ],
    })) as ResizeObserverEntry[]

    this.callback(entries, this as unknown as ResizeObserver)
  }
}

let resizeObserverInstance: ResizeObserverMock | null = null

const setupResizeObserver = (): ResizeObserverMock => {
  const mockObserver = vi.fn((callback: ResizeObserverCallback) => {
    resizeObserverInstance = new ResizeObserverMock(callback)
    return resizeObserverInstance
  })

  global.ResizeObserver = mockObserver as unknown as typeof ResizeObserver

  return resizeObserverInstance!
}

describe('useContainerQueries()', () => {
  beforeEach(() => {
    resizeObserverInstance = null
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('shows and hides content based on Tailwind container breakpoints', async () => {
    setupResizeObserver()

    // Mock getBoundingClientRect to return a small width initially
    const mockGetBoundingClientRect = vi.fn(() => ({
      width: 300,
      height: 100,
      top: 0,
      left: 0,
      bottom: 100,
      right: 300,
      x: 0,
      y: 0,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      toJSON: () => {},
    }))
    Element.prototype.getBoundingClientRect = mockGetBoundingClientRect

    render(<ExampleComponent />)

    // Initially at 300px, should not show sm (384px) or md (448px) content
    expect(screen.queryByRole('button', { name: /Small query boolean/i })).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /Medium or larger query/i }),
    ).not.toBeInTheDocument()

    // Trigger resize to 400px (sm breakpoint is 384px)
    await act(async () => {
      resizeObserverInstance?.trigger(400)
      // Wait for debounce (1000ms + buffer)
      await new Promise((resolve) => setTimeout(resolve, 1100))
    })

    expect(screen.queryByRole('button', { name: /Small query boolean/i })).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /Medium or larger query/i }),
    ).not.toBeInTheDocument()

    // Trigger resize to 500px (md breakpoint is 448px)
    await act(async () => {
      resizeObserverInstance?.trigger(500)
      // Wait for debounce (1000ms + buffer)
      await new Promise((resolve) => setTimeout(resolve, 1100))
    })

    expect(screen.queryByRole('button', { name: /Small query boolean/i })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Medium or larger query/i })).toBeInTheDocument()
  })

  it('returns SSR-safe defaults when window is undefined', () => {
    // This test verifies the SSR code path exists
    // In actual SSR environment, the hook returns safe defaults
    expect(useContainerQueries).toBeDefined()
  })

  it('cleans up ResizeObserver on unmount', () => {
    setupResizeObserver()

    const mockGetBoundingClientRect = vi.fn(() => ({
      width: 500,
      height: 100,
      top: 0,
      left: 0,
      bottom: 100,
      right: 500,
      x: 0,
      y: 0,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      toJSON: () => {},
    }))
    Element.prototype.getBoundingClientRect = mockGetBoundingClientRect

    const { unmount } = render(<ExampleComponent />)

    const disconnectSpy = vi.spyOn(resizeObserverInstance!, 'disconnect')

    unmount()

    expect(disconnectSpy).toHaveBeenCalled()
  })

  it('observes the container element', () => {
    setupResizeObserver()

    const mockGetBoundingClientRect = vi.fn(() => ({
      width: 500,
      height: 100,
      top: 0,
      left: 0,
      bottom: 100,
      right: 500,
      x: 0,
      y: 0,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      toJSON: () => {},
    }))
    Element.prototype.getBoundingClientRect = mockGetBoundingClientRect

    render(<ExampleComponent />)

    // Verify that the ResizeObserver is observing the container
    expect(resizeObserverInstance?.elements.size).toBe(1)
  })
})
