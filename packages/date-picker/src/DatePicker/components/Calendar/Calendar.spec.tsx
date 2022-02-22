// import { act, render, screen } from "@testing-library/react"
// import React from "react"
// import userEvent from "@testing-library/user-event"
// import { Calendar, CalendarNavProps, CalendarProps } from "./Calendar"
// import "@testing-library/jest-dom"

// const defaultProps: CalendarProps = {
//   handleKeyDown: jest.fn(),
//   handleOnDayChange: jest.fn(),
//   firstDayOfWeek: 1,
//   setPopperElement: jest.fn(),
//   styles: {},
//   attributes: {},
// }

// const navbarProps: CalendarNavProps = {
//   onPreviousClick: jest.fn(),
//   onNextClick: jest.fn(),
// }

// describe("<Calendar />", () => {
//   it("calls onPreviousClick and onNextClick when buttons are clicked", async () => {
//     render(<Calendar {...defaultProps} {...navbarProps} />)

//     const previousButton = screen.getByRole("button", {
//       name: "Previous month",
//     })

//     const nextButton = screen.getByRole("button", {
//       name: "Next month",
//     })

//     await act(async () => {
//       previousButton.focus()
//       userEvent.click(previousButton)
//     })

//     expect(navbarProps.onPreviousClick).toBeCalledTimes(1)

//     await act(async () => {
//       nextButton.focus()
//       userEvent.click(nextButton)
//     })

//     expect(navbarProps.onNextClick).toBeCalledTimes(1)
//   })
// })
