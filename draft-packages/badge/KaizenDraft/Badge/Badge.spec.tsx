import * as React from "react"
import { cleanup, render, screen } from "@testing-library/react"

import { Badge, BadgeProps } from "./Badge"

afterEach(cleanup)

const renderBadge = (props?: BadgeProps) => render(<Badge {...props} />)

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
        // Used to ignore the TS error when adding children to dot variant.
        children: "test",
      })

      expect(() => screen.getByText("test")).toThrow()
    })
  })
})
