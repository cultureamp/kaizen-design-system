import React from "react"
import { enUS } from "date-fns/locale"
import { getDescription } from "./getDescription"

describe("getDescription", () => {
  it("returns template string when description is undefined", () => {
    const description = getDescription(undefined, enUS)
    expect(description).toBe("Format: dd/mm/yyyy")
  })

  it("returns template string when description is empty string", () => {
    const description = getDescription("", enUS)
    expect(description).toBe("Format: dd/mm/yyyy")
  })

  it("returns template string when description is a string", () => {
    const description = getDescription("Description here", enUS)
    expect(description).toBe("Description here (Format: dd/mm/yyyy)")
  })

  it("returns template string when description is an element", () => {
    const description = getDescription(<span>Description span</span>, enUS)
    expect(description).toEqual(
      <>
        <span>Description span</span> (Format: dd/mm/yyyy)
      </>
    )
  })
})
