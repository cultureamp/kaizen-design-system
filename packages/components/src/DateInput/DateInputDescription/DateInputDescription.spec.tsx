import React from "react"
import { waitFor, render } from "@testing-library/react"
import { enUS } from "date-fns/locale"
import { DateInputDescription } from "./DateInputDescription"

describe("DateInputDescription", () => {
  it("returns template string when description is undefined", async () => {
    const { container } = render(<DateInputDescription locale={enUS} />)
    await waitFor(() => {
      expect(container).toHaveTextContent("Input format:mm/dd/yyyy")
    })
  })

  it("returns template string when description is empty string", async () => {
    const { container } = render(
      <DateInputDescription description="" locale={enUS} />,
    )
    await waitFor(() => {
      expect(container).toHaveTextContent("Input format:mm/dd/yyyy")
    })
  })

  it("returns template string when description is a string", async () => {
    const { container } = render(
      <DateInputDescription
        description="Custom description here"
        locale={enUS}
      />,
    )
    await waitFor(() => {
      expect(container).toHaveTextContent(
        "Custom description here(Input format:mm/dd/yyyy)",
      )
    })
  })

  it("returns template string when description is an element", async () => {
    const { container } = render(
      <DateInputDescription
        description={<span>Custom description span</span>}
        locale={enUS}
      />,
    )
    await waitFor(() => {
      expect(container).toHaveTextContent(
        "Custom description span(Input format:mm/dd/yyyy)",
      )
    })
  })
})
