import React, { useState } from "react"
import { screen, waitFor, within, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"
import { DateRange } from "~components/Calendar"
import { FilterDateRangePickerField, FilterDateRangePickerFieldProps } from "."

const user = userEvent.setup()

const FilterDateRangePickerFieldWrapper = ({
  selectedRange,
  ...restProps
}: Partial<FilterDateRangePickerFieldProps>): JSX.Element => {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>(selectedRange)

  return (
    <FilterDateRangePickerField
      id="test__filter-date-range-picker"
      label="Dates"
      selectedRange={selectedDateRange}
      onRangeChange={setSelectedDateRange}
      locale="en-AU"
      {...restProps}
    />
  )
}

const waitForI18nContent = async (): Promise<void> => {
  await waitFor(() => {
    expect(screen.getByLabelText("Date from")).toBeVisible()
  })
}

describe("<FilterDateRangePickerField />", () => {
  describe("Inputs", () => {
    it("has empty inputs when a date range is not provided", async () => {
      render(<FilterDateRangePickerFieldWrapper />)
      await waitForI18nContent()

      const inputStartDate = screen.getByLabelText("Date from")
      const inputEndDate = screen.getByLabelText("Date to")
      expect(inputStartDate).toHaveValue("")
      expect(inputEndDate).toHaveValue("")
    })

    it("pre-fills the inputs when date range is provided", async () => {
      render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("2022-05-01"),
            to: new Date("2022-05-22"),
          }}
        />,
      )
      await waitForI18nContent()

      const inputStartDate = screen.getByLabelText("Date from")
      const inputEndDate = screen.getByLabelText("Date to")
      expect(inputStartDate).toHaveValue("1 May 2022")
      expect(inputEndDate).toHaveValue("22 May 2022")
    })

    it("allows customising the input labels", async () => {
      render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("2022-05-01"),
            to: new Date("2022-05-22"),
          }}
          inputStartDateProps={{ labelText: "Start date" }}
          inputEndDateProps={{ labelText: "End date" }}
        />,
      )

      await waitFor(() => {
        const inputStartDate = screen.getByLabelText("Start date")
        const inputEndDate = screen.getByLabelText("End date")
        expect(inputStartDate).toHaveValue("1 May 2022")
        expect(inputEndDate).toHaveValue("22 May 2022")
      })
    })

    describe("onBlur", () => {
      it("updates start date input and calendar values correctly on blur", async () => {
        const startDateOnBlur = vi.fn()
        const endDateOnBlur = vi.fn()

        render(
          <FilterDateRangePickerFieldWrapper
            selectedRange={{
              from: new Date("2022-05-02"),
              to: new Date("2022-05-22"),
            }}
            inputStartDateProps={{ onBlur: startDateOnBlur }}
            inputEndDateProps={{ onBlur: endDateOnBlur }}
          />,
        )
        await waitForI18nContent()

        const inputStartDate = screen.getByLabelText("Date from")
        const inputEndDate = screen.getByLabelText("Date to")
        expect(inputStartDate).toHaveValue("2 May 2022")
        expect(inputEndDate).toHaveValue("22 May 2022")

        const targetMonth = screen.getByRole("grid", { name: "May 2022" })
        const targetDay = within(targetMonth).getByRole("gridcell", {
          name: "1",
        })
        expect(targetDay).not.toHaveAttribute("aria-selected")

        await user.click(inputStartDate)
        await user.clear(inputStartDate)
        await user.type(inputStartDate, "01/05/2022")

        await user.click(document.body)

        await waitFor(() => {
          expect(inputStartDate).toHaveValue("1 May 2022")
          expect(startDateOnBlur).toHaveBeenCalled()
          expect(inputEndDate).toHaveValue("22 May 2022")
          expect(endDateOnBlur).not.toHaveBeenCalled()
          expect(targetDay).toHaveAttribute("aria-selected", "true")
        })
      })

      it("updates end date input and calendar values correctly on blur", async () => {
        const startDateOnBlur = vi.fn()
        const endDateOnBlur = vi.fn()

        render(
          <FilterDateRangePickerFieldWrapper
            selectedRange={{
              from: new Date("2022-05-01"),
              to: new Date("2022-05-22"),
            }}
            inputStartDateProps={{ onBlur: startDateOnBlur }}
            inputEndDateProps={{ onBlur: endDateOnBlur }}
          />,
        )
        await waitForI18nContent()

        const inputStartDate = screen.getByLabelText("Date from")
        const inputEndDate = screen.getByLabelText("Date to")
        expect(inputStartDate).toHaveValue("1 May 2022")
        expect(inputEndDate).toHaveValue("22 May 2022")

        const targetMonth = screen.getByRole("grid", { name: "May 2022" })
        const targetDay = within(targetMonth).getByRole("gridcell", {
          name: "31",
        })
        expect(targetDay).not.toHaveAttribute("aria-selected")

        await user.click(inputEndDate)
        await user.clear(inputEndDate)
        await user.type(inputEndDate, "31/05/2022")

        await user.click(document.body)

        await waitFor(() => {
          expect(inputStartDate).toHaveValue("1 May 2022")
          expect(startDateOnBlur).not.toHaveBeenCalled()
          expect(inputEndDate).toHaveValue("31 May 2022")
          expect(endDateOnBlur).toHaveBeenCalled()
          expect(targetDay).toHaveAttribute("aria-selected", "true")
        })
      })
    })

    it("updates the calendar month to match the new start date input", async () => {
      render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("2022-05-02"),
            to: new Date("2022-12-17"),
          }}
        />,
      )
      await waitForI18nContent()

      const inputStartDate = screen.getByLabelText("Date from")
      expect(inputStartDate).toHaveValue("2 May 2022")

      expect(screen.getByText("May 2022")).toBeVisible()
      expect(screen.getByText("June 2022")).toBeVisible()

      await user.clear(inputStartDate)
      await user.type(inputStartDate, "19/02/2020")

      await user.tab({ shift: true })

      await waitFor(() => {
        expect(screen.queryByText("May 2022")).not.toBeInTheDocument()
        expect(screen.getByText("February 2020")).toBeVisible()
        expect(screen.getByText("March 2020")).toBeVisible()
      })
    })
  })

  describe("Calendar", () => {
    it("shows the default month as the start month when there isn't a selected value", async () => {
      render(<FilterDateRangePickerFieldWrapper defaultMonth={new Date("2022-05-02")} />)
      await waitForI18nContent()
      expect(screen.getByText("May 2022")).toBeVisible()
      expect(screen.getByText("June 2022")).toBeVisible()
    })

    it("shows the selected start date month as the start month when provided", async () => {
      render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("2022-05-01"),
            to: new Date("2022-12-17"),
          }}
        />,
      )
      await waitForI18nContent()
      expect(screen.getByText("May 2022")).toBeVisible()
      expect(screen.getByText("June 2022")).toBeVisible()
    })

    it("shows the current month as the start month when selected start date is invalid", async () => {
      render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("potato"),
          }}
        />,
      )
      await waitForI18nContent()

      const currentMonth = new Date().toLocaleDateString("en-AU", {
        month: "long",
        year: "numeric",
      })
      expect(screen.getByText(currentMonth)).toBeVisible()
    })

    it("updates the range start input when changing the start date", async () => {
      render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("2022-05-15"),
            to: new Date("2022-06-15"),
          }}
        />,
      )
      await waitForI18nContent()

      const inputStartDate = screen.getByLabelText("Date from")
      expect(inputStartDate).toHaveValue("15 May 2022")

      const targetMonth = screen.getByRole("grid", { name: "May 2022" })
      const targetDay = within(targetMonth).getByRole("gridcell", {
        name: "12",
      })
      expect(targetDay).not.toHaveAttribute("aria-selected")
      await user.click(targetDay)

      await waitFor(() => {
        expect(targetDay).toHaveAttribute("aria-selected", "true")
        expect(inputStartDate).toHaveValue("12 May 2022")
      })
    })

    it("updates the range end input when changing the end date", async () => {
      render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("2022-05-15"),
            to: new Date("2022-06-15"),
          }}
        />,
      )
      await waitForI18nContent()

      const inputEndDate = screen.getByLabelText("Date to")
      expect(inputEndDate).toHaveValue("15 Jun 2022")

      const targetMonth = screen.getByRole("grid", { name: "June 2022" })
      const targetDay = within(targetMonth).getByRole("gridcell", {
        name: "23",
      })
      expect(targetDay).not.toHaveAttribute("aria-selected")
      await user.click(targetDay)

      await waitFor(() => {
        expect(targetDay).toHaveAttribute("aria-selected", "true")
        expect(inputEndDate).toHaveValue("23 Jun 2022")
      })
    })

    it("clears the inputs when clearing the calendar value", async () => {
      render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("2022-05-15"),
            to: new Date("2022-05-22"),
          }}
        />,
      )
      await waitForI18nContent()

      const inputStartDate = screen.getByLabelText("Date from")
      const inputEndDate = screen.getByLabelText("Date to")
      expect(inputStartDate).toHaveValue("15 May 2022")
      expect(inputEndDate).toHaveValue("22 May 2022")

      const targetMonth = screen.getByRole("grid", { name: "May 2022" })
      const firstSelectedDay = within(targetMonth).getByRole("gridcell", {
        name: "15",
      })
      await user.click(firstSelectedDay)

      await waitFor(() => {
        expect(inputStartDate).toHaveValue("")
        expect(inputEndDate).toHaveValue("")
      })
    })
  })

  describe("Validation", () => {
    const dateStartErrorId = "#test__filter-date-range-picker--input--date-start-error-message"
    const dateEndErrorId = "#test__filter-date-range-picker--input--date-end-error-message"

    describe("Custom validation", () => {
      it("shows validation messages passed in from the consumer", async () => {
        render(
          <FilterDateRangePickerFieldWrapper
            onValidate={{
              dateStart: (): void => undefined,
              dateEnd: (): void => undefined,
            }}
            validationMessage={{
              dateStart: {
                status: "error",
                message: "Start date error message",
              },
              dateEnd: {
                status: "caution",
                message: "End date caution message",
              },
            }}
          />,
        )
        await waitFor(() => {
          expect(screen.getByText("Start date error message")).toBeVisible()
          expect(screen.getByText("End date caution message")).toBeVisible()
        })
      })
    })

    describe("Inbuilt validation", () => {
      it("shows inbuilt validation messages for start date", async () => {
        const { container } = render(
          <FilterDateRangePickerFieldWrapper inputStartDateProps={{ labelText: "Start date" }} />,
        )
        await waitFor(() => {
          expect(screen.getByLabelText("Start date")).toBeVisible()
        })

        const inputStartDate = screen.getByLabelText("Start date")

        await user.clear(inputStartDate)
        await user.type(inputStartDate, "potato")

        await user.click(document.body)

        await waitFor(() => {
          const dateStartErrorContainer = container.querySelector(dateStartErrorId)
          expect(dateStartErrorContainer).toHaveTextContent("Start date:potato is an invalid date")
        })
      })

      it("shows inbuilt validation messages for end date", async () => {
        const { container } = render(
          <FilterDateRangePickerFieldWrapper inputEndDateProps={{ labelText: "End date" }} />,
        )
        await waitForI18nContent()

        const inputEndDate = screen.getByLabelText("End date")

        await user.clear(inputEndDate)
        await user.type(inputEndDate, "potato")

        await user.click(document.body)

        await waitFor(() => {
          const dateEndErrorContainer = container.querySelector(dateEndErrorId)
          expect(dateEndErrorContainer).toHaveTextContent("End date:potato is an invalid date")
        })
      })

      it("shows inbuilt validation messages for pre-existing values", async () => {
        const { container } = render(
          <FilterDateRangePickerFieldWrapper
            selectedRange={{
              from: new Date("2022-05-15"),
              to: new Date("2022-05-23"),
            }}
            disabledDays={[new Date("2022-05-15"), new Date("2022-05-23")]}
          />,
        )
        await waitForI18nContent()

        const dateStartErrorContainer = container.querySelector(dateStartErrorId)
        expect(dateStartErrorContainer).toHaveTextContent(
          "Date from:15/05/2022 is not available, try another date",
        )

        const dateEndErrorContainer = container.querySelector(dateEndErrorId)
        expect(dateEndErrorContainer).toHaveTextContent(
          "Date to:23/05/2022 is not available, try another date",
        )
      })

      describe("Validates end date is not before start date", () => {
        const invalidDateOrderErrorMessage =
          'Date to:Cannot be earlier than the selection in "Date from"'

        it("shows error on updating end date input to be before start date", async () => {
          const { container } = render(
            <FilterDateRangePickerFieldWrapper
              selectedRange={{
                from: new Date("2022-05-15"),
              }}
            />,
          )
          await waitForI18nContent()

          const inputEndDate = screen.getByLabelText("Date to")

          await user.clear(inputEndDate)
          await user.type(inputEndDate, "12/05/2022")

          await user.click(document.body)

          await waitFor(() => {
            const dateEndErrorContainer = container.querySelector(dateEndErrorId)
            expect(dateEndErrorContainer).toHaveTextContent(invalidDateOrderErrorMessage)
          })
        })

        it("removes error on updating start date input to be before end date", async () => {
          const { container } = render(
            <FilterDateRangePickerFieldWrapper
              selectedRange={{
                from: new Date("2022-05-15"),
                to: new Date("2022-05-22"),
              }}
            />,
          )
          await waitForI18nContent()

          const inputEndDate = screen.getByLabelText("Date to")

          await user.clear(inputEndDate)
          await user.type(inputEndDate, "12/05/2022")

          await user.click(document.body)

          const dateEndErrorContainer = container.querySelector(dateEndErrorId)

          await waitFor(() => {
            expect(dateEndErrorContainer).toHaveTextContent(invalidDateOrderErrorMessage)
            // End date in Calendar is deselected
            expect(screen.getAllByRole("gridcell", { selected: true }).length).toEqual(1)
          })

          const inputStartDate = screen.getByLabelText("Date from")

          await user.clear(inputStartDate)
          await user.type(inputStartDate, "10/05/2022")

          await user.click(document.body)

          await waitFor(() => {
            expect(dateEndErrorContainer).not.toBeInTheDocument()
            // End date in Calendar is re-selected
            expect(screen.getAllByRole("gridcell", { selected: true }).length).toEqual(3)
          })
        })

        it("displays only one date when the start date input is set to be before the end date", async () => {
          const { container } = render(
            <FilterDateRangePickerFieldWrapper
              selectedRange={{
                from: new Date("2022-05-15"),
                to: new Date("2022-05-22"),
              }}
            />,
          )
          await waitForI18nContent()

          const inputStartDate = screen.getByLabelText("Date from")

          await user.clear(inputStartDate)
          await user.type(inputStartDate, "22/06/2022")

          await user.click(document.body)

          const dateEndErrorContainer = container.querySelector(dateEndErrorId)

          await waitFor(() => {
            expect(dateEndErrorContainer).toHaveTextContent(invalidDateOrderErrorMessage)
            // End date in Calendar is deselected
            expect(screen.getAllByRole("gridcell", { selected: true }).length).toEqual(1)
          })
        })

        it("shows error on updating start date input to be after end date", async () => {
          const { container } = render(
            <FilterDateRangePickerFieldWrapper
              selectedRange={{
                from: new Date("2022-05-15"),
                to: new Date("2022-05-22"),
              }}
            />,
          )
          await waitForI18nContent()

          const inputStartDate = screen.getByLabelText("Date from")

          await user.clear(inputStartDate)
          await user.type(inputStartDate, "31/05/2022")

          await user.click(document.body)

          await waitFor(() => {
            const dateEndErrorContainer = container.querySelector(dateEndErrorId)
            expect(dateEndErrorContainer).toHaveTextContent(invalidDateOrderErrorMessage)
          })
        })

        it("shows error if the pre-existing end date is before start date", async () => {
          const { container } = render(
            <FilterDateRangePickerFieldWrapper
              selectedRange={{
                from: new Date("2022-05-15"),
                to: new Date("2022-05-01"),
              }}
            />,
          )

          await waitFor(() => {
            const dateEndErrorContainer = container.querySelector(dateEndErrorId)
            expect(dateEndErrorContainer).toHaveTextContent(invalidDateOrderErrorMessage)
          })
        })
      })
    })

    describe("Combined validation", () => {
      it("shows custom start date validation with inbuilt end date validation", async () => {
        const { container } = render(
          <FilterDateRangePickerFieldWrapper
            onValidate={{
              dateStart: (): void => undefined,
            }}
            validationMessage={{
              dateStart: {
                status: "error",
                message: "Start date error message",
              },
            }}
          />,
        )
        await waitForI18nContent()

        const inputEndDate = screen.getByLabelText("Date to")

        await user.clear(inputEndDate)
        await user.type(inputEndDate, "potato")

        await user.click(document.body)

        await waitFor(() => {
          expect(screen.getByText("Start date error message")).toBeVisible()

          const dateEndErrorContainer = container.querySelector(dateEndErrorId)
          expect(dateEndErrorContainer).toHaveTextContent("Date to:potato is an invalid date")
        })
      })

      it("shows custom end date validation with inbuilt start date validation", async () => {
        const { container } = render(
          <FilterDateRangePickerFieldWrapper
            onValidate={{
              dateEnd: (): void => undefined,
            }}
            validationMessage={{
              dateEnd: {
                status: "error",
                message: "End date error message",
              },
            }}
          />,
        )
        await waitForI18nContent()

        const inputStartDate = screen.getByLabelText("Date from")

        await user.clear(inputStartDate)
        await user.type(inputStartDate, "potato")

        await user.click(document.body)

        await waitFor(() => {
          expect(screen.getByText("End date error message")).toBeVisible()

          const dateStartErrorContainer = container.querySelector(dateStartErrorId)
          expect(dateStartErrorContainer).toHaveTextContent("Date from:potato is an invalid date")
        })
      })
    })

    it("re-validates values when selecting a value using the calendar", async () => {
      const { container } = render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("2022-05-10"),
            to: new Date("potato"),
          }}
        />,
      )
      await waitForI18nContent()

      const dateEndErrorContainer = container.querySelector(dateEndErrorId)

      await waitFor(() => {
        expect(dateEndErrorContainer).toHaveTextContent("Date to:Invalid Date is an invalid date")
      })

      const targetMonth = screen.getByRole("grid", { name: "May 2022" })
      const targetDay = within(targetMonth).getByRole("gridcell", {
        name: "12",
      })
      await user.click(targetDay)

      await waitFor(() => {
        expect(dateEndErrorContainer).not.toBeInTheDocument()
      })
    })
  })

  it("only returns a valid date to the onRangeChange function", async () => {
    const onRangeChange = vi.fn()

    const { getByLabelText } = render(
      <FilterDateRangePickerFieldWrapper
        selectedRange={{
          from: new Date("2022-05-10"),
          to: new Date("2022-06-10"),
        }}
        onRangeChange={onRangeChange}
      />,
    )
    await waitForI18nContent()

    onRangeChange.mockClear()

    const inputStartDate = getByLabelText("Date from")

    await user.clear(inputStartDate)
    await user.type(inputStartDate, "10/07/2022")
    await user.tab()

    await waitFor(() => {
      expect(onRangeChange.mock.calls).toEqual([
        [
          {
            from: new Date("2022-07-10"),
            to: undefined,
          },
        ],
      ])
    })

    onRangeChange.mockClear()

    const inputEndDate = getByLabelText("Date to")

    await user.clear(inputEndDate)
    await user.type(inputEndDate, "10/08/2022")
    await user.tab()

    await waitFor(() => {
      expect(onRangeChange.mock.calls).toEqual([
        [
          {
            from: new Date("2022-07-10"),
            to: new Date("2022-08-10"),
          },
        ],
      ])
    })
  })
})
