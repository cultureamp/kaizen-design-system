import React from "react"
import { render } from "@testing-library/react"
import { WellProps } from "./Well"
import { Well } from "."

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
    it("renders a default well variant with default styles", () => {
      const { container } = renderWell({})

      expect(container.querySelector(".default")).toBeTruthy()
      expect(container.querySelector(".solid")).toBeTruthy()
      expect(container.querySelector(".noMargin")).toBeFalsy()
    })
  })

  describe("with different variants", () => {
    it("renders a default well", () => {
      const { container } = renderWell({ variant: "default" })

      expect(container.querySelector(".default")).toBeTruthy()
    })
    it("renders a negative well", () => {
      const { container } = renderWell({ variant: "negative" })

      expect(container.querySelector(".negative")).toBeTruthy()
    })

    it("renders a positive well", () => {
      const { container } = renderWell({ variant: "positive" })

      expect(container.querySelector(".positive")).toBeTruthy()
    })
    it("renders a informative well", () => {
      const { container } = renderWell({ variant: "informative" })

      expect(container.querySelector(".informative")).toBeTruthy()
    })
    it("renders a cautionary well", () => {
      const { container } = renderWell({ variant: "cautionary" })

      expect(container.querySelector(".cautionary")).toBeTruthy()
    })
  })

  describe("with borders", () => {
    it("renders a well with solid border", () => {
      const { container } = renderWell({ borderStyle: "solid" })

      expect(container.querySelector(".solid")).toBeTruthy()
    })
    it("renders a well without border", () => {
      const { container } = renderWell({ borderStyle: "none" })

      expect(container.querySelector(".none")).toBeTruthy()
    })

    it("renders a well with dashed border", () => {
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
