import * as React from "react"
import { render } from "@testing-library/react"
import { Icon } from "@kaizen/component-library"

const svgIcon = {
  id: "my-icon",
  viewBox: "0 0 20 20",
}

describe("<Icon />", () => {
  describe("presentational", () => {
    it("does not render an arial label", () => {
      const title = "My unnecessary accessible title"
      const { queryByLabelText } = render(
        <Icon title={title} icon={svgIcon} role="presentation" />
      )

      expect(queryByLabelText(title)).not.toBeInTheDocument()
    })

    it("does not render a description", () => {
      const description = "My unnecessary accessible icon description"

      const { queryByText } = render(
        <Icon desc={description} icon={svgIcon} role="presentation" />
      )
      expect(queryByText(description)).toBeFalsy()
    })

    it("is not visible to screen readers", () => {
      const title = "My accessible title"
      const description = "My accessible icon description"

      const { container } = render(
        <Icon
          title={title}
          desc={description}
          icon={svgIcon}
          role="presentation"
        />
      )

      expect(container.querySelector('[aria-hidden="true"]')).toBeTruthy()
    })
  })

  describe("meaningful", () => {
    it("renders an arial label", () => {
      const title = "My accessible title"
      const { queryByLabelText } = render(
        <Icon title={title} icon={svgIcon} role="img" />
      )

      expect(queryByLabelText(title)).toBeInTheDocument()
    })

    it("renders a description", () => {
      const description = "My accessible icon description"

      const { queryByText } = render(
        <Icon title="Icon" desc={description} icon={svgIcon} role="img" />
      )
      expect(queryByText(description)).toBeTruthy()
    })
  })
})
