import React, { useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TimeField, TimeFieldProps } from "./TimeField"
import { ValueType } from "./types"

const user = userEvent.setup()

const mockOnChange = jest.fn()
const LABEL = "Launch Time Label"

const pressArrowKey =
  (direction: "ArrowUp" | "ArrowDown") =>
  async (element: HTMLElement): Promise<void> => {
    await user.click(element)
    await user.keyboard(`{${direction}}`)
  }

const pressArrowUpKey = pressArrowKey("ArrowUp")
const pressArrowDownKey = pressArrowKey("ArrowDown")

const TimeFieldWrapper = ({
  value: propsValue = null,
  ...customProps
}: Partial<TimeFieldProps>): JSX.Element => {
  const [value, setValue] = useState<ValueType | null>(propsValue)

  return (
    <TimeField
      locale="en-GB"
      id="id"
      label={LABEL}
      value={value}
      onChange={setValue}
      {...customProps}
    />
  )
}

describe("component formats time appropriate to locale", () => {
  it("shows time in a h:mm a format for en-AU locale", () => {
    render(<TimeFieldWrapper locale="en-AU" />)
    // There should be 3 spin buttons - hour, minutes, and period
    expect(screen.getAllByRole("spinbutton")).toHaveLength(3)
  })

  it("shows time in a h:mm A format for en-US", () => {
    render(<TimeFieldWrapper locale="en-US" />)
    expect(screen.getAllByRole("spinbutton")).toHaveLength(3)
  })

  it("shows time in a HH:MM format for en-GB", () => {
    render(<TimeFieldWrapper locale="en-GB" />)
    // There should be 2 spin buttons - hour and minutes
    expect(screen.getAllByRole("spinbutton")).toHaveLength(2)
  })
})

describe("spin button functionality", () => {
  it("changes hour on key press", async () => {
    render(<TimeFieldWrapper />)
    const hourSpinner = screen.getByRole("spinbutton", {
      name: `hour, ${LABEL}`,
    })
    await pressArrowUpKey(hourSpinner)
    await waitFor(() => {
      expect(hourSpinner).toHaveTextContent(/^0$/)
    })

    await pressArrowUpKey(hourSpinner)
    await waitFor(() => {
      expect(hourSpinner).toHaveTextContent(/^1$/)
    })

    await pressArrowUpKey(hourSpinner)
    await waitFor(() => {
      expect(hourSpinner).toHaveTextContent(/^2$/)
    })

    await pressArrowDownKey(hourSpinner)
    await waitFor(() => {
      expect(hourSpinner).toHaveTextContent(/^1$/)
    })
  })

  it("changes minutes on key press", async () => {
    render(<TimeFieldWrapper />)
    const minuteSpinner = screen.getByRole("spinbutton", {
      name: `minute, ${LABEL}`,
    })
    await pressArrowUpKey(minuteSpinner)
    await pressArrowUpKey(minuteSpinner)
    await waitFor(() => {
      expect(minuteSpinner).toHaveTextContent(/^01$/)
    })

    await pressArrowUpKey(minuteSpinner)
    await waitFor(() => {
      expect(minuteSpinner).toHaveTextContent(/^02$/)
    })

    await pressArrowDownKey(minuteSpinner)
    await waitFor(() => {
      expect(minuteSpinner).toHaveTextContent(/^01$/)
    })
  })

  it("changes segments orthogonally", async () => {
    // tests whether changing minute changes hour
    render(<TimeFieldWrapper value={{ hour: 4, minutes: 44 }} />)
    const hourSpinner = screen.getByRole("spinbutton", {
      name: `hour, ${LABEL}`,
    })
    const minuteSpinner = screen.getByRole("spinbutton", {
      name: `minute, ${LABEL}`,
    })
    await pressArrowUpKey(hourSpinner)
    await pressArrowDownKey(minuteSpinner)
    await waitFor(() => {
      expect(hourSpinner).toHaveTextContent(/^5$/)
      expect(minuteSpinner).toHaveTextContent(/^43$/)
    })
  })

  it("allows uers to backspace to remove values", async () => {
    render(<TimeFieldWrapper value={{ hour: 4, minutes: 44 }} />)
    const hourSpinner = screen.getByRole("spinbutton", {
      name: `hour, ${LABEL}`,
    })
    const minuteSpinner = screen.getByRole("spinbutton", {
      name: `minute, ${LABEL}`,
    })
    await user.click(minuteSpinner)
    await user.keyboard("{Backspace}")

    await user.keyboard("{Backspace}")
    await waitFor(() => {
      expect(minuteSpinner).toHaveTextContent(/^--$/)
      expect(hourSpinner).toHaveTextContent(/^4$/)
    })
  })
})

describe("onChange", () => {
  it("returns correct time from 12 hour format display", async () => {
    render(
      <TimeFieldWrapper
        value={{ hour: 16, minutes: 44 }}
        onChange={mockOnChange}
        locale="en-AU"
      />
    )
    const hourSpinner = screen.getByRole("spinbutton", {
      name: `hour, ${LABEL}`,
    })
    expect(hourSpinner).toHaveTextContent("4")

    await pressArrowUpKey(hourSpinner)
    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith({ hour: 17, minutes: 44 })
    })
  })

  it("returns correct time from 24 hour format display", async () => {
    render(
      <TimeFieldWrapper
        value={{ hour: 16, minutes: 44 }}
        onChange={mockOnChange}
        locale="en-GB"
      />
    )
    const hourSpinner = screen.getByRole("spinbutton", {
      name: `hour, ${LABEL}`,
    })
    expect(hourSpinner).toHaveTextContent("16")

    await pressArrowUpKey(hourSpinner)
    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith({ hour: 17, minutes: 44 })
    })
  })
})
