import React from "react"
import { Button, IconButton } from "~components/Button"
import { ArrowRightIcon } from "~components/Icon"
import { isSemanticElement } from "./isSemanticElement"

describe("isSemanticElement", () => {
  it("returns true if provided a native element with a semantic role", () => {
    expect(
      isSemanticElement(
        <button onClick={jest.fn()} type="button">
          click
        </button>
      )
    ).toBe(true)
    expect(isSemanticElement(<a href="/">link</a>)).toBe(true)
  })

  it("returns false if provided a non-semantic element", () => {
    expect(isSemanticElement(<span>click</span>)).toBe(false)
    expect(isSemanticElement(<div>link</div>)).toBe(false)
  })

  it("returns true if provided one of the Kaizen components from the allowed list", () => {
    expect(isSemanticElement(<Button label="Click" />)).toBe(true)
    expect(isSemanticElement(<IconButton label="click" />)).toBe(true)
  })

  it("will return true if provided a non-semantic element with a semantic role", () => {
    expect(
      isSemanticElement(
        <span
          tabIndex={0}
          role="button"
          onKeyDown={jest.fn}
          onClick={jest.fn()}
        >
          custom semantic el
        </span>
      )
    ).toBe(true)
    expect(
      isSemanticElement(
        <div tabIndex={0} role="button" onKeyDown={jest.fn} onClick={jest.fn()}>
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

  it("returns false if provided an element using a role 'presentation' or 'none'", () => {
    expect(isSemanticElement(<ArrowRightIcon role="presentation" />)).toBe(
      false
    )
    expect(
      isSemanticElement(
        <span role="none">
          <ArrowRightIcon role="presentation" />
        </span>
      )
    ).toBe(false)
  })
})
