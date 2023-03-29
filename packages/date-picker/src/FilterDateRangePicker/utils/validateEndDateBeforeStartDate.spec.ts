import { validateEndDateBeforeStartDate } from "./validateEndDateBeforeStartDate"

describe("validateEndDateBeforeStartDate", () => {
  test("end date after start date", () => {
    const startDate = new Date("2022-04-03")
    const startDateFieldLabel = "Start date"
    const endDate = new Date("2022-05-01")
    const endDateInputValue = "01/05/2022"
    const { validationResponse, newDate } = validateEndDateBeforeStartDate({
      startDate,
      startDateFieldLabel,
      endDate,
      endDateInputValue,
    })

    expect(validationResponse).toStrictEqual({
      date: endDate,
      inputValue: endDateInputValue,
      status: undefined,
      validationMessage: undefined,
      isInvalid: false,
      isDisabled: false,
      isEmpty: false,
      isValidDate: true,
    })

    expect(newDate).toBe(endDate)
  })

  test("end date equals start date", () => {
    const startDate = new Date("2022-05-01")
    const startDateFieldLabel = "Start date"
    const endDate = new Date("2022-05-01")
    const endDateInputValue = "01/05/2022"
    const { validationResponse, newDate } = validateEndDateBeforeStartDate({
      startDate,
      startDateFieldLabel,
      endDate,
      endDateInputValue,
    })

    expect(validationResponse).toStrictEqual({
      date: endDate,
      inputValue: endDateInputValue,
      status: undefined,
      validationMessage: undefined,
      isInvalid: false,
      isDisabled: false,
      isEmpty: false,
      isValidDate: true,
    })

    expect(newDate).toBe(endDate)
  })

  test("end date before start date", () => {
    const startDate = new Date("2022-05-01")
    const startDateFieldLabel = "Start date"
    const endDate = new Date("2022-04-03")
    const endDateInputValue = "03/04/2022"
    const { validationResponse, newDate } = validateEndDateBeforeStartDate({
      startDate,
      startDateFieldLabel,
      endDate,
      endDateInputValue,
    })

    expect(validationResponse).toStrictEqual({
      date: endDate,
      inputValue: endDateInputValue,
      status: "error",
      validationMessage: 'Cannot be earlier than the selection in "Start date"',
      isInvalid: false,
      isDisabled: false,
      isEmpty: false,
      isValidDate: true,
    })

    expect(newDate).toBeUndefined()
  })
})
