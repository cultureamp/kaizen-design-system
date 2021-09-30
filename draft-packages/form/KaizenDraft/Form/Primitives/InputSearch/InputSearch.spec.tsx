import { cleanup, render } from "@testing-library/react"
import { fireEvent } from "@testing-library/dom"
import * as React from "react"

import { InputSearchProps } from "./InputSearch"
import { InputSearch } from "."

const defaultInputProps = {
  id: "someInputId",
  value: "somevalue",
  onChange: jest.fn(),
}

const renderInput = (props?: InputSearchProps) => {
  const mergedInputProps = { ...defaultInputProps, ...props }

  return render(<InputSearch {...mergedInputProps} />)
}

describe("<InputSearch />", () => {
  it("should render a value inside of input", () => {
    const { container } = renderInput()

    expect(
      container.querySelector(`[value="${defaultInputProps.value}"]`)
    ).toBeTruthy()
  })

  it("should call the `onChange` event when text value is updated", () => {
    const placeholder = "someInputPlaceholder"
    const utils = renderInput({ value: "", placeholder })
    const input = utils.getByPlaceholderText(placeholder)

    fireEvent.change(input, {
      target: { value: defaultInputProps.value },
    })

    expect(defaultInputProps.onChange).toBeCalledTimes(1)
  })

  it("should render a disabled inside of input", () => {
    const { container } = renderInput({ disabled: true })
    expect(container.querySelector("[disabled]")).toBeTruthy()
  })

  it("should render a reversed input", () => {
    const { container } = renderInput({ reversed: true })
    expect(container.querySelector(".reversed")).toBeTruthy()
  })
})
