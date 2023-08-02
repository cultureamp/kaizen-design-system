import React from "react"
import { render } from "@testing-library/react"
import { InputProps } from "./Input"
import { Input } from "."

const onChange = jest.fn()

const InputWrapper = (props?: Partial<InputProps>): JSX.Element => (
  <Input onChange={onChange} {...props} />
)

describe("<Input />", () => {
  it("renders a value inside of input", () => {
    const { getByRole } = render(<InputWrapper value="Coffee" />)
    expect(getByRole("textbox")).toHaveAttribute("value", "Coffee")
  })

  describe("DEPRECATED PROPS", () => {
    it("renders a value inside of input", () => {
      const { getByRole } = render(<InputWrapper inputValue="Coffee" />)
      expect(getByRole("textbox")).toHaveAttribute("value", "Coffee")
    })
  })

  it("renders an `ariaDescribedBy` attribute", () => {
    const { getByRole } = render(
      <InputWrapper ariaDescribedBy="id__description" />
    )
    expect(getByRole("textbox")).toHaveAttribute(
      "aria-describedby",
      "id__description"
    )
  })
})
