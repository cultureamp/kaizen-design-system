import React, { useEffect, useRef, useState } from "react"
import { render, waitFor } from "@testing-library/react"
import { Popover, PopoverProps, useFloating } from "./"

const PopoverWrapper = (customProps?: Partial<PopoverProps>): JSX.Element => {
  const { refs } = useFloating()
  return (
    <Popover {...customProps} refs={refs}>
      Hello
    </Popover>
  )
}

describe("<Popover />", () => {
  describe("Portals", () => {
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
          <PopoverWrapper
            portalContainer={shouldUsePortal ? portalContainer : undefined}
          />
        </>
      )
    }

    it("renders within portal container", async () => {
      const { getByTestId } = render(
        <PopoverWrapperWithPortal shouldUsePortal />
      )

      await waitFor(() => {
        expect(getByTestId("portal-container")).toHaveTextContent("Hello")
      })
    })

    it("renders in document.body by default", async () => {
      const { getByTestId } = render(<PopoverWrapperWithPortal />)

      await waitFor(() => {
        expect(document.body).toHaveTextContent("Hello")
        expect(getByTestId("portal-container")).not.toHaveTextContent("Hello")
      })
    })
  })
})
