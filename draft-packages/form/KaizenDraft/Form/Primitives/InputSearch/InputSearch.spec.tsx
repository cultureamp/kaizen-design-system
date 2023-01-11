import React from "react"
import { fireEvent } from "@testing-library/dom"
import { render } from "@testing-library/react"
import { InputSearchProps } from "./InputSearch"
import { InputSearch } from "."

const defaultInputProps = {
  id: "someInputId",
  value: "somevalue",
  onChange: jest.fn(),
}

const renderInput = (props?: InputSearchProps): ReturnType<typeof render> => {
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
    const utils = renderInput({ value: "", placeholder, id: "someInputId" })
    const input = utils.getByPlaceholderText(placeholder)

    fireEvent.change(input, {
      target: { value: defaultInputProps.value },
    })

    expect(defaultInputProps.onChange).toBeCalledTimes(1)
  })

  it("should render a disabled inside of input", () => {
    const { container } = renderInput({ disabled: true, id: "someInputId" })
    expect(container.querySelector("[disabled]")).toBeTruthy()
  })

  it("should render a reversed input", () => {
    const { container } = renderInput({ reversed: true, id: "someInputId" })
    expect(container.querySelector(".reversed")).toBeTruthy()
  })
})
