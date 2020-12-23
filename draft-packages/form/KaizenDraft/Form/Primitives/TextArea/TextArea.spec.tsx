import * as React from "react"
import { cleanup, render } from "@testing-library/react"
import TextArea from "./TextArea"

afterEach(cleanup)

describe("<TextArea />", () => {
  it("should render", () => {
    const { container } = render(<TextArea data-testid="wrapper" />)
    expect(container.querySelector("textarea")).toBeTruthy()
  })

  it("should render the default value", () => {})

  it("should render the rows attribute when passed in as a prop", () => {})

  it("should fire an onchange event when value is changed", () => {})

  it("should render a reversed class when it's reversed", () => {})

  it("should render a error class when it's an error status", () => {})

  it("should render a success class when it's an success status", () => {})

  it("should render a default class when it's an default status", () => {})

  it("should update the inline style for height when multiple newlines are entered as a value", () => {})

  it("controlled mode - takes a value and does not update on user action", () => {})

  it("uncontrolled mode - takes a value and does update on user action", () => {})
})
