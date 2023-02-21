import React, { useRef } from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { enAU } from "date-fns/locale"
import {
  DateRangeInputField,
  DateRangeInputFieldProps,
} from "./DateRangeInputField"

const DateRangeInputFieldWrapper = (
  props: Partial<DateRangeInputFieldProps>
): JSX.Element => (
  <DateRangeInputField
    id="test__date-range-input-field"
    legend="Dates"
    inputRangeStartProps={{ labelText: "Date from" }}
    inputRangeEndProps={{ labelText: "Date to" }}
    locale={enAU}
    {...props}
  />
)

describe("<DateRangeInputField />", () => {
  it("has unique ids for both inputs", () => {
    const { container } = render(<DateRangeInputFieldWrapper id="range" />)
    const inputStart = container.querySelector("#range--from")
    const inputEnd = container.querySelector("#range--from")
    expect(inputStart).toBeVisible()
    expect(inputEnd).toBeVisible()
  })

  it("has an accessible name for the fieldset", () => {
    render(<DateRangeInputFieldWrapper />)
    expect(screen.getByRole("group", { name: "Dates" })).toBeVisible()
  })

  it("adds description to both inputs", () => {
    render(<DateRangeInputFieldWrapper />)
    const inputStart = screen.getByRole("textbox", { name: "Date from" })
    const inputEnd = screen.getByRole("textbox", { name: "Date to" })
    expect(inputStart).toHaveAccessibleDescription("Input format : dd/mm/yyyy")
    expect(inputEnd).toHaveAccessibleDescription("Input format : dd/mm/yyyy")
  })

  it("adds validation message to description if it exists", () => {
    render(
      <DateRangeInputFieldWrapper
        status={{
          dateStart: "error",
        }}
        validationMessage="Date Start has an error"
      />
    )
    const inputStart = screen.getByRole("textbox", { name: "Date from" })
    expect(inputStart).toHaveAccessibleDescription(
      "Error message Date Start has an error Input format : dd/mm/yyyy"
    )
    expect(screen.getByText("Date Start has an error")).toBeVisible()
  })

  describe("Disabled", () => {
    it("disables both inputs", () => {
      render(<DateRangeInputFieldWrapper disabled />)
      const inputStart = screen.getByRole("textbox", { name: "Date from" })
      const inputEnd = screen.getByRole("textbox", { name: "Date to" })
      expect(inputStart).toBeDisabled()
      expect(inputEnd).toBeDisabled()
    })
  })

  describe("Refs", () => {
    it("correctly passes through both input refs", async () => {
      const onButtonClick = jest.fn<
        void,
        [string | undefined, string | undefined]
      >()

      const Wrapper = (): JSX.Element => {
        const inputRangeStartRef = useRef<HTMLInputElement>(null)
        const inputRangeEndRef = useRef<HTMLInputElement>(null)
        const ref = useRef({ inputRangeStartRef, inputRangeEndRef })

        const handleClick = (): void =>
          onButtonClick(
            inputRangeStartRef.current?.id,
            inputRangeEndRef.current?.id
          )

        return (
          <>
            <DateRangeInputField
              ref={ref}
              id="test__id"
              legend="Dates"
              inputRangeStartProps={{ labelText: "Start" }}
              inputRangeEndProps={{ labelText: "End" }}
              locale={enAU}
            />
            <button onClick={handleClick}>Click me</button>
          </>
        )
      }

      render(<Wrapper />)

      await userEvent.click(screen.getByText("Click me"))
      expect(onButtonClick).toBeCalledWith("test__id--from", "test__id--to")
    })
  })
})
