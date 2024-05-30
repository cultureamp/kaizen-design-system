import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { InputSearchProps } from "./InputSearch"
import { InputSearch } from "."

const user = userEvent.setup()

const defaultInputProps = {
  id: "someInputId",
  value: "somevalue",
  onChange: jest.fn(),
}

const renderInput = (
  props?: Omit<InputSearchProps, "id">
): ReturnType<typeof render> => {
  const mergedInputProps = { ...defaultInputProps, ...props }

  return render(<InputSearch {...mergedInputProps} data-testid="someInputId" />)
}

describe("<InputSearch />", () => {
  it("should render a value inside of input", () => {
    const { container } = renderInput()

    expect(
      container.querySelector(`[value="${defaultInputProps.value}"]`)
    ).toBeTruthy()
  })

  it("should call the `onChange` event when text value is updated", async () => {
    const utils = renderInput({
      value: "",
    })
    const input = utils.getByTestId("someInputId")

    await user.type(input, "Hello")
    await waitFor(() => {
      expect(defaultInputProps.onChange).toBeCalledTimes(5)
    })
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
