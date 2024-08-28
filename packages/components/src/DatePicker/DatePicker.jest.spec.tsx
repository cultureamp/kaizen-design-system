import React, { useEffect, useState } from "react"
import { screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { renderWithIntl } from "~tests"
import { DatePicker } from "./DatePicker"
import { DatePickerProps } from "."
const user = userEvent.setup()

const DatePickerWrapper = ({
  selectedDay,
  ...restProps
}: Partial<DatePickerProps>): JSX.Element => {
  const [selectedDate, setValueDate] = useState<Date | undefined>(selectedDay)

  return (
    <DatePicker
      id="test__date-picker"
      labelText="Input label"
      onDayChange={setValueDate}
      selectedDay={selectedDate}
      locale="en-US"
      {...restProps}
    />
  )
}

describe("<DatePicker />", () => {
  it("should not show the calendar initially", async () => {
    renderWithIntl(<DatePickerWrapper />)
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
  })

  it("should have an empty input value when a date is not provided", async () => {
    renderWithIntl(<DatePickerWrapper />)
    await waitFor(() => {
      const input = screen.getByLabelText("Input label", { selector: "input" })
      expect(input).toHaveValue("")
    })
  })

  it("should pre-fill the input when an initial date is provided", async () => {
    renderWithIntl(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)
    await waitFor(() => {
      expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()
    })
  })

  it("re-renders the displayed input when an selectedDay is updated after initial render", async () => {
    const DelayedSelectedDate = (): JSX.Element => {
      const [selectedDate, setValueDate] = useState<Date | undefined>(undefined)

      // mocks a slow server response
      useEffect(() => {
        setTimeout(() => setValueDate(new Date("2022-03-01")), 1000)
      }, [])

      return (
        <DatePicker
          id="test__date-picker"
          labelText="Input label"
          onDayChange={setValueDate}
          selectedDay={selectedDate}
          locale="en-US"
        />
      )
    }

    renderWithIntl(<DelayedSelectedDate />)
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toHaveValue("")
    await waitFor(() => {
      expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()
    })
  })

  it("allows you to tab through input, button and calendar", async () => {
    renderWithIntl(<DatePickerWrapper />)
    const input = screen.getByLabelText("Input label", { selector: "input" })

    await user.tab()
    await waitFor(() => {
      expect(input).toHaveFocus()
    })

    await user.keyboard("{arrowDown}")

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeVisible()
    })

    await user.tab()
    await waitFor(() => {
      expect(input).toHaveFocus()
    })

    await user.tab()
    await waitFor(() => {
      const calendarButton = screen.getByRole("button", { name: "Choose date" })
      expect(calendarButton).toHaveFocus()
    })

    await user.tab()
    await waitFor(() => {
      const arrowButton = screen.getByRole("button", {
        name: "Go to previous month",
      })
      expect(arrowButton).toHaveFocus()
    })
  }, 6000)

  it("should validate and close the calendar when the user presses the Enter key while focus is in the input", async () => {
    renderWithIntl(
      <DatePickerWrapper disabledDates={[new Date("2022-05-01")]} />
    )

    const input = screen.getByLabelText("Input label", { selector: "input" })
    await user.click(input)

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeVisible()
    })

    await user.type(input, "05/01/2022")
    await user.keyboard("{Enter}")

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      expect(input).toHaveFocus()
      expect(
        screen.getByText("05/01/2022 is not available, try another date")
      ).toBeVisible()
    })
  })
})

describe("<DatePicker /> - Focus element", () => {
  describe("Click on input", () => {
    beforeEach(async () => {
      renderWithIntl(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

      const input = screen.getByLabelText("Input label", { selector: "input" })
      await user.click(input)
    })

    it("keeps focus on input", async () => {
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).toBeVisible()
      })

      const input = screen.getByLabelText("Input label", { selector: "input" })
      expect(input).toHaveFocus()
    })

    it("keeps focus on input when the user escapes from the calendar", async () => {
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).toBeVisible()
      })

      await user.keyboard("{Escape}")

      const input = screen.getByLabelText("Input label", { selector: "input" })
      expect(input).toHaveFocus()
    })

    it("returns focus to the input when the user clicks a valid day on the calendar", async () => {
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).toBeVisible()
      })

      const month = screen.getByRole("grid", { name: "March 2022" })
      const dateToSelect = within(month).getByRole("gridcell", { name: "6" })
      await user.click(dateToSelect)

      const input = screen.getByLabelText("Input label", { selector: "input" })
      expect(input).toHaveFocus()
    })
  })

  describe("Keydown arrow on input", () => {
    it("shows focus within the calendar", async () => {
      renderWithIntl(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

      const input = screen.getByLabelText("Input label", { selector: "input" })
      await user.tab()
      await waitFor(() => {
        expect(input).toHaveFocus()
      })

      await user.keyboard("{ArrowDown}")
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).toBeVisible()
      })

      const month = screen.getByRole("grid", { name: "March 2022" })
      const selectedDate = within(month).getByRole("gridcell", { name: "1" })
      expect(selectedDate).toHaveFocus()
    })

    it("returns focus to the input when the user escapes from the calendar", async () => {
      renderWithIntl(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

      const input = screen.getByLabelText("Input label", { selector: "input" })
      await user.tab()
      await waitFor(() => {
        expect(input).toHaveFocus()
      })

      await user.keyboard("{ArrowDown}")
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).toBeVisible()
      })

      await user.keyboard("{Escape}")
      await waitFor(() => {
        expect(input).toHaveFocus()
      })
    })
  })

  describe("Click on calendar button", () => {
    beforeEach(async () => {
      renderWithIntl(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

      const calendarButton = screen.getByRole("button", {
        name: "Change date, Mar 1, 2022",
      })
      await user.click(calendarButton)
    })

    it("shows focus within the calendar", async () => {
      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeVisible()
      })

      const month = screen.getByRole("grid", { name: "March 2022" })
      const selectedDate = within(month).getByRole("gridcell", { name: "1" })
      expect(selectedDate).toHaveFocus()
    })

    it("returns focus to the calendar button when the user escapes from the calendar", async () => {
      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeVisible()
      })

      await user.keyboard("{Escape}")

      const calendarButton = screen.getByRole("button", {
        name: "Change date, Mar 1, 2022",
      })
      expect(calendarButton).toHaveFocus()
    })
  })

  describe("Keydown enter on calendar button", () => {
    let calendarButton: HTMLElement

    beforeEach(async () => {
      renderWithIntl(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

      calendarButton = screen.getByRole("button", {
        name: "Change date, Mar 1, 2022",
      })

      await user.tab()
      await user.tab()
    })

    it("shows focus within the calendar", async () => {
      await waitFor(() => {
        expect(calendarButton).toHaveFocus()
      })

      await user.keyboard("{Enter}")

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeVisible()
      })

      const month = screen.getByRole("grid", { name: "March 2022" })
      const selectedDate = within(month).getByRole("gridcell", { name: "1" })
      expect(selectedDate).toHaveFocus()
    })

    it("returns focus to the input when the user escapes from the calendar", async () => {
      await waitFor(() => {
        expect(calendarButton).toHaveFocus()
      })

      await user.keyboard("{Enter}")

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeVisible()
      })

      await user.keyboard("{Escape}")
      await waitFor(() => {
        expect(calendarButton).toHaveFocus()
      })
    })
  })
})

describe("<DatePicker /> - Input format", () => {
  it("formats values when focus is on the input", async () => {
    renderWithIntl(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

    const input = screen.getByLabelText("Input label", { selector: "input" })
    expect(input).toHaveValue("Mar 1, 2022")

    await user.click(input)

    await waitFor(() => {
      expect(input).toHaveValue("03/01/2022")
    })
  })

  it("formats values when the input loses focus - onBlur", async () => {
    renderWithIntl(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

    const input = screen.getByLabelText("Input label", { selector: "input" })
    expect(input).toHaveValue("Mar 1, 2022")

    await user.click(input)

    await waitFor(() => {
      expect(input).toHaveValue("03/01/2022")
    })

    await user.tab()

    await waitFor(() => {
      expect(input).toHaveValue("Mar 1, 2022")
    })
  })
})

describe("<DatePicker /> - Validation", () => {
  describe("Custom Validation", () => {
    it("displays custom validation message when provided (overrides inbuilt validation)", async () => {
      renderWithIntl(
        <DatePickerWrapper
          status="error"
          validationMessage="Custom validation message"
          selectedDay={new Date("potato")}
        />
      )

      await waitFor(() => {
        const icon = screen.getByLabelText("error message")
        expect(icon).toBeInTheDocument()
      })

      expect(screen.getByText("Custom validation message")).toBeVisible()
      expect(screen.queryByText("Date is invalid")).not.toBeInTheDocument()
    })

    it("does not show inbuilt validation message when onValidate is set", async () => {
      const onValidate = jest.fn()
      renderWithIntl(
        <DatePickerWrapper
          selectedDay={new Date("potato")}
          onValidate={onValidate}
        />
      )

      await waitFor(() => {
        expect(
          screen.getByLabelText("Input label", { selector: "input" })
        ).toBeVisible()
      })

      expect(screen.queryByTitle("error message")).not.toBeInTheDocument()
      expect(screen.queryByText("Date is invalid")).not.toBeInTheDocument()
    })

    it("triggers validation when initial selected date is invalid", async () => {
      const onValidate = jest.fn()
      renderWithIntl(
        <DatePickerWrapper
          onValidate={onValidate}
          selectedDay={new Date("potato")}
        />
      )
      await waitFor(() => {
        expect(onValidate).toHaveBeenCalledTimes(1)
      })
    })

    it("triggers validation when initial selected date is disabled", async () => {
      const onValidate = jest.fn()
      renderWithIntl(
        <DatePickerWrapper
          onValidate={onValidate}
          disabledBefore={new Date("2022-05-15")}
          selectedDay={new Date("2022-05-05")}
        />
      )
      await waitFor(() => {
        expect(onValidate).toHaveBeenCalledTimes(1)
      })
    })

    it("does not trigger validation when initial selected date is empty", async () => {
      const onValidate = jest.fn()
      renderWithIntl(
        <DatePickerWrapper onValidate={onValidate} selectedDay={undefined} />
      )
      await waitFor(() => {
        expect(onValidate).not.toHaveBeenCalled()
      })
    })

    it("does not trigger validation when initial selected date is valid", async () => {
      const onValidate = jest.fn()
      renderWithIntl(
        <DatePickerWrapper
          onValidate={onValidate}
          selectedDay={new Date("2022-05-05")}
        />
      )
      await waitFor(() => {
        expect(onValidate).not.toHaveBeenCalled()
      })
    })

    it("triggers validation when selected date is updated to invalid", async () => {
      const onValidate = jest.fn()
      renderWithIntl(
        <DatePickerWrapper
          onValidate={onValidate}
          defaultMonth={new Date("2022-03-01")}
        />
      )
      const input = screen.getByLabelText("Input label", { selector: "input" })
      await user.click(input)
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).toBeVisible()
      })

      const month = screen.getByRole("grid", { name: "March 2022" })
      const dateToSelect = within(month).getByRole("gridcell", { name: "6" })
      await user.click(dateToSelect)
      await waitFor(() => {
        expect(onValidate).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe("Inbuilt Validation", () => {
    it("displays error message when selected day is invalid", async () => {
      renderWithIntl(<DatePickerWrapper selectedDay={new Date("potato")} />)

      await waitFor(() => {
        const icon = screen.getByLabelText("error message")
        expect(screen.getByText("Date is invalid")).toBeVisible()
        expect(icon).toBeInTheDocument()
      })
    })

    it("displays error message when selected day is disabled", async () => {
      renderWithIntl(
        <DatePickerWrapper
          disabledBefore={new Date("2022-05-15")}
          selectedDay={new Date("2022-05-05")}
        />
      )

      await waitFor(() => {
        expect(
          screen.getByText("05/05/2022 is not available, try another date")
        ).toBeVisible()
      })
    })

    it("displays error message when input date is invalid", async () => {
      renderWithIntl(<DatePickerWrapper />)

      const input = screen.getByLabelText("Input label", { selector: "input" })
      await user.type(input, "05/05/2022Blah")

      await user.tab()

      await waitFor(() => {
        expect(
          screen.getByText("05/05/2022Blah is an invalid date")
        ).toBeVisible()
      })
    })

    it("displays error message when input date is disabled", async () => {
      renderWithIntl(
        <DatePickerWrapper disabledBefore={new Date("2022-05-15")} />
      )

      const input = screen.getByLabelText("Input label", { selector: "input" })
      await user.type(input, "05/05/2022")

      await user.tab()

      await waitFor(() => {
        expect(
          screen.getByText("05/05/2022 is not available, try another date")
        ).toBeVisible()
      })
    })
  })
})
