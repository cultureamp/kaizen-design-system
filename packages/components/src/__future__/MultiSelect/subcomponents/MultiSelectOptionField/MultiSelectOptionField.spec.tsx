import React, { useState } from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CheckboxProps } from "../Checkbox"
import {
  MultiSelectOptionField,
  MultiSelectOptionFieldProps,
} from "./MultiSelectOptionField"

const user = userEvent.setup()

const onChange = jest.fn()

const MultiSelectOptionFieldWrapper = (
  customProps?: Partial<MultiSelectOptionFieldProps>
): JSX.Element => {
  const [checkedStatus, setCheckedStatus] =
    useState<CheckboxProps["checkedStatus"]>("unchecked")

  const handleChange = (): void => {
    switch (checkedStatus) {
      case "checked":
        return setCheckedStatus("unchecked")
      default:
        return setCheckedStatus("checked")
    }
  }

  return (
    <MultiSelectOptionField
      id="id--jaffle"
      option={{ label: "Jaffle", value: "jaffle" }}
      checkedStatus={checkedStatus}
      onChange={e => {
        handleChange()
        onChange(e)
      }}
      {...customProps}
    />
  )
}

describe("<MultiSelectOptionField />", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("has an accessible name", () => {
    const { getByRole } = render(<MultiSelectOptionFieldWrapper />)

    expect(getByRole("checkbox", { name: "Jaffle" })).toBeInTheDocument()
  })

  it("triggers onChange when checkbox is clicked", async () => {
    const { getByRole } = render(<MultiSelectOptionFieldWrapper />)

    const checkbox = getByRole("checkbox", {
      name: "Jaffle",
    }) as HTMLInputElement
    expect(checkbox.checked).toBe(false)

    await user.click(checkbox)

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(1)
      expect(checkbox.checked).toBe(true)
    })
  })

  it("triggers onChange when label is clicked", async () => {
    const { getByRole, getByText } = render(<MultiSelectOptionFieldWrapper />)

    const checkbox = getByRole("checkbox", {
      name: "Jaffle",
    }) as HTMLInputElement
    expect(checkbox.checked).toBe(false)

    const label = getByText("Jaffle")
    await user.click(label)

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(1)
      expect(checkbox.checked).toBe(true)
    })
  })
})
