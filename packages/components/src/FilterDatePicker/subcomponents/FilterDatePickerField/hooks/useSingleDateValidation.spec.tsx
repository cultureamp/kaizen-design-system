import React from "react"
import { renderHook, act } from "@testing-library/react-hooks"
import { LabelledMessage } from "~components/LabelledMessage"
import { useSingleDateValidation } from "./useSingleDateValidation"

describe("useStartDateValidation()", () => {
  describe("validateDate()", () => {
    it("returns a validation message and no date", () => {
      const { result } = renderHook(() =>
        useSingleDateValidation({
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

      expect(result.current.validationMessage).toStrictEqual({
        status: "error",
        message: (
          <LabelledMessage
            label="Start date"
            message="potato is an invalid date"
          />
        ),
      })
    })
  })
})
