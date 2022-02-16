import { act, render, screen } from "@testing-library/react"
import React from "react"
import userEvent from "@testing-library/user-event"
import { CalendarNav } from "./CalendarNav"
import "@testing-library/jest-dom"

const defaultProps = {
  onPreviousClick: jest.fn(),
  onNextClick: jest.fn(),
}

describe("<CalendarNav />", () => {
  it("calls onPreviousClick and onNextClick when buttons are clicked", async () => {
    render(<CalendarNav {...defaultProps} />)

    const previousButton = screen.getByRole("button", {
      name: "Previous month",
    })

    const nextButton = screen.getByRole("button", {
      name: "Next month",
    })

    await act(async () => {
      previousButton.focus()
      userEvent.click(previousButton)
    })

    expect(defaultProps.onPreviousClick).toBeCalledTimes(1)

    await act(async () => {
      nextButton.focus()
      userEvent.click(nextButton)
    })

    expect(defaultProps.onNextClick).toBeCalledTimes(1)
  })
})
