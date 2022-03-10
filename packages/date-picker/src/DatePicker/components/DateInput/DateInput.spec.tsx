import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

// import { TextField } from "./DateInput"

// const defaultProps = {
//   id: "text-field-test",
//   labelText: "Label",
//   description: "Description text",
// }

// describe("<TextField />", () => {
//   it("renders a description when provided", () => {
//     render(<TextField {...defaultProps} />)
//     screen.getByText("Description text")
//   })
//   it("renders a validation message when provided", () => {
//     render(
//       <TextField
//         {...defaultProps}
//         validationMessage="Error message"
//         status="error"
//       />
//     )
//     screen.getByText("Description text")
//   })
//   it("validation message has the correct type", () => {
//     const { container } = render(
//       <TextField
//         {...defaultProps}
//         validationMessage="Error message"
//         status="error"
//       />
//     )
//     expect(
//       container.querySelector(`#${defaultProps.id}-field-message`)
//     ).toHaveClass("error")
//   })
// })
