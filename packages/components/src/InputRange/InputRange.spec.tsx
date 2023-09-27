import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { InputRange } from "./index"

describe("<InputRange />", () => {
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
})
