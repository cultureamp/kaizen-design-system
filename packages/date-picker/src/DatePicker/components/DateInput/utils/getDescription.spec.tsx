import React from "react"
import { getDescription } from "./getDescription"

describe("getDescription", () => {
  it("returns template string when description is undefined", () => {
    const description = getDescription(undefined)
    expect(description).toBe("Format: mm/dd/yyyy")
  })

  it("returns template string when description is empty string", () => {
    const description = getDescription("")
    expect(description).toBe("Format: mm/dd/yyyy")
  })

  it("returns template string when description is a string", () => {
    const description = getDescription("Description here")
    expect(description).toBe("Description here (Format: mm/dd/yyyy)")
  })

  it("returns template string when description is an element", () => {
    const description = getDescription(<span>Description span</span>)
    expect(description).toEqual(
      <>
        <span>Description span</span> (Format: mm/dd/yyyy)
      </>
    )
  })
})
