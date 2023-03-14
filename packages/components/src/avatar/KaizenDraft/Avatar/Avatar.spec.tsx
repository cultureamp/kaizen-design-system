import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import { Avatar } from "./Avatar"

describe("<Avatar />", () => {
  // there is an issue with react-textfit that is only flagged in a test suite
  // this solution silences that specific case https://github.com/malte-wessel/react-textfit/issues/35
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => "")
  })

  it("renders user initials if the image link is broken", () => {
    render(<Avatar fullName="John Doe" avatarSrc="broken" />)
    fireEvent.error(screen.getByRole("img"))
    screen.getByText("JD")
  })

  it("renders an svg icon if user initials are not provided and image is broken", () => {
    render(<Avatar avatarSrc="broken" />)
    fireEvent.error(screen.getByRole("img"))
    expect(document.querySelector("svg.icon")).toBeTruthy()
  })

  describe("fullName provided contains more than two names", () => {
    it("renders the initials for each name", () => {
      render(<Avatar size="large" fullName="Jane With A Very Long Name" />)
      screen.getByText("JWAVLN")
    })
  })
})
