import React, { useRef } from "react"
import { screen, waitFor, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { enAU } from "date-fns/locale"
import { vi } from "vitest"
import { DateRangeInputField, DateRangeInputFieldProps } from "./DateRangeInputField"

const user = userEvent.setup()

const DateRangeInputFieldWrapper = (props: Partial<DateRangeInputFieldProps>): JSX.Element => (
  <DateRangeInputField
    id="test__date-range-input-field"
    legend="Dates"
    inputStartDateProps={{ labelText: "Date from" }}
    inputEndDateProps={{ labelText: "Date to" }}
    locale={enAU}
    {...props}
  />
)

describe("<DateRangeInputField />", () => {
  it("has unique ids for both inputs", async () => {
    const { container } = render(<DateRangeInputFieldWrapper id="range" />)
    const inputStart = container.querySelector("#range--from")
    const inputEnd = container.querySelector("#range--to")
    await waitFor(() => {
      expect(inputStart).toBeVisible()
      expect(inputEnd).toBeVisible()
    })
  })

  it("has an accessible name for the fieldset", async () => {
    render(<DateRangeInputFieldWrapper />)
    await waitFor(() => {
      expect(screen.getByRole("group", { name: "Dates" })).toBeVisible()
    })
  })

  it("adds description to both inputs", async () => {
    render(<DateRangeInputFieldWrapper />)
    const inputStart = screen.getByRole("textbox", { name: "Date from" })
    const inputEnd = screen.getByRole("textbox", { name: "Date to" })
    await waitFor(() => {
      expect(inputStart).toHaveAccessibleDescription("Input format : dd/mm/yyyy")
      expect(inputEnd).toHaveAccessibleDescription("Input format : dd/mm/yyyy")
    })
  })

  it("adds validation message to description if it exists", async () => {
    render(
      <DateRangeInputFieldWrapper
        validationMessage={{
          dateStart: {
            status: "error",
            message: "Date Start has an error",
          },
        }}
      />,
    )
    const inputStart = screen.getByRole("textbox", { name: "Date from" })
    await waitFor(() => {
      expect(inputStart).toHaveAccessibleDescription(
        // React Testing Library bug: Icon should be showing aria-label "error message" instead
        "error Date Start has an error Input format : dd/mm/yyyy",
      )
      expect(screen.getByText("Date Start has an error")).toBeVisible()
    })
  })

  describe("Disabled", () => {
    it("disables both inputs", async () => {
      render(<DateRangeInputFieldWrapper disabled />)
      const inputStart = screen.getByRole("textbox", { name: "Date from" })
      const inputEnd = screen.getByRole("textbox", { name: "Date to" })
      await waitFor(() => {
        expect(inputStart).toBeDisabled()
        expect(inputEnd).toBeDisabled()
      })
    })
  })

  describe("Refs", () => {
    it("correctly passes through both input refs", async () => {
      const onButtonClick = vi.fn()

      const Wrapper = (): JSX.Element => {
        const inputStartDateRef = useRef<HTMLInputElement>(null)
        const inputEndDateRef = useRef<HTMLInputElement>(null)
        const ref = useRef({ inputStartDateRef, inputEndDateRef })

        const handleClick = (): void =>
          onButtonClick(inputStartDateRef.current?.id, inputEndDateRef.current?.id)

        return (
          <>
            <DateRangeInputField
              ref={ref}
              id="test__id"
              legend="Dates"
              inputStartDateProps={{ labelText: "Start" }}
              inputEndDateProps={{ labelText: "End" }}
              locale={enAU}
            />
            <button type="button" onClick={handleClick}>
              Click me
            </button>
          </>
        )
      }

      render(<Wrapper />)

      await user.click(screen.getByText("Click me"))
      expect(onButtonClick).toHaveBeenCalledWith("test__id--from", "test__id--to")
    })
  })
})
