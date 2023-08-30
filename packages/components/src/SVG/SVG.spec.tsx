import React from "react"
import { render } from "@testing-library/react"
import { SVG } from "./SVG"

describe("<Icon />", () => {
  describe("presentational", () => {
    it("does not render an aria label", () => {
      const title = "My unnecessary accessible title"
      const { queryByLabelText } = render(
        <SVG title={title} role="presentation">
          <path />
        </SVG>
      )

      expect(queryByLabelText(title)).not.toBeInTheDocument()
    })

    it("does not render a description", () => {
      const description = "My unnecessary accessible icon description"

      const { queryByText } = render(
        <SVG desc={description} role="presentation">
          <path />
        </SVG>
      )
      expect(queryByText(description)).toBeFalsy()
    })

    it("is not visible to screen readers", () => {
      const title = "My accessible title"
      const description = "My accessible icon description"

      const { container } = render(
        <SVG title={title} desc={description} role="presentation">
          <path />
        </SVG>
      )

      expect(container.querySelector('[aria-hidden="true"]')).toBeTruthy()
    })
  })

  describe("meaningful", () => {
    it("renders an accessible title", () => {
      const title = "My accessible title"
      const { queryByText } = render(
        <SVG title={title} role="img">
          <path />
        </SVG>
      )

      expect(queryByText(title)).toBeInTheDocument()
    })

    it("renders a description", () => {
      const description = "My accessible icon description"

      const { queryByText } = render(
        <SVG title="Icon" desc={description} role="img">
          <path />
        </SVG>
      )
      expect(queryByText(description)).toBeTruthy()
    })
  })
})
