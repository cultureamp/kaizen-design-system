import React, { useRef } from 'react'
import { queryByTestId, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { Collapsible, type CollapsibleRef } from './Collapsible'
const user = userEvent.setup()

describe('<Collapsible />', () => {
  it('toggles the height of the section on click of the button', async () => {
    const { getByTestId } = render(
      <Collapsible id="1" open title="First panel">
        First panel content
      </Collapsible>,
    )

    const collapsible = getByTestId('collapsible-header-1')
    const section = getByTestId('collapsible-section-1')

    await user.click(collapsible)
    await waitFor(() => {
      expect(section.style.height).toEqual('0px')
    })

    await user.click(collapsible)
    await waitFor(() => {
      expect(section.style.height).toEqual('auto')
    })
  })

  it('gives precedence to renderHeader over title', () => {
    const { container, getByTestId } = render(
      <Collapsible
        id="1"
        open
        title="Should not be rendered"
        renderHeader={(): JSX.Element => <div>This title should be rendered</div>}
      >
        First panel content
      </Collapsible>,
    )

    const titleText = getByTestId('collapsible-header-1').querySelector('div')

    expect(titleText).toHaveTextContent('This title should be rendered')
    expect(queryByTestId(container as HTMLElement, 'collapsible-button-title-1')).toBeNull()
  })

  it("doesn't render section content when lazyLoad is enabled", () => {
    const { container } = render(
      <Collapsible id="1" title="Title" lazyLoad>
        <div data-testid="lazy-load-content">First panel content</div>
      </Collapsible>,
    )

    expect(queryByTestId(container as HTMLElement, 'lazy-load-content')).toBeNull()
  })

  it('runs the onToggle callback', async () => {
    const onToggle = vi.fn()

    const { getByTestId } = render(
      <Collapsible id="1" open title="First panel" onToggle={onToggle}>
        First panel content
      </Collapsible>,
    )

    const collapsible = getByTestId('collapsible-header-1')

    await user.click(collapsible)
    await waitFor(() => {
      expect(onToggle).toHaveBeenCalledTimes(1)
      expect(onToggle).toHaveBeenCalledWith(false, '1')
    })

    await user.click(collapsible)
    await waitFor(() => {
      expect(onToggle).toHaveBeenCalledTimes(2)
      expect(onToggle).toHaveBeenCalledWith(true, '1')
    })
  })

  it('respects controlled mode (stays open after click)', async () => {
    const { getByTestId } = render(
      <Collapsible id="1" open title="First panel" controlled>
        First panel content
      </Collapsible>,
    )

    const collapsible = getByTestId('collapsible-header-1')
    const section = getByTestId('collapsible-section-1')

    await user.click(collapsible)
    await waitFor(() => {
      expect(section.style.height).toEqual('auto')
    })
  })

  it('sets inert on the section when closed by default', async () => {
    const { container } = render(
      <Collapsible id="1" title="First panel" controlled>
        First panel content
      </Collapsible>,
    )
    const section = container.querySelector('[id="1-section"]')
    expect(section).toHaveAttribute('inert')
  })

  it('does not set inert on the section when open by default', async () => {
    const { container } = render(
      <Collapsible id="1" title="First panel" open>
        First panel content
      </Collapsible>,
    )
    const section = container.querySelector('[id="1-section"]')
    expect(section).not.toHaveAttribute('inert')
  })

  it('removes inert when opened and re-applies it when closed', async () => {
    const { container, getByTestId } = render(
      <Collapsible id="1" title="First panel">
        First panel content
      </Collapsible>,
    )

    const section = container.querySelector('[id="1-section"]')
    const header = getByTestId('collapsible-header-1')

    expect(section).toHaveAttribute('inert')

    await user.click(header)
    await waitFor(() => {
      expect(section).not.toHaveAttribute('inert')
    })

    await user.click(header)
    await waitFor(() => {
      expect(section).toHaveAttribute('inert')
    })
  })

  describe('Ref support', () => {
    it('exposes a ref to the toggle button with focus method', () => {
      const ref = React.createRef<CollapsibleRef>()
      render(
        <Collapsible ref={ref} id="1" title="First panel">
          First panel content
        </Collapsible>,
      )

      expect(ref.current).toBeDefined()
      expect(ref.current?.focus).toBeDefined()
      expect(typeof ref.current?.focus).toBe('function')
    })

    it('allows focusing the toggle button via ref', () => {
      const ref = React.createRef<CollapsibleRef>()
      const { getByTestId } = render(
        <Collapsible ref={ref} id="1" title="First panel">
          First panel content
        </Collapsible>,
      )

      const button = getByTestId('collapsible-button-1')
      const focusSpy = vi.spyOn(button, 'focus')

      ref.current?.focus()

      expect(focusSpy).toHaveBeenCalled()
    })

    it('ref works in controlled mode', () => {
      const ref = React.createRef<CollapsibleRef>()
      const { rerender, getByTestId } = render(
        <Collapsible ref={ref} id="1" title="First panel" open controlled>
          First panel content
        </Collapsible>,
      )

      const button = getByTestId('collapsible-button-1')
      const focusSpy = vi.spyOn(button, 'focus')

      ref.current?.focus()

      expect(focusSpy).toHaveBeenCalled()

      // Verify ref is still functional after re-render
      rerender(
        <Collapsible ref={ref} id="1" title="First panel" open={false} controlled>
          First panel content
        </Collapsible>,
      )

      ref.current?.focus()
      expect(focusSpy).toHaveBeenCalledTimes(2)
    })

    it('ref works in uncontrolled mode', () => {
      const ref = React.createRef<CollapsibleRef>()
      const { getByTestId } = render(
        <Collapsible ref={ref} id="1" title="First panel" open>
          First panel content
        </Collapsible>,
      )

      const button = getByTestId('collapsible-button-1')
      const focusSpy = vi.spyOn(button, 'focus')

      ref.current?.focus()

      expect(focusSpy).toHaveBeenCalled()
    })

    it('ref is accessible when no id prop is provided (uses fallback)', () => {
      const ref = React.createRef<CollapsibleRef>()
      const { container } = render(
        <Collapsible ref={ref} title="First panel">
          First panel content
        </Collapsible>,
      )

      expect(ref.current).toBeDefined()
      expect(ref.current?.focus).toBeDefined()

      // Find the button element (querySelector with * selector would also match the title div)
      const button = container.querySelector<HTMLButtonElement>('button[data-testid*="collapsible-button-"]')!
      expect(button).toBeTruthy()
      const focusSpy = vi.spyOn(button, 'focus')

      ref.current?.focus()

      expect(focusSpy).toHaveBeenCalled()
    })

    it('supports useRef hook pattern for ref management', async () => {
      const TestComponent = (): JSX.Element => {
        const collapsibleRef = useRef<CollapsibleRef>(null)

        return (
          <>
            <button
              type="button"
              onClick={() => collapsibleRef.current?.focus()}
              data-testid="focus-button"
            >
              Focus Collapsible
            </button>
            <Collapsible ref={collapsibleRef} id="1" title="First panel">
              First panel content
            </Collapsible>
          </>
        )
      }

      const { getByTestId } = render(<TestComponent />)

      const button = getByTestId('collapsible-button-1')
      const focusSpy = vi.spyOn(button, 'focus')

      const focusButton = getByTestId('focus-button')
      await user.click(focusButton)

      expect(focusSpy).toHaveBeenCalled()
    })
  })
})
