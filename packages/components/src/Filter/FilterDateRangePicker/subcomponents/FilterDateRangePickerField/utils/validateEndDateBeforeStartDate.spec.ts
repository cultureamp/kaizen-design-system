import { validateEndDateBeforeStartDate } from "./validateEndDateBeforeStartDate"

describe("validateEndDateBeforeStartDate()", () => {
  describe("when the end date is after the start date", () => {
    const startDate = new Date("2022-04-03")
    const startDateFieldLabel = "Start date"
    const endDate = new Date("2022-05-01")
    const endDateInputValue = "01/05/2022"
    let result: ReturnType<typeof validateEndDateBeforeStartDate>

    beforeEach(() => {
      result = validateEndDateBeforeStartDate({
        startDate,
        startDateFieldLabel,
        endDate,
        endDateInputValue,
      })
    })

    it("returns a response with no errors", () => {
      expect(result.validationResponse).toStrictEqual({
        date: endDate,
        inputValue: endDateInputValue,
        validationMessage: undefined,
        isInvalid: false,
        isDisabled: false,
        isEmpty: false,
        isValidDate: true,
      })
    })

    it("returns a new date that is the same as the given end date", () => {
      expect(result.newDate).toBe(endDate)
    })
  })

  describe("when the end date equals the start date", () => {
    const startDate = new Date("2022-05-01")
    const startDateFieldLabel = "Start date"
    const endDate = new Date("2022-05-01")
    const endDateInputValue = "01/05/2022"
    let result: ReturnType<typeof validateEndDateBeforeStartDate>

    beforeEach(() => {
      result = validateEndDateBeforeStartDate({
        startDate,
        startDateFieldLabel,
        endDate,
        endDateInputValue,
      })
    })

    it("returns a response with no errors", () => {
      expect(result.validationResponse).toStrictEqual({
        date: endDate,
        inputValue: endDateInputValue,
        validationMessage: undefined,
        isInvalid: false,
        isDisabled: false,
        isEmpty: false,
        isValidDate: true,
      })
    })

    it("returns a new date that is the same as the given end date", () => {
      expect(result.newDate).toBe(endDate)
    })
  })

  describe("when the end date is before the start date", () => {
    const startDate = new Date("2022-05-01")
    const startDateFieldLabel = "Start date"
    const endDate = new Date("2022-04-03")
    const endDateInputValue = "03/04/2022"
    let result: ReturnType<typeof validateEndDateBeforeStartDate>

    beforeEach(() => {
      result = validateEndDateBeforeStartDate({
        startDate,
        startDateFieldLabel,
        endDate,
        endDateInputValue,
      })
    })

    it("returns a response with an error status and validation message", () => {
      expect(result.validationResponse).toStrictEqual({
        date: endDate,
        inputValue: endDateInputValue,
        validationMessage: {
          status: "error",
          message: 'Cannot be earlier than the selection in "Start date"',
        },
        isInvalid: false,
        isDisabled: false,
        isEmpty: false,
        isValidDate: true,
      })
    })

    it("returns the new end date", () => {
      expect(result.newDate).toEqual(endDate)
    })
  })
})
