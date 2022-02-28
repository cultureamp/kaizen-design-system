import React from "react"
import { render, screen } from "@testing-library/react"
import { DirectionalLink } from ".."

describe("DirectionalLink", () => {
  it("has the correct label when direction prop is prev", () => {
    render(<DirectionalLink direction="prev" />)

    expect(screen.getByLabelText("Previous page"))
  })

  it("has the correct label when direction prop is next", () => {
    render(<DirectionalLink direction="next" />)

    expect(screen.getByLabelText("Next page"))
  })

  it("has the correct label when label prop is passed", () => {
    const expectedLabelProp = "Previous report"
    render(<DirectionalLink direction="next" label={expectedLabelProp} />)

    expect(screen.getByLabelText(expectedLabelProp))
  })
})
