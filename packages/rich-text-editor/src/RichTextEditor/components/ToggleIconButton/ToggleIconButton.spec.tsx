import React, { useState } from "react"
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import { ToggleIconButton } from "./"
import "@testing-library/jest-dom"

const ExampleToggleIconButton = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <ToggleIconButton
      icon={boldIcon}
      label="Bold"
      isActive={isActive}
      onClick={() => setIsActive(!isActive)}
    />
  )
}

it("toggles pressed/active on press", () => {
  render(<ExampleToggleIconButton />)
  const button = screen.getByRole("button")

  fireEvent.click(button)
  expect(button.getAttribute("aria-pressed")).toBe("true")

  fireEvent.click(button)
  expect(button.getAttribute("aria-pressed")).toBe("false")
})

describe("shows and hides a tooltip with the label provided", () => {
  it("on focus/blur", async () => {
    render(<ExampleToggleIconButton />)
    const button = screen.getByRole("button")

    fireEvent.focus(button)
    await waitFor(() => screen.getByRole("tooltip", { name: "Bold" }))

    // TODO: Check that the tooltip disappears.
    // For some reason it gets stuck in the 'animate out' stage in this environment
    // fireEvent.blur(button)
    // await waitForElementToBeRemoved(() => screen.getByRole("tooltip", { name: "Bold" }))
  })

  it("on mouseOver/mouseLeave", async () => {
    render(<ExampleToggleIconButton />)
    const button = screen.getByRole("button")

    fireEvent.mouseOver(button)
    await waitFor(() => screen.getByRole("tooltip", { name: "Bold" }))

    fireEvent.mouseLeave(button)
    await waitForElementToBeRemoved(() =>
      screen.getByRole("tooltip", { name: "Bold" })
    )
  })
})
