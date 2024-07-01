import React from "react"
import { waitFor } from "@testing-library/react"
import { enUS } from "date-fns/locale"
import { renderWithIntl } from "~tests"
import { DateInputDescription } from "./DateInputDescription"

describe("DateInputDescription", () => {
  it("returns template string when description is undefined", async () => {
    const { container } = renderWithIntl(<DateInputDescription locale={enUS} />)
    await waitFor(() => {
      expect(container).toHaveTextContent("Input format:mm/dd/yyyy")
    })
  })

  it("returns template string when description is empty string", async () => {
    const { container } = renderWithIntl(
      <DateInputDescription description="" locale={enUS} />
    )
    await waitFor(() => {
      expect(container).toHaveTextContent("Input format:mm/dd/yyyy")
    })
  })

  it("returns template string when description is a string", async () => {
    const { container } = renderWithIntl(
      <DateInputDescription
        description="Custom description here"
        locale={enUS}
      />
    )
    await waitFor(() => {
      expect(container).toHaveTextContent(
        "Custom description here(Input format:mm/dd/yyyy)"
      )
    })
  })

  it("returns template string when description is an element", async () => {
    const { container } = renderWithIntl(
      <DateInputDescription
        description={<span>Custom description span</span>}
        locale={enUS}
      />
    )
    await waitFor(() => {
      expect(container).toHaveTextContent(
        "Custom description span(Input format:mm/dd/yyyy)"
      )
    })
  })
})
