import React from "react"
import { render, screen } from "@testing-library/react"
import {
  TruncatedLabelTriggerButton,
  TruncatedLabelTriggerButtonProps,
} from "./TruncatedLabelTriggerButton"

jest.mock("./TriggerButtonBase", () => ({
  TriggerButtonBase: ({ children }: { children: React.ReactNode }) => (
    <button>{children}</button>
  ),
}))

const getMockOptionLabels = (count: number): string[] =>
  Array.from(Array(count).keys()).map(item => `option${item + 1}-label-mock`)

const TruncatedLabelTriggerButtonWrapper = ({
  selectedLabels = getMockOptionLabels(3),
}: Partial<TruncatedLabelTriggerButtonProps>) => (
  <TruncatedLabelTriggerButton
    label="label-mock"
    selectedLabels={selectedLabels}
  />
)

describe("<TruncatedLabelTriggerButton /> - Visual content", () => {
  describe("Given 3 selected labels", () => {
    beforeEach(() => render(<TruncatedLabelTriggerButtonWrapper />))

    it("shows the label", () => {
      expect(screen.getByRole("button")).toHaveTextContent("label-mock")
    })

    it("shows all the option labels", () => {
      expect(screen.getByRole("button")).toHaveTextContent(
        "option1-label-mock, option2-label-mock, option3-label-mock"
      )
    })
  })

  describe("Given 4 selected labels", () => {
    beforeEach(() =>
      render(
        <TruncatedLabelTriggerButtonWrapper
          selectedLabels={getMockOptionLabels(4)}
        />
      )
    )

    it("shows the label", () => {
      expect(screen.getByRole("button")).toHaveTextContent("label-mock")
    })

    it("shows only the first 3 option labels", () => {
      expect(screen.getByRole("button")).toHaveTextContent(
        "option1-label-mock, option2-label-mock, option3-label-mock"
      )

      expect(screen.getByRole("button")).not.toHaveTextContent(
        "option4-label-mock"
      )
    })

    it("+1 more", () => {
      expect(screen.getByRole("button")).toHaveTextContent("+1 more")
    })
  })

  describe("Given 6 selected labels", () => {
    it("shows +3 more", () => {
      render(
        <TruncatedLabelTriggerButtonWrapper
          selectedLabels={getMockOptionLabels(6)}
        />
      )
      expect(screen.getByRole("button")).toHaveTextContent("+3 more")
    })
  })
})
