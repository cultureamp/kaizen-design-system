import * as React from "react"
import { fireEvent } from "@testing-library/dom"
import { cleanup, render } from "@testing-library/react"

import { InputProps } from "./Input"
import { Input } from "."

afterEach(cleanup)

const defaultInputProps = {
  id: "someInputId",
  inputValue: "someInputValue",
  onChange: jest.fn(),
}

const renderInput = (props?: InputProps) => {
  const mergedInputProps = { ...defaultInputProps, ...props }

  return render(<Input {...mergedInputProps} />)
}

describe("<Input />", () => {
  it("should render a value inside of input", () => {
    const { container } = renderInput()

    expect(
      container.querySelector(`[value="${defaultInputProps.inputValue}"]`)
    ).toBeTruthy()
  })

  it("should call the `onChange` event when text value is updated", () => {
    const placeholder = "someInputPlaceholder"
    const utils = renderInput({ inputValue: "", placeholder })
    const input = utils.getByPlaceholderText(placeholder)

    fireEvent.change(input, {
      target: { value: defaultInputProps.inputValue },
    })

    expect(defaultInputProps.onChange).toBeCalledTimes(1)
  })

  it("should render a disabled inside of input", () => {
    const { container } = renderInput({ disabled: true })
    expect(container.querySelector("[disabled]")).toBeTruthy()
  })

  it("should render an `id` attribute", () => {
    const { container } = renderInput()
    expect(
      container.querySelector(`[id="${defaultInputProps.id}"]`)
    ).toBeTruthy()
  })

  it("should render an `ariaDescribedBy` attribute", () => {
    const ariaDescribedBy = "someInputMessageId"

    const { container } = renderInput({ ariaDescribedBy })
    expect(
      container.querySelector(`[aria-describedby="${ariaDescribedBy}"]`)
    ).toBeTruthy()
  })

  it("should render an `data-automation-id` attribute", () => {
    const automationId = "someInputAutomationId"

    const { container } = renderInput({ automationId })
    expect(
      container.querySelector(`[data-automation-id="${automationId}"]`)
    ).toBeTruthy()
  })

  it("should render a reversed input", () => {
    const { container } = renderInput({ reversed: true })
    expect(container.querySelector(".reversed")).toBeTruthy()
  })

  it("should render a `success` input", () => {
    const { container } = renderInput({ status: "success" })

    expect(container.querySelector(".success")).toBeTruthy()
  })

  it("should render an `error` input", () => {
    const { container } = renderInput({ status: "error" })

    expect(container.querySelector(".error")).toBeTruthy()
  })
})
