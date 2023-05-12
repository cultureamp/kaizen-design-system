import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { InputProps } from "./Input"
import { Input } from "."

const user = userEvent.setup()

const defaultInputProps = {
  id: "someInputId",
  inputValue: "someInputValue",
  onChange: jest.fn(),
}

const renderInput = (props?: InputProps): ReturnType<typeof render> => {
  const mergedInputProps = { ...defaultInputProps, ...props }

  return render(<Input {...mergedInputProps} />)
}

describe("<Input />", () => {
  it("renders a value inside of input", () => {
    const { container } = renderInput()

    expect(
      container.querySelector(`[value="${defaultInputProps.inputValue}"]`)
    ).toBeTruthy()
  })

  it("calls the `onChange` event when text value is updated", async () => {
    const placeholder = "someInputPlaceholder"
    const utils = renderInput({ inputValue: "", placeholder })
    const input = utils.getByPlaceholderText(placeholder)

    await user.type(input, "Hello")
    await waitFor(() => {
      expect(defaultInputProps.onChange).toBeCalledTimes(5)
    })
  })

  it("renders a disabled inside of input", () => {
    const { container } = renderInput({ disabled: true })
    expect(container.querySelector("[disabled]")).toBeTruthy()
  })

  it("renders an `id` attribute", () => {
    const { container } = renderInput()
    expect(
      container.querySelector(`[id="${defaultInputProps.id}"]`)
    ).toBeTruthy()
  })

  it("renders an `ariaDescribedBy` attribute", () => {
    const ariaDescribedBy = "someInputMessageId"

    const { container } = renderInput({ ariaDescribedBy })
    expect(
      container.querySelector(`[aria-describedby="${ariaDescribedBy}"]`)
    ).toBeTruthy()
  })

  it("renders an `data-automation-id` attribute", () => {
    const automationId = "someInputAutomationId"

    const { container } = renderInput({ automationId })
    expect(
      container.querySelector(`[data-automation-id="${automationId}"]`)
    ).toBeTruthy()
  })

  it("renders a reversed input", () => {
    const { container } = renderInput({ reversed: true })
    expect(container.querySelector(".reversed")).toBeTruthy()
  })

  it("renders a `success` input", () => {
    const { container } = renderInput({ status: "success" })

    expect(container.querySelector(".success")).toBeTruthy()
  })

  it("renders an `error` input", () => {
    const { container } = renderInput({ status: "error" })

    expect(container.querySelector(".error")).toBeTruthy()
  })
})
