import React from "react"
import { Button, IconButton } from "@kaizen/button"
import { isSemanticElement } from "./isSemanticElement"

describe("isSemanticElement", () => {
  it("will return true if provided a native element with a semantic role", () => {
    expect(
      isSemanticElement(
        <button onClick={jest.fn} type="button">
          click
        </button>
      )
    ).toBe(true)
    expect(isSemanticElement(<a href="/">link</a>)).toBe(true)
  })
  it("will return false if provided a native element without a semantic role", () => {
    expect(isSemanticElement(<span>click</span>)).toBe(false)
    expect(isSemanticElement(<div>link</div>)).toBe(false)
  })
  it("will return true if provided a custom elements with a semantic role", () => {
    expect(isSemanticElement(<Button label="Click" />)).toBe(true)
    expect(isSemanticElement(<IconButton label="click" />)).toBe(true)
  })
  it("will return true if provided a non-semantic element with a semantic role", () => {
    expect(
      isSemanticElement(
        <span tabIndex={0} role="button" onKeyDown={jest.fn} onClick={jest.fn}>
          custom semantic el
        </span>
      )
    ).toBe(true)
    expect(
      isSemanticElement(
        <div tabIndex={0} role="button" onKeyDown={jest.fn} onClick={jest.fn}>
          custom semantic el
        </div>
      )
    ).toBe(true)
    expect(
      isSemanticElement(
        <div role="textbox" contentEditable="true" aria-multiline="true" />
      )
    ).toBe(true)
  })
})
