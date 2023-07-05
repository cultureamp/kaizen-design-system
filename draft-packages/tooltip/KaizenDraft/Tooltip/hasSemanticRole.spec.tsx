import React from "react"
import { Button, IconButton } from "@kaizen/button"
import { hasSemanticRole } from "./hasSemanticRole"

describe("hasSemanticRole", () => {
  it("will return true if provided a native element with a semantic role", () => {
    expect(
      hasSemanticRole(
        <button onClick={jest.fn} type="button">
          click
        </button>
      )
    ).toBe(true)
    expect(hasSemanticRole(<a href="/">link</a>)).toBe(true)
  })
  it("will return false if provided a native element without a semantic role", () => {
    expect(hasSemanticRole(<span>click</span>)).toBe(false)
    expect(hasSemanticRole(<div>link</div>)).toBe(false)
  })
  it("will return true if provided a custom elements with a semantic role", () => {
    expect(hasSemanticRole(<Button label="Click" />)).toBe(true)
    expect(hasSemanticRole(<IconButton label="click" />)).toBe(true)
  })
  it("will return true if provided a non-semantic elements with a semantic role", () => {
    expect(
      hasSemanticRole(
        <span tabIndex={0} role="button" onKeyDown={jest.fn} onClick={jest.fn}>
          custom semantic el
        </span>
      )
    ).toBe(true)
    expect(
      hasSemanticRole(
        <div tabIndex={0} role="button" onKeyDown={jest.fn} onClick={jest.fn}>
          custom semantic el
        </div>
      )
    ).toBe(true)
  })
})
