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

describe("portalContainer prop", () => {
  it("does something", async () => {
    const portalContainer = document.createElement("div")
    portalContainer.id = "portal-container"
    //@ts-ignore
    portalContainer["data-testid"] = "portal-container"
    document.body.append(portalContainer)

    const { getByTestId } = render(
      <>
        <PopoverWrapper
          portalContainer={document.getElementById("portal-container")}
        >
          Hello
        </PopoverWrapper>
      </>,
      { container: portalContainer }
    )
    /** @todo: Fill in test case */

    await waitFor(() => {
      expect(getByTestId("portal-container")).toHaveTextContent("Hello")
    })
  })
})
