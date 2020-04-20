import { cleanup, render } from "@testing-library/react"
import * as React from "react"

import { Icon } from "@kaizen/component-library"

afterEach(cleanup)

const svgIcon = {
  id: "my-icon",
  viewBox: "0 0 20 20",
}

describe("<Icon />", () => {
  describe("presentational", () => {
    it("should not render a title", () => {
      const title = "My unnecessary accessible title"

      const { queryByText } = render(
        <Icon title={title} icon={svgIcon} role="presentation" />
      )
      expect(queryByText(title)).toBeFalsy()
    })

    it("should not render a description", () => {
      const description = "My unnecessary accessible icon description"

      const { queryByText } = render(
        <Icon desc={description} icon={svgIcon} role="presentation" />
      )
      expect(queryByText(description)).toBeFalsy()
    })

    it("should not be visible to screen readers", () => {
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

      expect(container.querySelector(`[aria-hidden="true"]`)).toBeTruthy()
    })
  })

  describe("meaningful", () => {
    it("should render a title", () => {
      const title = "My accessible title"

      const { queryByText } = render(
        <Icon title={title} icon={svgIcon} role="img" />
      )
      expect(queryByText(title)).toBeTruthy()
    })

    it("should render a description", () => {
      const description = "My accessible icon description"

      const { queryByText } = render(
        <Icon title="Icon" desc={description} icon={svgIcon} role="img" />
      )
      expect(queryByText(description)).toBeTruthy()
    })

    it("should be visible to screen readers", () => {
      const title = "My accessible title"
      const description = "My accessible icon description"

      const { container } = render(
        <Icon title={title} desc={description} icon={svgIcon} role="img" />
      )

      expect(container.querySelector(`[aria-hidden="false"]`)).toBeTruthy()
    })
  })
})
