import React from "react"
import { render } from "@testing-library/react"
import { enUS } from "date-fns/locale"
import { DateInputDescription } from "./DateInputDescription"

describe("DateInputDescription", () => {
  it("returns template string when description is undefined", () => {
    const { container } = render(<DateInputDescription locale={enUS} />)
    expect(container).toHaveTextContent("Input format:mm/dd/yyyy")
  })

  it("returns template string when description is empty string", () => {
    const { container } = render(
      <DateInputDescription description="" locale={enUS} />
    )
    expect(container).toHaveTextContent("Input format:mm/dd/yyyy")
  })

  it("returns template string when description is a string", () => {
    const { container } = render(
      <DateInputDescription
        description="Custom description here"
        locale={enUS}
      />
    )
    expect(container).toHaveTextContent(
      "Custom description here(Input format:mm/dd/yyyy)"
    )
  })

  it("returns template string when description is an element", () => {
    const { container } = render(
      <DateInputDescription
        description={<span>Custom description span</span>}
        locale={enUS}
      />
    )

    expect(container).toHaveTextContent(
      "Custom description span(Input format:mm/dd/yyyy)"
    )
  })
})
