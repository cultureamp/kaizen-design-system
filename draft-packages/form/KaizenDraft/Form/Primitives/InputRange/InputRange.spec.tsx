import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { InputRange } from "./index"

describe("<InputRange />", () => {
  it("renders value as 5.5 when no default value provided", async () => {
    render(<InputRange id="unique-1" minLabel="Awful" maxLabel="Fantastic" />)

    expect(screen.getByDisplayValue("5.5")).toBeInTheDocument()
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

    expect(screen.getByDisplayValue("9")).toBeInTheDocument()
  })

  it("fires onChange after interaction", async () => {
    const onChange = vi.fn()
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
      <InputRange
        id="unique-4"
        value={2}
        minLabel="Awful"
        maxLabel="Fantastic"
      />
    )

    expect(screen.getByDisplayValue("2")).toBeInTheDocument()
  })

  it("custom low and high labels show when provided", async () => {
    render(
      <InputRange id="unique-5" minLabel="Sad face" maxLabel="Happy face" />
    )

    const sadFace = await screen.findByText("Sad face")
    const happyFace = await screen.findByText("Happy face")

    expect(sadFace).toBeInTheDocument()
    expect(happyFace).toBeInTheDocument()
  })

  it("renders the screenreader help text", async () => {
    render(
      <InputRange
        id="unique-6"
        min={1}
        max={10}
        minLabel="bad"
        maxLabel="good"
      />
    )
    const helpText = await screen.findByText(/1 is bad, 10 is good/i)

    expect(helpText).toBeInTheDocument()
  })

  it.todo("doesn't change value when disabled and clicked")
  it.todo("doesn't change value when read only and clicked")
})
