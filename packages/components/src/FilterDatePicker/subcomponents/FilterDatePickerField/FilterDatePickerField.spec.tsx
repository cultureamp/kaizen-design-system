import React, { useState, FocusEvent } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterDatePickerField, FilterDatePickerFieldProps } from "."

const user = userEvent.setup()

const inputDateOnSubmit = vi.fn<[Date | undefined], void>()

const FilterDatePickerFieldWrapper = ({
  selectedDate,
  ...restProps
}: Partial<FilterDatePickerFieldProps>): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<Date | undefined>(
    selectedDate
  )

  return (
    <FilterDatePickerField
      id="test__filter-date-picker"
      selectedDate={selectedValue}
      onDateChange={setSelectedValue}
      onDateSubmit={inputDateOnSubmit}
      locale="en-AU"
      {...restProps}
    />
  )
}

describe("<FilterDatePickerField />", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("Inputs", () => {
    it("has empty inputs when a date is not provided", () => {
      render(<FilterDatePickerFieldWrapper />)

      const inputDate = screen.getByLabelText("Date")
      expect(inputDate).toHaveValue("")
    })

    it("pre-fills the inputs when date is provided", () => {
      render(
        <FilterDatePickerFieldWrapper selectedDate={new Date("2022-05-01")} />
      )

      const inputDate = screen.getByLabelText("Date")
      expect(inputDate).toHaveValue("1 May 2022")
    })

    it("allows customising the input labels", () => {
      render(
        <FilterDatePickerFieldWrapper
          selectedDate={new Date("2022-05-01")}
          inputProps={{
            labelText: "Due date",
          }}
        />
      )

      const date = screen.getByLabelText("Due date")
      expect(date).toHaveValue("1 May 2022")
    })

    describe("onBlur", () => {
      it("updates date input and calendar values correctly on blur", async () => {
        const inputDateOnBlur = vi.fn<[FocusEvent], void>()

        render(
          <FilterDatePickerFieldWrapper
            selectedDate={new Date("2022-05-02")}
            onBlur={inputDateOnBlur}
          />
        )

        const inputDate = screen.getByLabelText("Date")
        expect(inputDate).toHaveValue("2 May 2022")

        const targetDay = screen.getByRole("button", {
          name: "1st May (Sunday)",
        })
        expect(targetDay).not.toHaveAttribute("aria-pressed")

        await user.click(inputDate)
        await user.clear(inputDate)
        await user.type(inputDate, "01/05/2022")

        await user.click(document.body)

        await waitFor(() => {
          expect(inputDate).toHaveValue("1 May 2022")
          expect(inputDateOnBlur).toHaveBeenCalled()
          expect(targetDay).toHaveAttribute("aria-pressed", "true")
        })
      })
    })

    describe("Press Enter key", () => {
      it("updates calendar values and calls submit when the date is valid", async () => {
        render(
          <FilterDatePickerFieldWrapper selectedDate={new Date("2022-05-02")} />
        )

        const inputDate = screen.getByLabelText("Date")
        expect(inputDate).toHaveValue("2 May 2022")

        const targetDay = screen.getByRole("button", {
          name: "1st May (Sunday)",
        })
        expect(targetDay).not.toHaveAttribute("aria-pressed")

        await user.click(inputDate)
        await user.clear(inputDate)
        await user.type(inputDate, "01/05/2022")
        await user.keyboard("{Enter}")

        await waitFor(() => {
          expect(targetDay).toHaveAttribute("aria-pressed", "true")
          expect(inputDateOnSubmit).toHaveBeenCalledWith(new Date("2022-05-01"))
        })
      })

      it("does not call submit when the date is invalid", async () => {
        render(
          <FilterDatePickerFieldWrapper selectedDate={new Date("2022-05-02")} />
        )

        const inputDate = screen.getByLabelText("Date")
        await user.click(inputDate)
        await user.clear(inputDate)
        await user.type(inputDate, "32/05/2022")
        await user.keyboard("{Enter}")

        await waitFor(() => {
          expect(inputDateOnSubmit).not.toHaveBeenCalled()
        })
      })
    })

    it("updates the calendar month to match the new start date input", async () => {
      render(
        <FilterDatePickerFieldWrapper selectedDate={new Date("2022-05-02")} />
      )

      const inputDate = screen.getByLabelText("Date")
      expect(inputDate).toHaveValue("2 May 2022")

      expect(screen.getByText("May 2022")).toBeVisible()

      await user.clear(inputDate)
      await user.type(inputDate, "19/02/2020")

      await user.tab({ shift: true })

      await waitFor(() => {
        expect(screen.queryByText("May 2022")).not.toBeInTheDocument()
      })
    })
  })

  describe("Calendar", () => {
    it("shows the default month as the start month when there isn't a selected value", () => {
      render(
        <FilterDatePickerFieldWrapper defaultMonth={new Date("2022-05-02")} />
      )

      expect(screen.getByText("May 2022")).toBeVisible()
    })

    it("shows the selected start date month as the start month when provided", () => {
      render(
        <FilterDatePickerFieldWrapper selectedDate={new Date("2022-05-01")} />
      )

      expect(screen.getByText("May 2022")).toBeVisible()
    })

    it("shows the current month as the start month when selected date is invalid", () => {
      render(<FilterDatePickerFieldWrapper selectedDate={new Date("potato")} />)
      const currentMonth = new Date().toLocaleDateString("en-AU", {
        month: "long",
        year: "numeric",
      })
      expect(screen.getByText(currentMonth)).toBeVisible()
    })

    it("calls the onDateSubmit when selecting a date", async () => {
      render(
        <FilterDatePickerFieldWrapper defaultMonth={new Date("2022-05-01")} />
      )
      const targetDay = screen.getByRole("button", {
        name: "15th May (Sunday)",
      })

      await user.click(targetDay)

      await waitFor(() => {
        expect(inputDateOnSubmit).toHaveBeenCalled()
      })
    })

    it("updates the input when changing the date", async () => {
      render(
        <FilterDatePickerFieldWrapper selectedDate={new Date("2022-05-15")} />
      )

      const inputDate = screen.getByLabelText("Date")
      expect(inputDate).toHaveValue("15 May 2022")

      const targetDay = screen.getByRole("button", {
        name: "12th May (Thursday)",
      })
      expect(targetDay).not.toHaveAttribute("aria-pressed")
      await user.click(targetDay)

      await waitFor(() => {
        expect(targetDay).toHaveAttribute("aria-pressed", "true")
        expect(inputDate).toHaveValue("12 May 2022")
      })
    })

    it("clears the inputs when clearing the calendar value", async () => {
      render(
        <FilterDatePickerFieldWrapper selectedDate={new Date("2022-05-15")} />
      )

      const inputDate = screen.getByLabelText("Date")
      expect(inputDate).toHaveValue("15 May 2022")

      const firstSelectedDay = screen.getByRole("button", {
        name: "15th May (Sunday)",
      })
      await user.click(firstSelectedDay)

      await waitFor(() => {
        expect(inputDate).toHaveValue("")
        expect(inputDateOnSubmit).toHaveBeenCalledWith(undefined)
      })
    })
  })

  describe("Validation", () => {
    const dateErrorId = "#test__filter-date-picker--input--date-error-message"

    describe("Custom validation", () => {
      it("shows validation messages passed in from the consumer", () => {
        render(
          <FilterDatePickerFieldWrapper
            onValidate={(): void => undefined}
            validationMessage={{
              status: "error",
              message: "Date error message",
            }}
          />
        )

        expect(screen.getByText("Date error message")).toBeVisible()
      })
    })

    describe("Inbuilt validation", () => {
      it("shows inbuilt validation messages", async () => {
        const { container } = render(<FilterDatePickerFieldWrapper />)

        const inputDate = screen.getByLabelText("Date")

        await user.clear(inputDate)
        await user.type(inputDate, "potato")

        await user.click(document.body)

        await waitFor(() => {
          const dateErrorContainer = container.querySelector(dateErrorId)
          expect(dateErrorContainer).toHaveTextContent(
            "potato is an invalid date"
          )
        })
      })

      it("shows inbuilt validation messages for pre-existing values", () => {
        const { container } = render(
          <FilterDatePickerFieldWrapper
            selectedDate={new Date("2022-05-15")}
            disabledDays={[new Date("2022-05-15")]}
          />
        )

        const dateErrorContainer = container.querySelector(dateErrorId)

        expect(dateErrorContainer).toHaveTextContent(
          "15/05/2022 is not available, try another date"
        )
      })
    })

    it("does not call onDateSubmit when the input value is invalid", async () => {
      const { getByLabelText } = render(<FilterDatePickerFieldWrapper />)

      const inputDate = getByLabelText("Date")
      await user.clear(inputDate)
      await user.type(inputDate, "potato")
      await user.tab()

      await waitFor(() => {
        expect(inputDateOnSubmit).not.toHaveBeenCalled()
      })
    })

    it("re-validates values when selecting a value using the calendar", async () => {
      const { container } = render(
        <FilterDatePickerFieldWrapper
          selectedDate={new Date("potato")}
          defaultMonth={new Date("2022-05-01")}
        />
      )

      const dateErrorContainer = container.querySelector(dateErrorId)

      await waitFor(() => {
        expect(dateErrorContainer).toHaveTextContent(
          "Invalid Date is an invalid date"
        )
      })

      const targetDay = screen.getByRole("button", {
        name: "12th May (Thursday)",
      })

      await user.click(targetDay)

      await waitFor(() => {
        expect(dateErrorContainer).not.toBeInTheDocument()
      })
    })
  })
})
