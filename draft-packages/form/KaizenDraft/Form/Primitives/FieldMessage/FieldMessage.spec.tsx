import React from "react"
import { render } from "@testing-library/react"
import { FieldMessage } from "./index"

describe("<FieldMessage />", () => {
  it("renders a message within a <p> tag when given a string", () => {
    const { getByText } = render(
      <FieldMessage message="Hello I am a message" />
    )
    expect(getByText("Hello I am a message").tagName).toBe("P")
  })

  it("renders a message within a <div> tag when not given node other than string", () => {
    const { getByText } = render(
      <FieldMessage message={<span>Hello I am a message within a span</span>} />
    )
    const fieldMessage = getByText("Hello I am a message within a span")

    expect(fieldMessage.tagName).toBe("SPAN")
    expect(fieldMessage.parentElement?.tagName).toBe("DIV")
  })
})
