import React from "react"
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
    const portalContainer = document.createElement("div")
    portalContainer.setAttribute("id", "portal-container")
    portalContainer.setAttribute("data-testid", "portal-container")

    beforeAll(() => {
      document.body.append(portalContainer)
    })

    afterAll(() => {
      document.body.removeChild(portalContainer)
    })

    it("renders within portal container", async () => {
      const { getByTestId } = render(
        <PopoverWrapper
          portalContainer={document.getElementById("portal-container")}
        />
      )

      await waitFor(() => {
        expect(getByTestId("portal-container")).toHaveTextContent("Hello")
      })
    })

    it("renders in document.body by default", async () => {
      const { getByTestId } = render(<PopoverWrapper />)

      await waitFor(() => {
        expect(document.body).toHaveTextContent("Hello")
        expect(getByTestId("portal-container")).not.toHaveTextContent("Hello")
      })
    })
  })
})
