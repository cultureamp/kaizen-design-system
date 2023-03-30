import React, { useState, FocusEvent } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { DateRange } from "@kaizen/date-picker/src/types"
import { FilterDateRangePickerField, FilterDateRangePickerFieldProps } from "."

const FilterDateRangePickerFieldWrapper = ({
  selectedRange,
  ...restProps
}: Partial<FilterDateRangePickerFieldProps>): JSX.Element => {
  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >(selectedRange)

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

describe("<FilterDateRangePickerField />", () => {
  describe("Inputs", () => {
    it("should have empty inputs when a date range is not provided", () => {
      render(<FilterDateRangePickerFieldWrapper />)

      const inputRangeStart = screen.getByLabelText("Date from")
      const inputRangeEnd = screen.getByLabelText("Date to")
      expect(inputRangeStart).toHaveValue("")
      expect(inputRangeEnd).toHaveValue("")
    })

    it("should pre-fill the inputs when date range is provided", () => {
      render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("2022-05-01"),
            to: new Date("2022-05-22"),
          }}
        />
      )

      const inputRangeStart = screen.getByLabelText("Date from")
      const inputRangeEnd = screen.getByLabelText("Date to")
      expect(inputRangeStart).toHaveValue("1 May 2022")
      expect(inputRangeEnd).toHaveValue("22 May 2022")
    })

    it("allows customising the input labels", () => {
      render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("2022-05-01"),
            to: new Date("2022-05-22"),
          }}
          inputRangeStartProps={{ labelText: "Start date" }}
          inputRangeEndProps={{ labelText: "End date" }}
        />
      )

      const inputRangeStart = screen.getByLabelText("Start date")
      const inputRangeEnd = screen.getByLabelText("End date")
      expect(inputRangeStart).toHaveValue("1 May 2022")
      expect(inputRangeEnd).toHaveValue("22 May 2022")
    })

    describe("onBlur", () => {
      it("updates start date input and calendar values correctly on blur", async () => {
        const rangeStartOnBlur = jest.fn<void, [FocusEvent]>()
        const rangeEndOnBlur = jest.fn<void, [FocusEvent]>()

        render(
          <FilterDateRangePickerFieldWrapper
            selectedRange={{
              from: new Date("2022-05-02"),
              to: new Date("2022-05-22"),
            }}
            inputRangeStartProps={{ onBlur: rangeStartOnBlur }}
            inputRangeEndProps={{ onBlur: rangeEndOnBlur }}
          />
        )

        const inputRangeStart = screen.getByLabelText("Date from")
        const inputRangeEnd = screen.getByLabelText("Date to")
        expect(inputRangeStart).toHaveValue("2 May 2022")
        expect(inputRangeEnd).toHaveValue("22 May 2022")

        const targetDay = screen.getByRole("button", {
          name: "1st May (Sunday)",
        })
        expect(targetDay).not.toHaveAttribute("aria-pressed")

        await userEvent.click(inputRangeStart)

        await waitFor(() => {
          expect(inputRangeStart).toHaveValue("02/05/2022")
        })

        await userEvent.clear(inputRangeStart)
        await userEvent.type(inputRangeStart, "01/05/2022")

        await userEvent.tab({ shift: true })
        // await userEvent.click(document.body)

        await waitFor(() => {
          expect(inputRangeStart).toHaveValue("1 May 2022")
          expect(rangeStartOnBlur).toHaveBeenCalled()
          expect(inputRangeEnd).toHaveValue("22 May 2022")
          expect(rangeEndOnBlur).not.toHaveBeenCalled()
          expect(targetDay).toHaveAttribute("aria-pressed", "true")
        })
      })

      it("updates end date input and calendar values correctly on blur", async () => {
        const rangeStartOnBlur = jest.fn<void, [FocusEvent]>()
        const rangeEndOnBlur = jest.fn<void, [FocusEvent]>()

        render(
          <FilterDateRangePickerFieldWrapper
            selectedRange={{
              from: new Date("2022-05-01"),
              to: new Date("2022-05-22"),
            }}
            inputRangeStartProps={{ onBlur: rangeStartOnBlur }}
            inputRangeEndProps={{ onBlur: rangeEndOnBlur }}
          />
        )

        const inputRangeStart = screen.getByLabelText("Date from")
        const inputRangeEnd = screen.getByLabelText("Date to")
        expect(inputRangeStart).toHaveValue("1 May 2022")
        expect(inputRangeEnd).toHaveValue("22 May 2022")

        const targetDay = screen.getByRole("button", {
          name: "31st May (Tuesday)",
        })
        expect(targetDay).not.toHaveAttribute("aria-pressed")

        await userEvent.tab()
        rangeStartOnBlur.mockClear()

        await userEvent.clear(inputRangeEnd)
        await userEvent.type(inputRangeEnd, "31/05/2022")

        await userEvent.tab()

        await waitFor(() => {
          expect(inputRangeStart).toHaveValue("1 May 2022")
          expect(rangeStartOnBlur).not.toHaveBeenCalled()
          expect(inputRangeEnd).toHaveValue("31 May 2022")
          expect(rangeEndOnBlur).toHaveBeenCalled()
          expect(targetDay).toHaveAttribute("aria-pressed", "true")
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
        />
      )

      const inputRangeStart = screen.getByLabelText("Date from")
      expect(inputRangeStart).toHaveValue("2 May 2022")

      expect(screen.getByText("May 2022")).toBeVisible()
      expect(screen.getByText("June 2022")).toBeVisible()

      await userEvent.clear(inputRangeStart)
      await userEvent.type(inputRangeStart, "19/02/2020")

      await userEvent.tab({ shift: true })

      await waitFor(() => {
        expect(screen.queryByText("May 2022")).not.toBeInTheDocument()
        expect(screen.getByText("February 2020")).toBeVisible()
        expect(screen.getByText("March 2020")).toBeVisible()
      })
    })

    it("resets the input values if cleared from the outside", async () => {
      const Wrapper = (): JSX.Element => {
        const [selectedDateRange, setSelectedDateRange] = useState<
          DateRange | undefined
        >({
          from: new Date("2022-05-01"),
          to: new Date("2022-05-22"),
        })
        return (
          <div>
            <button
              type="button"
              onClick={(): void => setSelectedDateRange(undefined)}
            >
              Clear the filter
            </button>

            <FilterDateRangePickerField
              id="test__filter-date-range-picker"
              label="Dates"
              selectedRange={selectedDateRange}
              onRangeChange={setSelectedDateRange}
              locale="en-AU"
            />
          </div>
        )
      }

      render(<Wrapper />)

      // await openFilter()

      const inputRangeStart = screen.getByLabelText("Date from")
      const inputRangeEnd = screen.getByLabelText("Date to")
      // Input Start is focused when filter is opened
      expect(inputRangeStart).toHaveValue("1 May 2022")
      expect(inputRangeEnd).toHaveValue("22 May 2022")

      await userEvent.keyboard("{Escape}")

      const clearButton = screen.getByRole("button", {
        name: "Clear the filter",
      })

      await userEvent.click(clearButton)

      // await openFilter()

      const inputRangeAfterStart = screen.getByLabelText("Date from")
      const inputRangeAfterEnd = screen.getByLabelText("Date to")
      expect(inputRangeAfterStart).toHaveValue("")
      expect(inputRangeAfterEnd).toHaveValue("")
    }, 10000)
  })

  describe("Calendar", () => {
    it("shows the default month as the start month when there isn't a selected value", async () => {
      render(
        <FilterDateRangePickerFieldWrapper
          defaultMonth={new Date("2022-05-02")}
        />
      )
      // await openFilter()

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
        />
      )
      // await openFilter()

      expect(screen.getByText("May 2022")).toBeVisible()
      expect(screen.getByText("June 2022")).toBeVisible()
    })

    it("updates the range start input when changing the start date", async () => {
      render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("2022-05-15"),
            to: new Date("2022-06-15"),
          }}
        />
      )
      // await openFilter()

      // Remove focus from input range start
      await userEvent.tab()
      const inputRangeStart = screen.getByLabelText("Date from")
      expect(inputRangeStart).toHaveValue("15 May 2022")

      const targetDay = screen.getByRole("button", {
        name: "12th May (Thursday)",
      })
      expect(targetDay).not.toHaveAttribute("aria-pressed")
      await userEvent.click(targetDay)

      await waitFor(() => {
        expect(targetDay).toHaveAttribute("aria-pressed", "true")
        expect(inputRangeStart).toHaveValue("12 May 2022")
      })
    }, 8000)

    it("updates the range end input when changing the end date", async () => {
      render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("2022-05-15"),
            to: new Date("2022-06-15"),
          }}
        />
      )
      // await openFilter()

      const inputRangeEnd = screen.getByLabelText("Date to")
      expect(inputRangeEnd).toHaveValue("15 Jun 2022")

      const targetDay = screen.getByRole("button", {
        name: "23rd June (Thursday)",
      })
      expect(targetDay).not.toHaveAttribute("aria-pressed")
      await userEvent.click(targetDay)

      await waitFor(() => {
        expect(targetDay).toHaveAttribute("aria-pressed", "true")
        expect(inputRangeEnd).toHaveValue("23 Jun 2022")
      })
    })

    it("clears the inputs when clearing the calendar value", async () => {
      render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("2022-05-15"),
            to: new Date("2022-05-22"),
          }}
        />
      )
      // await openFilter()

      const inputRangeStart = screen.getByLabelText("Date from")
      const inputRangeEnd = screen.getByLabelText("Date to")
      // Input Start is focused when filter is opened
      expect(inputRangeStart).toHaveValue("15/05/2022")
      expect(inputRangeEnd).toHaveValue("22 May 2022")

      const firstSelectedDay = screen.getByRole("button", {
        name: "15th May (Sunday)",
      })
      await userEvent.click(firstSelectedDay)

      await waitFor(() => {
        expect(inputRangeStart).toHaveValue("")
        expect(inputRangeEnd).toHaveValue("")
      })
    })
  })

  describe("Validation", () => {
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
          />
        )
        // await openFilter()

        expect(screen.getByText("Start date error message")).toBeVisible()
        expect(screen.getByText("End date caution message")).toBeVisible()
      })
    })

    describe("Inbuilt validation", () => {
      it("shows inbuilt validation messages for start date", async () => {
        render(
          <FilterDateRangePickerFieldWrapper
            inputRangeStartProps={{ labelText: "Start date" }}
          />
        )
        // await openFilter()

        const inputRangeStart = screen.getByLabelText("Start date")

        await userEvent.clear(inputRangeStart)
        await userEvent.type(inputRangeStart, "potato")
        await userEvent.tab({ shift: true })

        await waitFor(() => {
          expect(
            screen.getByText("Start date: potato is an invalid date")
          ).toBeVisible()
        })
      }, 10000)

      it("shows inbuilt validation messages for end date", async () => {
        render(
          <FilterDateRangePickerFieldWrapper
            inputRangeEndProps={{ labelText: "End date" }}
          />
        )
        // await openFilter()

        const inputRangeEnd = screen.getByLabelText("End date")

        await userEvent.clear(inputRangeEnd)
        await userEvent.type(inputRangeEnd, "potato")
        await userEvent.tab({ shift: true })

        await waitFor(() => {
          expect(
            screen.getByText("End date: potato is an invalid date")
          ).toBeVisible()
        })
      }, 10000)

      it("shows inbuilt validation messages for pre-existing values", async () => {
        render(
          <FilterDateRangePickerFieldWrapper
            selectedRange={{
              from: new Date("2022-05-15"),
              to: new Date("2022-05-23"),
            }}
            disabledDates={[new Date("2022-05-15"), new Date("2022-05-23")]}
          />
        )
        // await openFilter()

        expect(
          screen.getByText(
            "Date from: 15/05/2022 is not available, try another date"
          )
        ).toBeVisible()
        expect(
          screen.getByText(
            "Date to: 23/05/2022 is not available, try another date"
          )
        ).toBeVisible()
      })

      describe("Validates end date is not before start date", () => {
        const invalidDateOrderErrorMessage =
          'Date to: Cannot be earlier than the selection in "Date from"'

        it("shows error on updating end date input to be before start date", async () => {
          render(
            <FilterDateRangePickerFieldWrapper
              selectedRange={{
                from: new Date("2022-05-15"),
              }}
            />
          )
          // await openFilter()

          const inputRangeEnd = screen.getByLabelText("Date to")

          await userEvent.clear(inputRangeEnd)
          await userEvent.type(inputRangeEnd, "12/05/2022")
          await userEvent.tab({ shift: true })

          await waitFor(() => {
            expect(screen.getByText(invalidDateOrderErrorMessage)).toBeVisible()
          })
        }, 10000)

        it("removes error on updating start date input to be before end date", async () => {
          render(
            <FilterDateRangePickerFieldWrapper
              selectedRange={{
                from: new Date("2022-05-15"),
                to: new Date("2022-05-22"),
              }}
            />
          )
          // await openFilter()

          const inputRangeEnd = screen.getByLabelText("Date to")

          await userEvent.clear(inputRangeEnd)
          await userEvent.type(inputRangeEnd, "12/05/2022")
          await userEvent.tab({ shift: true })

          await waitFor(() => {
            expect(screen.getByText(invalidDateOrderErrorMessage)).toBeVisible()
            // End date in Calendar is deselected
            expect(
              screen.getAllByRole("button", { pressed: true }).length
            ).toEqual(1)
          })

          const inputRangeStart = screen.getByLabelText("Date from")

          await userEvent.clear(inputRangeStart)
          await userEvent.type(inputRangeStart, "10/05/2022")
          await userEvent.tab()

          await waitFor(() => {
            expect(
              screen.queryByText(invalidDateOrderErrorMessage)
            ).not.toBeInTheDocument()
            // End date in Calendar is re-selected
            expect(
              screen.getAllByRole("button", { pressed: true }).length
            ).toEqual(3)
          })
        }, 10000)

        it("shows error on updating start date input to be after end date", async () => {
          render(
            <FilterDateRangePickerFieldWrapper
              selectedRange={{
                from: new Date("2022-05-15"),
                to: new Date("2022-05-22"),
              }}
            />
          )
          // await openFilter()

          const inputRangeStart = screen.getByLabelText("Date from")

          await userEvent.clear(inputRangeStart)
          await userEvent.type(inputRangeStart, "31/05/2022")
          await userEvent.tab()

          await waitFor(() => {
            expect(screen.getByText(invalidDateOrderErrorMessage)).toBeVisible()
          })
        }, 10000)

        it("shows error if the pre-existing end date is before start date", async () => {
          render(
            <FilterDateRangePickerFieldWrapper
              selectedRange={{
                from: new Date("2022-05-15"),
                to: new Date("2022-05-01"),
              }}
            />
          )
          // await openFilter()

          await waitFor(() => {
            expect(screen.getByText(invalidDateOrderErrorMessage)).toBeVisible()
          })
        }, 10000)
      })
    })

    describe("Combined validation", () => {
      it("shows custom start date validation with inbuilt end date validation", async () => {
        render(
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
          />
        )
        // await openFilter()

        const inputRangeEnd = screen.getByLabelText("Date to")

        await userEvent.clear(inputRangeEnd)
        await userEvent.type(inputRangeEnd, "potato")
        await userEvent.tab({ shift: true })

        await waitFor(() => {
          expect(screen.getByText("Start date error message")).toBeVisible()
          expect(
            screen.getByText("Date to: potato is an invalid date")
          ).toBeVisible()
        })
      }, 10000)

      it("shows custom end date validation with inbuilt start date validation", async () => {
        render(
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
          />
        )
        // await openFilter()

        const inputRangeStart = screen.getByLabelText("Date from")

        await userEvent.clear(inputRangeStart)
        await userEvent.type(inputRangeStart, "potato")
        await userEvent.tab({ shift: true })

        await waitFor(() => {
          expect(screen.getByText("End date error message")).toBeVisible()
          expect(
            screen.getByText("Date from: potato is an invalid date")
          ).toBeVisible()
        })
      }, 10000)
    })

    it("re-validates values when selecting a value using the calendar", async () => {
      render(
        <FilterDateRangePickerFieldWrapper
          selectedRange={{
            from: new Date("2022-05-10"),
            to: new Date("potato"),
          }}
        />
      )
      // await openFilter()

      const errorMessage = "Date to: Invalid Date is an invalid date"

      await waitFor(() => {
        expect(screen.getByText(errorMessage)).toBeVisible()
      })

      const targetDay = screen.getByRole("button", {
        name: "12th May (Thursday)",
      })
      await userEvent.click(targetDay)

      await waitFor(() => {
        expect(screen.queryByText(errorMessage)).not.toBeInTheDocument()
      })
    }, 10000)
  })
})
