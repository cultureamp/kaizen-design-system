import { renderHook, act } from "@testing-library/react-hooks"
import { useRangeDateValidation } from "./useRangeDateValidation"

describe("useRangeDateValidation()", () => {
  describe("with a valid date", () => {
    it("returns no error status, no validation message and the same date", () => {
      const { result } = renderHook(() =>
        useRangeDateValidation({
          inputLabel: "Start date",
        })
      )
      const { validateDate } = result.current
      const { newDate } = validateDate({
        date: new Date("2022-05-01"),
        inputValue: "1 May 2022",
      })

      expect(result.current.status).toBeUndefined()
      expect(result.current.validationMessage).toBeUndefined()
      expect(newDate).toEqual(new Date("2022-05-01"))
    })
  })

  describe("with an invalid date", () => {
    it("returns an error status, a validation message and no date", () => {
      console.log("TYPEOF", typeof renderHook)
      const { result } = renderHook(() =>
        useRangeDateValidation({
          inputLabel: "Start date",
        })
      )
      const { validateDate, updateValidation } = result.current
      const { validationResponse, newDate } = validateDate({
        date: new Date("potato"),
        inputValue: "potato",
      })

      act(() => {
        updateValidation(validationResponse)
      })

      expect(result.current.status).toBe("error")
      expect(result.current.validationMessage).toBe(
        "Start date: potato is an invalid date"
      )
      expect(newDate).toBeUndefined()
    })
  })

  describe("consumer controlled validation", () => {
    it("returns the consumer's error status and validation message", () => {
      const { result } = renderHook(() =>
        useRangeDateValidation({
          inputLabel: "Start date",
          status: "caution",
          validationMessage: "Jelly-filled doughnuts",
          onValidate: (): void => undefined,
        })
      )
      const { validateDate, updateValidation } = result.current
      const { validationResponse, newDate } = validateDate({
        date: new Date("potato"),
        inputValue: "potato",
      })

      act(() => {
        updateValidation(validationResponse)
      })

      expect(result.current.status).toBe("caution")
      expect(result.current.validationMessage).toBe("Jelly-filled doughnuts")
      expect(newDate).toBeUndefined()
    })
  })
})
