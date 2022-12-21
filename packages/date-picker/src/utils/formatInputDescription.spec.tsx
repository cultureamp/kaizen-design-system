import React from "react"
import { enUS } from "date-fns/locale"
import { formatInputDescription } from "./formatInputDescription"

describe("formatInputDescription", () => {
  it("returns template string when description is undefined", () => {
    const description = formatInputDescription(undefined, enUS)
    expect(description).toBe("Input format: mm/dd/yyyy")
  })

  it("returns template string when description is empty string", () => {
    const description = formatInputDescription("", enUS)
    expect(description).toBe("Input format: mm/dd/yyyy")
  })

  it("returns template string when description is a string", () => {
    const description = formatInputDescription("Description here", enUS)
    expect(description).toBe("Description here (Input format: mm/dd/yyyy)")
  })

  it("returns template string when description is an element", () => {
    const description = formatInputDescription(
      <span>Description span</span>,
      enUS
    )
    // {} used to add new lines to replicate DOM structure.
    expect(description).toEqual(
      <>
        <span>Description span</span> (Input format: {}mm/dd/yyyy{})
      </>
    )
  })
})
