import React, { useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FilterButton } from "~components/FilterButton"
import { FilterDatePicker, FilterDatePickerProps } from "."

const user = userEvent.setup()

const FilterDatePickerWrapper = ({
  selectedDate,
  ...restProps
}: Partial<FilterDatePickerProps>): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<Date | undefined>(
    selectedDate
  )

  return (
    <FilterDatePicker
      id="test__filter-date-picker"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      renderTrigger={(triggerProps): JSX.Element => (
        <FilterButton {...triggerProps} />
      )}
      label="Drank"
      selectedDate={selectedValue}
      onDateChange={setSelectedValue}
      defaultMonth={new Date("2022-05-01")}
      locale="en-AU"
      {...restProps}
    />
  )
}

describe("<FilterDatePicker />", () => {
  it("should not show the calendar initially", () => {
    render(<FilterDatePickerWrapper />)
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  describe("Filter button", () => {
    it("should show the selected date in the button", () => {
      render(<FilterDatePickerWrapper selectedDate={new Date("2022-05-01")} />)
      const filterButton = screen.getByRole("button", {
        name: "Drank : 1 May 2022",
      })
      expect(filterButton).toBeVisible()
    })

    it("should show the calendar when the filter button is clicked", async () => {
      render(<FilterDatePickerWrapper />)
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

      const filterButton = screen.getByRole("button", {
        name: "Drank",
      })
      await user.click(filterButton)
      await waitFor(() => {
        expect(screen.getByText("May 2022")).toBeVisible()
      })
    })
  })

  it("closes the popover when a valid date has been submitted via the calendar picker", async () => {
    const { getByRole } = render(<FilterDatePickerWrapper />)
    const triggerButton = getByRole("button", {
      name: "Drank",
    })

    await user.click(triggerButton)

    const dialog = getByRole("dialog")
    await waitFor(() => {
      expect(dialog).toBeInTheDocument()
    })

    const targetDay = screen.getByRole("button", {
      name: "2nd May (Monday)",
    })

    await user.click(targetDay)

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument()
    })
  })

  describe("Text input", () => {
    it("validates the date on blur", async () => {
      const { getByRole, getByLabelText, getByText } = render(
        <FilterDatePickerWrapper />
      )
      const triggerButton = getByRole("button", {
        name: "Drank",
      })

      await user.click(triggerButton)
      const dialog = getByRole("dialog")

      await waitFor(() => {
        expect(dialog).toBeInTheDocument()
      })

      const inputDate = getByLabelText("Date")
      await user.clear(inputDate)
      await user.type(inputDate, "32/13/2022")
      await user.tab()

      await waitFor(() => {
        expect(getByText("32/13/2022 is an invalid date")).toBeInTheDocument()
      })
    })

    describe("Pressing Enter in the text input", () => {
      it("closes the popover when a valid date has been submitted via the text input field", async () => {
        const { getByRole, getByLabelText } = render(
          <FilterDatePickerWrapper />
        )
        const triggerButton = getByRole("button", {
          name: "Drank",
        })

        await user.click(triggerButton)

        const dialog = getByRole("dialog")
        await waitFor(() => {
          expect(dialog).toBeInTheDocument()
        })

        const inputDate = getByLabelText("Date")
        await user.clear(inputDate)
        await user.type(inputDate, "07/06/2022")
        await user.keyboard("{Enter}")

        await waitFor(() => {
          expect(dialog).not.toBeInTheDocument()
        })
      })

      it("does not close the popover when an invalid date has been submitted via the text input field", async () => {
        const { getByRole, getByLabelText, getByText } = render(
          <FilterDatePickerWrapper />
        )
        const triggerButton = getByRole("button", {
          name: "Drank",
        })

        await user.click(triggerButton)
        const dialog = getByRole("dialog")

        await waitFor(() => {
          expect(dialog).toBeInTheDocument()
        })

        const inputDate = getByLabelText("Date")
        await user.clear(inputDate)
        await user.type(inputDate, "32/13/2022")
        await user.keyboard("{Enter}")

        await waitFor(() => {
          expect(getByText("32/13/2022 is an invalid date")).toBeInTheDocument()
        })
      })
    })
  })

  it("does not close the popover when the text input field has been cleared", async () => {
    const { getByRole, getByLabelText, getByText, queryByText } = render(
      <FilterDatePickerWrapper selectedDate={new Date("32/13/2022")} />
    )
    const triggerButton = getByRole("button", {
      name: "Drank : Invalid Date",
    })

    await user.click(triggerButton)
    const dialog = getByRole("dialog")

    await waitFor(() => {
      expect(dialog).toBeInTheDocument()
      expect(getByText("Invalid Date is an invalid date")).toBeInTheDocument()
    })

    const inputDate = getByLabelText("Date")
    await user.clear(inputDate)
    await user.tab()

    await waitFor(() => {
      expect(
        queryByText("Invalid Date is an invalid date")
      ).not.toBeInTheDocument()
      // We are double checking that the popover has not closed
      expect(dialog).toBeInTheDocument()
    })
  })

  it("does not close the popover when there is a selected date and the user navigates months", async () => {
    const { getByRole } = render(
      <FilterDatePickerWrapper selectedDate={new Date("01/01/2022")} />
    )
    const triggerButton = getByRole("button", {
      name: "Drank : 1 Jan 2022",
    })

    await user.click(triggerButton)
    const dialog = getByRole("dialog")

    await waitFor(() => {
      expect(dialog).toBeInTheDocument()
    })

    const navigateMonthsButton = getByRole("button", {
      name: "Go to next month",
    })

    await user.click(navigateMonthsButton)

    await waitFor(() => {
      expect(dialog).toBeInTheDocument()
    })
  })

  it("updates the selected value in the trigger button when typing a date", async () => {
    const { getByRole, getByLabelText } = render(
      <FilterDatePickerWrapper selectedDate={new Date("06-06-2022")} />
    )
    const triggerButton = getByRole("button", {
      name: "Drank : 6 Jun 2022",
    })

    await user.click(triggerButton)

    await waitFor(() => {
      const dialog = getByRole("dialog")
      expect(dialog).toBeInTheDocument()
    })

    const inputDate = getByLabelText("Date")
    await user.clear(inputDate)
    await user.type(inputDate, "07/06/2022")
    // TODO: note that this should work without having to trigger a tab. update this test when fixed.
    await user.tab()
    await user.click(document.body)

    await waitFor(() => {
      expect(
        getByRole("button", { name: "Drank : 7 Jun 2022" })
      ).toBeInTheDocument()
    })
  })
})
