import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Checkbox } from "./"

describe("<Checkbox />", () => {
  describe("unchecked", () => {
    it("will set native input `checked` attribute to `false`", () => {
      const { getByRole } = render(<Checkbox checkedStatus="unchecked" />)
      const uncheckedCheckbox = getByRole("checkbox") as HTMLInputElement
      expect(uncheckedCheckbox.checked).toBe(false)
    })
  })

  describe("checked", () => {
    it("will set native input `checked` attribute to `true`", () => {
      const { getByRole } = render(<Checkbox checkedStatus="checked" />)
      const uncheckedCheckbox = getByRole("checkbox") as HTMLInputElement
      expect(uncheckedCheckbox.checked).toBe(true)
    })
  })

  describe("indeterminate", () => {
    it("will set native input `checked` attribute false", () => {
      const { getByRole } = render(<Checkbox checkedStatus="indeterminate" />)
      const indeterminateCheckbox = getByRole("checkbox") as HTMLInputElement
      expect(indeterminateCheckbox.checked).toBe(false)
    })
    it("will have the `indeterminate` attribute", () => {
      const { getByRole } = render(<Checkbox checkedStatus="indeterminate" />)
      const indeterminateCheckbox = getByRole("checkbox") as HTMLInputElement
      expect(indeterminateCheckbox.indeterminate).toBe(true)
    })
  })

  describe("onChange handler", () => {
    it("will trigger onChange when input is clicked", () => {
      const onChangeHandler = jest.fn()
      const { getByRole } = render(
        <Checkbox checkedStatus="unchecked" onChange={onChangeHandler} />
      )
      const checkbox = getByRole("checkbox") as HTMLInputElement
      fireEvent.click(checkbox)

      expect(onChangeHandler).toBeCalledTimes(1)
    })
  })
})
