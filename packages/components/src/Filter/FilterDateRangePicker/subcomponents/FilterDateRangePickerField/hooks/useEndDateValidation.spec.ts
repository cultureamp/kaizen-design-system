import { act } from "react"
import { waitFor } from "@testing-library/react"
import { renderHook } from "@testing-library/react-hooks"
import { renderWithIntl } from "~tests"
import { useEndDateValidation } from "./useEndDateValidation"

describe("useEndDateValidation()", () => {
  describe("validateDate()", () => {
    it("returns a validation message and no date", async () => {
      const { result } = renderHook(() =>
        useEndDateValidation({
          inputLabel: "End date",
        })
      )
      const { validateDate } = result.current

      act(() => {
        const newDate = validateDate({
          endDate: new Date("potato"),
          endDateInputValue: "potato",
          startDate: undefined,
          startDateFieldLabel: "Start date",
        })
        expect(newDate).toEqual(undefined)
      })

      expect(result.current.validationMessage?.status).toBe("error")

      const { container } = renderWithIntl(
        result.current.validationMessage?.message
      )
      await waitFor(() => {
        expect(container).toHaveTextContent(
          "End date:potato is an invalid date"
        )
      })
    })
  })

  describe("validateEndDateBeforeStartDate()", () => {
    it("returns a validation message and date", async () => {
      const { result } = renderHook(() =>
        useEndDateValidation({
          inputLabel: "End date",
        })
      )
      const { validateEndDateBeforeStartDate } = result.current

      act(() => {
        const newDate = validateEndDateBeforeStartDate({
          endDate: new Date("2023-04-03"),
          endDateInputValue: "3 Apr 2023",
          startDate: new Date("2023-05-01"),
          startDateFieldLabel: "Start date",
        })
        expect(newDate).toEqual(new Date("2023-04-03"))
      })

      expect(result.current.validationMessage?.status).toBe("error")

      const { container } = renderWithIntl(
        result.current.validationMessage?.message
      )
      await waitFor(() => {
        expect(container).toHaveTextContent(
          'Cannot be earlier than the selection in "Start date"'
        )
      })
    })
  })
})
