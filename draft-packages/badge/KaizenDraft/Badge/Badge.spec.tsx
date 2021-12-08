import { cleanup, render, screen } from "@testing-library/react"
import * as React from "react"

import { Badge, BadgeProps } from "./Badge"

afterEach(cleanup)

const renderBadge = (props?: BadgeProps) => {
  const mergedBadgeProps = { ...props }

  return render(<Badge {...mergedBadgeProps} />)
}

describe("<Badge />", () => {
  describe("default", () => {
    it("should render a default badge variant with default styles", () => {
      const { container } = renderBadge({})

      expect(container.querySelector(".default")).toBeTruthy()
    })
  })

  describe("with different variants", () => {
    it("should render a default badge", () => {
      const { container } = renderBadge({ variant: "default" })

      expect(container.querySelector(".default")).toBeTruthy()
    })

    it("should render a active badge", () => {
      const { container } = renderBadge({ variant: "active" })

      expect(container.querySelector(".active")).toBeTruthy()
    })

    it("renders a dark badge", () => {
      const { container } = renderBadge({ variant: "dark" })

      expect(container.querySelector(".dark")).toBeTruthy()
    })

    it("renders a dot badge", () => {
      const { container } = renderBadge({ variant: "dot" })

      expect(container.querySelector(".dot")).toBeTruthy()
    })

    it("does not render children as a prop if variant is equal to dot", () => {
      renderBadge({
        variant: "dot",
        // @ts-expect-error
        children: "test",
      })

      expect(() => screen.getByText("test")).toThrow()
    })
  })
})
