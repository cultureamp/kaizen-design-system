import React, { useEffect, useRef, useState } from 'react'
import { ariaHideOutside } from '@react-aria/overlays'
import { render, waitFor } from '@testing-library/react'
import { Popover, useFloating, type PopoverProps } from './'

const PopoverWrapper = (customProps?: Partial<PopoverProps>): JSX.Element => {
  const { refs } = useFloating()
  return (
    <Popover {...customProps} refs={refs}>
      Hello
    </Popover>
  )
}

describe('<Popover />', () => {
  describe('Portals', () => {
    const PopoverWrapperWithPortal = ({
      shouldUsePortal = false,
    }: {
      shouldUsePortal?: boolean
    }): JSX.Element => {
      const portalRef = useRef<HTMLDivElement>(null)
      const [portalContainer, setPortalContainer] = useState<HTMLDivElement>()

      useEffect(() => {
        if (portalRef.current !== null) {
          setPortalContainer(portalRef.current)
        }
      }, [])

      return (
        <>
          <div ref={portalRef} data-testid="portal-container" />
          <PopoverWrapper portalContainer={shouldUsePortal ? portalContainer : undefined} />
        </>
      )
    }

    it('renders within portal container', async () => {
      const { getByTestId } = render(<PopoverWrapperWithPortal shouldUsePortal />)

      await waitFor(() => {
        expect(getByTestId('portal-container')).toHaveTextContent('Hello')
      })
    })

    it('renders in document.body by default', async () => {
      const { getByTestId } = render(<PopoverWrapperWithPortal />)

      await waitFor(() => {
        expect(document.body).toHaveTextContent('Hello')
        expect(getByTestId('portal-container')).not.toHaveTextContent('Hello')
      })
    })

    /**
     * react-aria uses `data-react-aria-top-layer` to exempt an element from dismissal and from
     * `ariaHideOutside`/`inert`. This popover is a plain portal, so it marks itself — otherwise
     * opening it inside a react-aria overlay closes that overlay, or leaves this popover
     * visible but inert.
     */
    describe('react-aria top layer', () => {
      it('marks the popover itself as part of the top layer', () => {
        const { getByText } = render(<PopoverWrapper />)

        expect(getByText('Hello')).toHaveAttribute('data-react-aria-top-layer', 'true')
      })

      it('marks a portal container it was given, and unmarks it on unmount', async () => {
        const { getByTestId, unmount } = render(<PopoverWrapperWithPortal shouldUsePortal />)
        const container = getByTestId('portal-container')

        await waitFor(() => {
          expect(container).toHaveAttribute('data-react-aria-top-layer', 'true')
        })

        unmount()

        expect(container).not.toHaveAttribute('data-react-aria-top-layer')
      })

      it('is not hidden when another overlay isolates the rest of the page', () => {
        const otherOverlay = document.createElement('div')
        document.body.appendChild(otherOverlay)

        const { getByText } = render(<PopoverWrapper />)
        const popover = getByText('Hello')

        const revertAriaHide = ariaHideOutside([otherOverlay])

        expect(popover.closest('[aria-hidden="true"], [inert]')).toBeNull()

        revertAriaHide()
        otherOverlay.remove()
      })

      it('leaves a container the consumer already marked alone on unmount', async () => {
        const container = document.createElement('div')
        container.setAttribute('data-react-aria-top-layer', 'true')
        document.body.appendChild(container)

        const { unmount } = render(<PopoverWrapper portalContainer={container} />)

        await waitFor(() => {
          expect(container).toHaveTextContent('Hello')
        })

        unmount()

        expect(container).toHaveAttribute('data-react-aria-top-layer', 'true')
        container.remove()
      })
    })
  })
})
