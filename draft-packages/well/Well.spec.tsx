import React from "react"
import { cleanup, render } from "@testing-library/react"
import { WellProps } from "./Well"
import { Well } from "."

afterEach(cleanup)

const defaultWellProps = {
  id: "testId",
  automationId: "automationTestId",
  children: "",
}

const renderWell = (props?: WellProps): ReturnType<typeof render> => {
  const mergedWellProps = { ...defaultWellProps, ...props }

  return render(<Well {...mergedWellProps} />)
}

describe("<Well />", () => {
  describe("default", () => {
    it("should render a default well variant with default styles", () => {
      const { container } = renderWell({})

      expect(container.querySelector(".default")).toBeTruthy()
      expect(container.querySelector(".solid")).toBeTruthy()
      expect(container.querySelector(".noMargin")).toBeFalsy()
    })
  })

  describe("with different variants", () => {
    it("should render a default well", () => {
      const { container } = renderWell({ variant: "default" })

      expect(container.querySelector(".default")).toBeTruthy()
    })
    it("should render a negative well", () => {
      const { container } = renderWell({ variant: "negative" })

      expect(container.querySelector(".negative")).toBeTruthy()
    })

    it("should render a positive well", () => {
      const { container } = renderWell({ variant: "positive" })

      expect(container.querySelector(".positive")).toBeTruthy()
    })
    it("should render a informative well", () => {
      const { container } = renderWell({ variant: "informative" })

      expect(container.querySelector(".informative")).toBeTruthy()
    })
    it("should render a cautionary well", () => {
      const { container } = renderWell({ variant: "cautionary" })

      expect(container.querySelector(".cautionary")).toBeTruthy()
    })
  })

  describe("with borders", () => {
    it("should render a well with solid border", () => {
      const { container } = renderWell({ borderStyle: "solid" })

      expect(container.querySelector(".solid")).toBeTruthy()
    })
    it("should render a well without border", () => {
      const { container } = renderWell({ borderStyle: "none" })

      expect(container.querySelector(".none")).toBeTruthy()
    })

    it("should render a well with dashed border", () => {
      const { container } = renderWell({ borderStyle: "dashed" })

      expect(container.querySelector(".dashed")).toBeTruthy()
    })
  })

  describe("optional margin", () => {
    it("renders a margin by default", () => {
      const { container } = renderWell({})

      expect(container.querySelector(".noMargin")).toBeFalsy()
    })
    it("does not render a margin when the noMargin prop is applied", () => {
      const { container } = renderWell({ noMargin: true })

      expect(container.querySelector(".noMargin")).toBeTruthy()
    })
  })
})
