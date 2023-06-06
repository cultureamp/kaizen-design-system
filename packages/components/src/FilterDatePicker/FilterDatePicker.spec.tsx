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
      label="Date"
      selectedDate={selectedValue}
      onDateChange={setSelectedValue}
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
        name: "Date : 1 May 2022",
      })
      expect(filterButton).toBeVisible()
    })

    it("should show the calendar when the filter button is clicked", async () => {
      render(<FilterDatePickerWrapper defaultMonth={new Date("2022-05-01")} />)
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()

      const filterButton = screen.getByRole("button", {
        name: "Date",
      })
      await user.click(filterButton)
      await waitFor(() => {
        expect(screen.getByText("May 2022")).toBeVisible()
      })
    })
  })

  it("updates the selected value in the trigger button when typing a date", async () => {
    const { getByRole, getByLabelText } = render(
      <FilterDatePickerWrapper selectedDate={new Date("06-06-2023")} />
    )
    const triggerButton = getByRole("button", {
      name: "Drank : 6 Jun 2023",
    })

    await user.click(triggerButton)

    await waitFor(() => {
      const dialog = getByRole("dialog")
      expect(dialog).toBeInTheDocument()
    })

    const inputDate = getByLabelText("Date")
    await user.clear(inputDate)
    await user.type(inputDate, "07/06/2023")
    // TODO: note that this should work without having to trigger a tab. update this test when fixed.
    await user.tab()
    await user.click(document.body)

    await waitFor(() => {
      expect(
        getByRole("button", { name: "Drank : 7 Jun 2023" })
      ).toBeInTheDocument()
    })
  })
})
