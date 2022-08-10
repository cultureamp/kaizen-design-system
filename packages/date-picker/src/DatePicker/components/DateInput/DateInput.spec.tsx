import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { enUS } from "date-fns/locale"
import dateStart from "@kaizen/component-library/icons/date-start.icon.svg"
import { DateInput, DateInputProps } from "./DateInput"

const defaultProps = {
  id: "text-field-test",
  labelText: "Label",
  icon: dateStart,
  isCalendarOpen: false,
  onButtonClick: jest.fn<void, []>(),
  onKeyDown: jest.fn<void, [React.KeyboardEvent<HTMLInputElement>]>(),
  calendarId: "calendar-dialog",
  value: undefined,
  locale: enUS,
}

const DateInputWrapper = (props: Partial<DateInputProps>) => (
  <DateInput {...defaultProps} {...props} />
)

describe("<DateInput />", () => {
  describe("Input", () => {
    it("has the role of combobox", () => {
      render(<DateInputWrapper />)
      expect(
        screen.getByRole("combobox", { name: "Label" })
      ).toBeInTheDocument()
    })

    it("associates the description with the input", () => {
      render(<DateInputWrapper />)
      expect(
        screen.getByRole("combobox", {
          description: "Input format: mm/dd/yyyy",
        })
      ).toBeInTheDocument()
    })
  })

  describe("Icon button", () => {
    it("has helpful label", () => {
      render(<DateInputWrapper />)
      expect(
        screen.getByRole("button", { name: "Choose date" })
      ).toBeInTheDocument()
    })

    it("has helpful label showing the current date when one is selected", () => {
      render(
        <DateInputWrapper value="Mar 1, 2022" onChange={() => undefined} />
      )
      expect(
        screen.getByRole("button", { name: "Change date, Mar 1, 2022" })
      ).toBeInTheDocument()
    })
  })

  describe("States", () => {
    it("disables both input and icon button", () => {
      render(<DateInputWrapper disabled />)
      const input = screen.getByRole("combobox", { name: "Label" })
      const calendarButton = screen.getByRole("button", { name: "Choose date" })
      expect(input).toBeDisabled()
      expect(calendarButton).toBeDisabled()
    })
  })

  describe("Validation", () => {
    it("shows validation message", () => {
      render(
        <DateInputWrapper
          status="error"
          validationMessage="There is an error"
        />
      )
      const errorMessage = screen.getByText("There is an error")
      expect(errorMessage).toBeInTheDocument()
    })

    it("does not show validation message when field is disabled", () => {
      render(
        <DateInputWrapper
          status="error"
          validationMessage="There is an error"
          disabled
        />
      )
      const errorMessage = screen.queryByText("There is an error")
      expect(errorMessage).not.toBeInTheDocument()
    })
  })
})
