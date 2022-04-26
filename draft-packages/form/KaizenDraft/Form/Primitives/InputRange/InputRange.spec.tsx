import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { InputRange } from "./index"

it("renders value as 5.5 when no default value provided", async () => {
  render(<InputRange id="unique-1" minLabel="Awful" maxLabel="Fantastic" />)

  screen.getByDisplayValue("5.5")
})

it.todo(
  "moves value to 6 after right arrow press, then 5 after left arrow press"
)

it.todo("moves value to 10 after clicking end of slider")

it("shows default value correctly when provided", async () => {
  render(
    <InputRange
      id="unique-2"
      defaultValue={9}
      minLabel="Awful"
      maxLabel="Fantastic"
    />
  )

  screen.getByDisplayValue("9")
})

it("fires onChange after interaction", async () => {
  const onChange = jest.fn()
  render(
    <InputRange
      id="unique-3"
      onChange={onChange}
      minLabel="Awful"
      maxLabel="Fantastic"
    />
  )

  const slider = await screen.findByRole("slider")

  fireEvent.change(slider, { target: { value: 8 } })

  await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1))
  screen.getByDisplayValue("8")
})

it("shows value correctly when provided", async () => {
  render(
    <InputRange id="unique-4" value={2} minLabel="Awful" maxLabel="Fantastic" />
  )

  screen.getByDisplayValue("2")
})

it("custom low and high labels show when provided", async () => {
  render(<InputRange id="unique-5" minLabel="Sad face" maxLabel="Happy face" />)

  await screen.findByText("Sad face")
  await screen.findByText("Happy face")
})

it("renders the screenreader help text", async () => {
  render(
    <InputRange id="unique-6" min={1} max={10} minLabel="bad" maxLabel="good" />
  )

  await screen.findAllByText(/1 is bad, 10 is good/i)
})

it.todo("doesn't change value when disabled and clicked")
it.todo("doesn't change value when read only and clicked")
