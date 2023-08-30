import React from "react"
import { render } from "@testing-library/react"
import { Badge, BadgeProps } from "./Badge"

const renderBadge = (props?: BadgeProps): ReturnType<typeof render> =>
  render(<Badge {...props} />)

describe("<Badge />", () => {
  describe("default", () => {
    it("should render a default badge variant with default styles", () => {
      const { container } = renderBadge({})

      expect(container.querySelector(".default")).toBeTruthy()
    })
  })

  describe("with different variants", () => {
    it("does not render children as a prop if variant is equal to dot", () => {
      const { getByText } = renderBadge({
        variant: "dot",
        // @ts-expect-error
        // Used to ignore the TS error when adding children to dot variant.
        children: "test",
      })

      expect(() => getByText("test")).toThrow()
    })
  })
})
