import React from "react"
import { render } from "@testing-library/react"
import { InputSearchProps } from "./InputSearch"
import { InputSearch } from "."

const onChange = vi.fn()

const InputSearchWrapper = (props?: Partial<InputSearchProps>): JSX.Element => (
  <InputSearch id="id__inputsearch" onChange={onChange} {...props} />
)

describe("<InputSearch />", () => {
  it("renders value and clear button when value exists", () => {
    const { getByRole } = render(<InputSearchWrapper value="Coffee" />)
    expect(getByRole("searchbox")).toHaveAttribute("value", "Coffee")
    expect(getByRole("button", { name: "clear search" })).toBeVisible()
  })

  it("disables input", () => {
    const { getByRole } = render(<InputSearchWrapper disabled />)
    expect(getByRole("searchbox")).toBeDisabled()
  })
})
