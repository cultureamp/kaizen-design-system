import "./matchMedia.mock"

import { cleanup, render } from "@testing-library/react"
import * as React from "react"
import { NavigationTab, TitleBlockZen } from "./index"

afterEach(() => cleanup())

describe("<TitleBlockZen />", () => {
  describe("when the primary action is a button", () => {
    const primaryActionAsButton = {
      label: "primaryActionAsButton",
      href: "#",
      primary: true,
    }

    it("renders the primary action button label", () => {
      const { queryByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsButton}>
          Example
        </TitleBlockZen>
      )
      expect(queryByTestId("title-block-main-actions-toolbar")).toBeTruthy()
    })

    it("renders the primary action label as the label of the mobile action drawer", () => {
      const { getByTestId } = render(
        <TitleBlockZen title="Test Title" primaryAction={primaryActionAsButton}>
          Example
        </TitleBlockZen>
      )
      expect(
        getByTestId("title-block-main-actions-toolbar").textContent
      ).toEqual("primaryActionAsButton")
    })

    // it("blah", () => {
    //   const ShallowWrapper = render(
    //     <TitleBlockZen title="Test Title" primaryAction={primaryActionAsButton}>
    //       Example
    //     </TitleBlockZen>
    //   )
    //   expect(
    //     ShallowWrapper.find()
    // })
  })
})
