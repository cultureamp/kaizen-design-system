import React from "react"
import { render, screen } from "@testing-library/react"
import { TextAreaField } from "./"

it("renders the label", () => {
  render(<TextAreaField id="reply" labelText="Text area label" />)
  expect(screen.getByText("Text area label")).toBeTruthy()
})

it("renders a description when provided", () => {
  render(
    <TextAreaField
      id="reply"
      labelText="Your reply"
      description="Your reply will only be seen by you"
    />
  )

  expect(screen.getByText("Your reply will only be seen by you")).toBeTruthy()
})
