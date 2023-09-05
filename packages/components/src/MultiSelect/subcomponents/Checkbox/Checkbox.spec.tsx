import React, { useState } from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Checkbox, CheckedStatus } from "./index"

const user = userEvent.setup()

describe("<Checkbox />", () => {
  describe("unchecked", () => {
    it("has correct unchecked attributes", () => {
      const { getByRole } = render(
        <Checkbox checkedStatus="unchecked" readOnly />
      )
      const checkbox = getByRole("checkbox") as HTMLInputElement
      expect(checkbox.checked).toBe(false)
      expect(checkbox.indeterminate).toBe(false)
    })
  })

  describe("checked", () => {
    it("has correct checked attributes", () => {
      const { getByRole } = render(
        <Checkbox checkedStatus="checked" readOnly />
      )
      const checkbox = getByRole("checkbox") as HTMLInputElement
      expect(checkbox.checked).toBe(true)
      expect(checkbox.indeterminate).toBe(false)
    })
  })

  describe("indeterminate", () => {
    it("has correct indeterminate attributes", () => {
      const { getByRole } = render(
        <Checkbox checkedStatus="indeterminate" readOnly />
      )
      const checkbox = getByRole("checkbox") as HTMLInputElement
      expect(checkbox.checked).toBe(false)
      expect(checkbox.indeterminate).toBe(true)
    })
  })

  it("correctly changes the checked attributes according to status", async () => {
    const Wrapper = (): JSX.Element => {
      const [status, setStatus] = useState<CheckedStatus>("unchecked")

      const handleChange: React.ChangeEventHandler<HTMLInputElement> = () => {
        if (status === "unchecked") {
          setStatus("indeterminate")
        } else if (status === "indeterminate") {
          setStatus("checked")
        } else if (status === "checked") {
          setStatus("unchecked")
        }
      }

      return <Checkbox checkedStatus={status} onChange={handleChange} />
    }

    const { getByRole } = render(<Wrapper />)
    const checkbox = getByRole("checkbox") as HTMLInputElement
    expect(checkbox.checked).toBe(false)
    expect(checkbox.indeterminate).toBe(false)

    await user.click(checkbox)
    await waitFor(() => {
      expect(checkbox.checked).toBe(false)
      expect(checkbox.indeterminate).toBe(true)
    })

    await user.click(checkbox)
    await waitFor(() => {
      expect(checkbox.checked).toBe(true)
      expect(checkbox.indeterminate).toBe(false)
    })
  })
})
