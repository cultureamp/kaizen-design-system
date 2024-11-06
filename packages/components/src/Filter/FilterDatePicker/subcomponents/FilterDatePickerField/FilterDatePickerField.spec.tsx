import React, { useState } from "react"
import { screen, waitFor, within, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterDatePickerField, FilterDatePickerFieldProps } from "."

const user = userEvent.setup()

const inputDateOnSubmit = vi.fn()

const FilterDatePickerFieldWrapper = ({
  selectedDate,
  ...restProps
}: Partial<FilterDatePickerFieldProps>): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<Date | undefined>(
    selectedDate,
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

const waitForI18nContent = async (): Promise<void> => {
  await waitFor(() => {
    expect(screen.getByLabelText("Date")).toBeVisible()
  })
}

describe("<FilterDatePickerField />", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("Inputs", () => {
    it("has empty inputs when a date is not provided", async () => {
      render(<FilterDatePickerFieldWrapper />)
      await waitForI18nContent()
      const inputDate = screen.getByLabelText("Date")
      expect(inputDate).toHaveValue("")
    })

    it("pre-fills the inputs when date is provided", async () => {
      render(
        <FilterDatePickerFieldWrapper selectedDate={new Date("2022-05-01")} />,
      )
      await waitForI18nContent()
      const inputDate = screen.getByLabelText("Date")
      expect(inputDate).toHaveValue("1 May 2022")
    })

    it("allows customising the input labels", async () => {
      render(
        <FilterDatePickerFieldWrapper
          selectedDate={new Date("2022-05-01")}
          inputProps={{
            labelText: "Due date",
          }}
        />,
      )
      await waitFor(() => {
        const date = screen.getByLabelText("Due date")
        expect(date).toHaveValue("1 May 2022")
      })
    })

    describe("onBlur", () => {
      it("updates date input and calendar values correctly on blur", async () => {
        const inputDateOnBlur = vi.fn()

        render(
          <FilterDatePickerFieldWrapper
            selectedDate={new Date("2022-05-02")}
            onBlur={inputDateOnBlur}
          />,
        )
        await waitForI18nContent()

        const inputDate = screen.getByLabelText("Date")
        expect(inputDate).toHaveValue("2 May 2022")

        const targetMonth = screen.getByRole("grid", { name: "May 2022" })
        const targetDay = within(targetMonth).getByRole("gridcell", {
          name: "1",
        })
        expect(targetDay).not.toHaveAttribute("aria-selected")

        await user.click(inputDate)
        await user.clear(inputDate)
        await user.type(inputDate, "01/05/2022")

        await user.click(document.body)

        await waitFor(() => {
          expect(inputDate).toHaveValue("1 May 2022")
          expect(inputDateOnBlur).toHaveBeenCalled()
          expect(targetDay).toHaveAttribute("aria-selected", "true")
        })
      })
    })

    describe("Press Enter key", () => {
      it("updates calendar values and calls submit when the date is valid", async () => {
        render(
          <FilterDatePickerFieldWrapper selectedDate={new Date("2022-05-02")} />,
        )
        await waitForI18nContent()

        const inputDate = screen.getByLabelText("Date")
        expect(inputDate).toHaveValue("2 May 2022")

        const targetMonth = screen.getByRole("grid", { name: "May 2022" })
        const targetDay = within(targetMonth).getByRole("gridcell", {
          name: "1",
        })
        expect(targetDay).not.toHaveAttribute("aria-selected")

        await user.click(inputDate)
        await user.clear(inputDate)
        await user.type(inputDate, "01/05/2022")
        await user.keyboard("{Enter}")

        await waitFor(() => {
          expect(targetDay).toHaveAttribute("aria-selected", "true")
          expect(inputDateOnSubmit).toHaveBeenCalledWith(new Date("2022-05-01"))
        })
      })

      it("does not call submit when the date is invalid", async () => {
        render(
          <FilterDatePickerFieldWrapper selectedDate={new Date("2022-05-02")} />,
        )
        await waitForI18nContent()

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
        <FilterDatePickerFieldWrapper selectedDate={new Date("2022-05-02")} />,
      )
      await waitForI18nContent()

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
    it("shows the default month as the start month when there isn't a selected value", async () => {
      render(
        <FilterDatePickerFieldWrapper defaultMonth={new Date("2022-05-02")} />,
      )
      await waitForI18nContent()
      expect(screen.getByText("May 2022")).toBeVisible()
    })

    it("shows the selected start date month as the start month when provided", async () => {
      render(
        <FilterDatePickerFieldWrapper selectedDate={new Date("2022-05-01")} />,
      )
      await waitForI18nContent()
      expect(screen.getByText("May 2022")).toBeVisible()
    })

    it("shows the current month as the start month when selected date is invalid", async () => {
      render(<FilterDatePickerFieldWrapper selectedDate={new Date("potato")} />)
      await waitForI18nContent()
      const currentMonth = new Date().toLocaleDateString("en-AU", {
        month: "long",
        year: "numeric",
      })
      expect(screen.getByText(currentMonth)).toBeVisible()
    })

    it("calls the onDateSubmit when selecting a date", async () => {
      render(
        <FilterDatePickerFieldWrapper defaultMonth={new Date("2022-05-01")} />,
      )
      const targetMonth = screen.getByRole("grid", { name: "May 2022" })
      const targetDay = within(targetMonth).getByRole("gridcell", {
        name: "15",
      })
      await user.click(targetDay)

      await waitFor(() => {
        expect(inputDateOnSubmit).toHaveBeenCalled()
      })
    })

    it("updates the input when changing the date", async () => {
      render(
        <FilterDatePickerFieldWrapper selectedDate={new Date("2022-05-15")} />,
      )
      await waitForI18nContent()

      const inputDate = screen.getByLabelText("Date")
      expect(inputDate).toHaveValue("15 May 2022")

      const targetMonth = screen.getByRole("grid", { name: "May 2022" })
      const targetDay = within(targetMonth).getByRole("gridcell", {
        name: "12",
      })
      expect(targetDay).not.toHaveAttribute("aria-selected")
      await user.click(targetDay)

      await waitFor(() => {
        expect(targetDay).toHaveAttribute("aria-selected", "true")
        expect(inputDate).toHaveValue("12 May 2022")
      })
    })

    it("clears the inputs when clearing the calendar value", async () => {
      render(
        <FilterDatePickerFieldWrapper selectedDate={new Date("2022-05-15")} />,
      )
      await waitForI18nContent()

      const inputDate = screen.getByLabelText("Date")
      expect(inputDate).toHaveValue("15 May 2022")

      const targetMonth = screen.getByRole("grid", { name: "May 2022" })
      const firstSelectedDay = within(targetMonth).getByRole("gridcell", {
        name: "15",
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
      it("shows validation messages passed in from the consumer", async () => {
        render(
          <FilterDatePickerFieldWrapper
            onValidate={(): void => undefined}
            validationMessage={{
              status: "error",
              message: "Date error message",
            }}
          />,
        )
        await waitForI18nContent()
        expect(screen.getByText("Date error message")).toBeVisible()
      })
    })

    describe("Inbuilt validation", () => {
      it("shows inbuilt validation messages", async () => {
        const { container } = render(<FilterDatePickerFieldWrapper />)
        await waitForI18nContent()

        const inputDate = screen.getByLabelText("Date")

        await user.clear(inputDate)
        await user.type(inputDate, "potato")

        await user.click(document.body)

        await waitFor(() => {
          const dateErrorContainer = container.querySelector(dateErrorId)
          expect(dateErrorContainer).toHaveTextContent(
            "potato is an invalid date",
          )
        })
      })

      it("shows inbuilt validation messages for pre-existing values", async () => {
        const { container } = render(
          <FilterDatePickerFieldWrapper
            selectedDate={new Date("2022-05-15")}
            disabledDays={[new Date("2022-05-15")]}
          />,
        )
        await waitForI18nContent()

        const dateErrorContainer = container.querySelector(dateErrorId)
        expect(dateErrorContainer).toHaveTextContent(
          "15/05/2022 is not available, try another date",
        )
      })
    })

    it("does not call onDateSubmit when the input value is invalid", async () => {
      const { getByLabelText } = render(<FilterDatePickerFieldWrapper />)
      await waitForI18nContent()

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
        />,
      )

      const dateErrorContainer = container.querySelector(dateErrorId)

      await waitFor(() => {
        expect(dateErrorContainer).toHaveTextContent(
          "Invalid Date is an invalid date",
        )
      })

      const targetMonth = screen.getByRole("grid", { name: "May 2022" })
      const targetDay = within(targetMonth).getByRole("gridcell", {
        name: "12",
      })
      await user.click(targetDay)

      await waitFor(() => {
        expect(dateErrorContainer).not.toBeInTheDocument()
      })
    })
  })
})
