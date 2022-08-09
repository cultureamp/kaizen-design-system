import React, { useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ValidationResponse } from "../types"
import { DatePicker } from "./DatePicker"
import { DatePickerProps } from "."

const DatePickerWrapper = ({
  selectedDay,
  ...restProps
}: Partial<DatePickerProps>) => {
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
  it("should not show the calendar initially", () => {
    render(<DatePickerWrapper />)
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  it("should have an empty input value when a date is not provided", () => {
    render(<DatePickerWrapper />)
    const input = screen.getByLabelText("Input label")
    expect(input).toHaveValue("")
  })

  it("should pre-fill the input when an initial date is provided", () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)
    expect(screen.getByDisplayValue("Mar 1, 2022")).toBeInTheDocument()
  })

  it("allows you to tab through input, button and calendar", async () => {
    render(<DatePickerWrapper />)
    const input = screen.getByLabelText("Input label")

    userEvent.tab()
    expect(input).toHaveFocus()

    userEvent.keyboard("{arrowDown}")

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeVisible()
    })

    userEvent.tab()
    expect(input).toHaveFocus()

    userEvent.tab()
    const calendarButton = screen.getByRole("button", { name: "Choose date" })
    expect(calendarButton).toHaveFocus()

    userEvent.tab()
    const arrowButton = screen.getByRole("button", {
      name: "Go to previous month",
    })
    expect(arrowButton).toHaveFocus()
  })

  it("should validate and close the calendar when the user presses the Enter key while focus is in the input", async () => {
    render(<DatePickerWrapper disabledDates={[new Date("2022-05-01")]} />)

    expect(
      screen.queryByText("05/01/2022 is not available, try another date")
    ).not.toBeInTheDocument()

    const input = screen.getByLabelText("Input label")
    userEvent.click(input)

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeVisible()
    })

    userEvent.type(input, "05/01/2022")
    userEvent.keyboard("{Enter}")

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    })
    expect(input).toHaveFocus()
    expect(
      screen.getByText("05/01/2022 is not available, try another date")
    ).toBeVisible()
  })
})

describe("<DatePicker /> - Focus element", () => {
  describe("Click on input", () => {
    beforeEach(async () => {
      render(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

      const input = screen.getByLabelText("Input label")
      userEvent.click(input)

      await waitFor(() => {
        expect(screen.queryByRole("dialog")).toBeVisible()
      })
    })

    it("keeps focus on input", () => {
      const input = screen.getByLabelText("Input label")
      expect(input).toHaveFocus()
    })

    it("keeps focus on input when the user escapes from the calendar", () => {
      userEvent.keyboard("{Escape}")

      const input = screen.getByLabelText("Input label")
      expect(input).toHaveFocus()
    })

    it("returns focus to the input when the user clicks a valid day on the calendar", () => {
      const dateToSelect = screen.getByRole("button", {
        name: "6th March (Sunday)",
      })
      userEvent.click(dateToSelect)

      const input = screen.getByLabelText("Input label")
      expect(input).toHaveFocus()
    })
  })

  describe("Keydown arrow on input", () => {
    beforeEach(async () => {
      render(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

      const input = screen.getByLabelText("Input label")
      userEvent.tab()
      expect(input).toHaveFocus()

      userEvent.keyboard("{ArrowDown}")

      await waitFor(() => {
        expect(screen.queryByRole("dialog")).toBeVisible()
      })
    })

    it("shows focus within the calendar", () => {
      const selectedDate = screen.getByRole("button", {
        name: "1st March (Tuesday)",
      })
      expect(selectedDate).toHaveFocus()
    })

    it("returns focus to the input when the user escapes from the calendar", () => {
      userEvent.keyboard("{Escape}")

      const input = screen.getByLabelText("Input label")
      expect(input).toHaveFocus()
    })
  })

  describe("Click on calendar button", () => {
    beforeEach(async () => {
      render(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

      const calendarButton = screen.getByRole("button", {
        name: "Change date, Mar 1, 2022",
      })
      userEvent.click(calendarButton)

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeVisible()
      })
    })

    it("shows focus within the calendar", () => {
      const selectedDate = screen.getByRole("button", {
        name: "1st March (Tuesday)",
      })
      expect(selectedDate).toHaveFocus()
    })

    it("returns focus to the calendar button when the user escapes from the calendar", () => {
      userEvent.keyboard("{Escape}")

      const calendarButton = screen.getByRole("button", {
        name: "Change date, Mar 1, 2022",
      })
      expect(calendarButton).toHaveFocus()
    })
  })

  describe("Keydown enter on calendar button", () => {
    beforeEach(async () => {
      render(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

      const calendarButton = screen.getByRole("button", {
        name: "Change date, Mar 1, 2022",
      })

      userEvent.tab()
      userEvent.tab()

      expect(calendarButton).toHaveFocus()

      userEvent.keyboard("{Enter}")

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeVisible()
      })
    })

    it("shows focus within the calendar", () => {
      const selectedDate = screen.getByRole("button", {
        name: "1st March (Tuesday)",
      })
      expect(selectedDate).toHaveFocus()
    })

    it("returns focus to the input when the user escapes from the calendar", () => {
      userEvent.keyboard("{Escape}")

      const calendarButton = screen.getByRole("button", {
        name: "Change date, Mar 1, 2022",
      })
      expect(calendarButton).toHaveFocus()
    })
  })
})

describe("<DatePicker /> - Input format", () => {
  it("formats values when focus is on the input", async () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

    const input = screen.getByLabelText("Input label")
    expect(input).toHaveValue("Mar 1, 2022")

    userEvent.click(input)

    await waitFor(() => {
      expect(input).toHaveValue("03/01/2022")
    })
  })

  it("formats values when the input loses focus - onBlur", async () => {
    render(<DatePickerWrapper selectedDay={new Date("2022-03-01")} />)

    const input = screen.getByLabelText("Input label")
    expect(input).toHaveValue("Mar 1, 2022")

    userEvent.click(input)

    await waitFor(() => {
      expect(input).toHaveValue("03/01/2022")
    })

    userEvent.tab()

    await waitFor(() => {
      expect(input).toHaveValue("Mar 1, 2022")
    })
  })
})

describe("<DatePicker /> - Validation", () => {
  it("displays the message when status is error", () => {
    render(
      <DatePickerWrapper
        status="error"
        validationMessage="Custom validation message"
      />
    )
    expect(screen.getByTitle("Error message")).toBeInTheDocument()
    expect(screen.getByText("Custom validation message")).toBeVisible()
  })

  describe("Custom Validation", () => {
    it("does not show inbuilt validation message when onValidate is set", () => {
      const onValidate = jest.fn<void, [ValidationResponse]>()
      render(<DatePickerWrapper onValidate={onValidate} />)
      expect(screen.queryByTitle("Error message")).not.toBeInTheDocument()
      expect(
        screen.queryByText("Custom validation message")
      ).not.toBeInTheDocument()
    })

    it("triggers validation when initial selected date is invalid", () => {
      const onValidate = jest.fn<void, [ValidationResponse]>()
      render(
        <DatePickerWrapper
          onValidate={onValidate}
          selectedDay={new Date("potato")}
        />
      )
      expect(onValidate).toBeCalledTimes(1)
    })

    it("triggers validation when initial selected date is disabled", () => {
      const onValidate = jest.fn<void, [ValidationResponse]>()
      render(
        <DatePickerWrapper
          onValidate={onValidate}
          disabledBefore={new Date("2022-05-15")}
          selectedDay={new Date("2022-05-05")}
        />
      )
      expect(onValidate).toBeCalledTimes(1)
    })

    it("does not trigger validation when initial selected date is empty", () => {
      const onValidate = jest.fn<void, [ValidationResponse]>()
      render(
        <DatePickerWrapper onValidate={onValidate} selectedDay={undefined} />
      )
      expect(onValidate).toBeCalledTimes(0)
    })

    it("does not trigger validation when initial selected date is valid", () => {
      const onValidate = jest.fn<void, [ValidationResponse]>()
      render(
        <DatePickerWrapper
          onValidate={onValidate}
          selectedDay={new Date("2022-05-05")}
        />
      )
      expect(onValidate).toBeCalledTimes(0)
    })

    it("triggers validation when selected date is updated to invalid", async () => {
      const onValidate = jest.fn<void, [ValidationResponse]>()
      render(
        <DatePickerWrapper
          onValidate={onValidate}
          defaultMonth={new Date("2022-03-01")}
        />
      )
      const input = screen.getByLabelText("Input label")
      userEvent.click(input)
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).toBeVisible()
      })
      const dateToSelect = screen.getByRole("button", {
        name: "6th March (Sunday)",
      })
      userEvent.click(dateToSelect)
      // @TODO Fix to only run onValidate once
      expect(onValidate).toBeCalledTimes(2)
    })
  })

  describe("Inbuilt Validation", () => {
    it("displays error message when selected day is invalid", () => {
      render(<DatePickerWrapper selectedDay={new Date("potato")} />)
      expect(screen.getByText("Date is invalid")).toBeVisible()
      expect(screen.getByTitle("Error message")).toBeInTheDocument()
    })

    it("displays error message when selected day is disabled", () => {
      render(
        <DatePickerWrapper
          disabledBefore={new Date("2022-05-15")}
          selectedDay={new Date("2022-05-05")}
        />
      )

      expect(
        screen.getByText("05/05/2022 is not available, try another date")
      ).toBeVisible()
    })

    it("displays error message when input date is invalid", async () => {
      render(<DatePickerWrapper />)

      const input = screen.getByLabelText("Input label")
      userEvent.type(input, "05/05/2022Blah")

      userEvent.tab()

      await waitFor(() => {
        expect(
          screen.getByText("05/05/2022Blah is an invalid date")
        ).toBeVisible()
      })
    })

    it("displays error message when input date is disabled", async () => {
      render(<DatePickerWrapper disabledBefore={new Date("2022-05-15")} />)

      const input = screen.getByLabelText("Input label")
      userEvent.type(input, "05/05/2022")

      userEvent.tab()

      await waitFor(() => {
        expect(
          screen.getByText("05/05/2022 is not available, try another date")
        ).toBeVisible()
      })
    })
  })
})
