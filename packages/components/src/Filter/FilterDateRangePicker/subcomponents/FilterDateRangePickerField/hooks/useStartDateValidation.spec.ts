import { act } from "react"
import { waitFor } from "@testing-library/react"
import { renderHook } from "@testing-library/react-hooks"
import { renderWithIntl } from "~tests"
import { useStartDateValidation } from "./useStartDateValidation"

describe("useStartDateValidation()", () => {
  describe("validateDate()", () => {
    it("returns a validation message and no date", async () => {
      const { result } = renderHook(() =>
        useStartDateValidation({
          inputLabel: "Start date",
        })
      )
      const { validateDate } = result.current

      act(() => {
        const newDate = validateDate({
          date: new Date("potato"),
          inputValue: "potato",
        })
        expect(newDate).toBeUndefined()
      })

      expect(result.current.validationMessage?.status).toBe("error")

      const { container } = renderWithIntl(
        result.current.validationMessage?.message
      )
      await waitFor(() => {
        expect(container).toHaveTextContent(
          "Start date:potato is an invalid date"
        )
      })
    })
  })
})
