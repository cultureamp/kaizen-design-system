import React from "react"
import { render, screen } from "@testing-library/react"
import { Slider } from "./index"

describe("<Slider />", () => {
  it("renders the label", async () => {
    render(
      <Slider
        labelText="Work overall"
        id="unique-1"
        minLabel="Awful"
        maxLabel="Fantastic"
      />
    )
    const label = await screen.findByText(/Work overall/i)

    expect(label).toBeInTheDocument()
  })

  it("renders the description when provided", async () => {
    render(
      <Slider
        labelText="Work overall"
        description="General feeling about work"
        id="unique-1"
        minLabel="Awful"
        maxLabel="Fantastic"
      />
    )
    const description = await screen.findByText(/General feeling about work/i)

    expect(description).toBeInTheDocument()
  })

  it("renders read only message when provided", async () => {
    render(
      <Slider
        labelText="Work overall"
        id="unique-1"
        minLabel="Awful"
        maxLabel="Fantastic"
        readOnlyMessage="Waiting for Sally to respond"
      />
    )
    const readOnlyMsg = await screen.findByText(/Waiting for Sally to respond/i)
    expect(readOnlyMsg).toBeInTheDocument()
  })
})
