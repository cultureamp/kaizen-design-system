import { validateDate } from "../utils/validateDate"

describe("validateDate", () => {
  it("returns expected response when selected day is undefined", () => {
    const date = undefined
    const inputValue = undefined
    const { validationResponse, newDate } = validateDate({ date, inputValue })

    expect(validationResponse).toStrictEqual({
      date,
      inputValue,
      status: undefined,
      validationMessage: undefined,
      isInvalid: false,
      isDisabled: false,
      isEmpty: true,
      isValidDate: false,
    })

    expect(newDate).toBeUndefined()
  })

  it("returns expected response when selected day is invalid and input value is undefined", () => {
    const date = new Date("potato")
    const inputValue = undefined
    const { validationResponse, newDate } = validateDate({ date, inputValue })

    expect(validationResponse).toStrictEqual({
      date,
      inputValue,
      status: "error",
      validationMessage: "Date is invalid",
      isInvalid: true,
      isDisabled: false,
      isEmpty: false,
      isValidDate: false,
    })

    expect(newDate).toBeUndefined()
  })

  it("returns expected response when selected day is invalid and input value is empty string", () => {
    const date = new Date("potato")
    const inputValue = ""
    const { validationResponse, newDate } = validateDate({ date, inputValue })

    expect(validationResponse).toStrictEqual({
      date,
      inputValue,
      status: "error",
      validationMessage: "Date is invalid",
      isInvalid: true,
      isDisabled: false,
      isEmpty: false,
      isValidDate: false,
    })

    expect(newDate).toBeUndefined()
  })

  it("returns expected response when selected day is invalid and input value is valid string", () => {
    const date = new Date("potato")
    const inputValue = "potato"
    const { validationResponse, newDate } = validateDate({ date, inputValue })

    expect(validationResponse).toStrictEqual({
      date,
      inputValue,
      status: "error",
      validationMessage: "potato is an invalid date",
      isInvalid: true,
      isDisabled: false,
      isEmpty: false,
      isValidDate: false,
    })

    expect(newDate).toBeUndefined()
  })

  it("returns expected response when selected day is disabled", () => {
    const date = new Date("2022-03-01")
    const inputValue = "03/01/2022"
    const disabledDays = [new Date("2022-03-01")]
    const { validationResponse, newDate } = validateDate({
      date,
      inputValue,
      disabledDays,
    })

    expect(validationResponse).toStrictEqual({
      date,
      inputValue,
      status: "error",
      validationMessage: "03/01/2022 is not available, try another date",
      isInvalid: false,
      isDisabled: true,
      isEmpty: false,
      isValidDate: false,
    })

    expect(newDate).toBeUndefined()
  })

  it("returns expected response when selected day is valid", () => {
    const date = new Date("2022-03-01")
    const inputValue = "03/01/2022"
    const { validationResponse, newDate } = validateDate({ date, inputValue })

    expect(validationResponse).toStrictEqual({
      date,
      inputValue,
      status: undefined,
      validationMessage: undefined,
      isInvalid: false,
      isDisabled: false,
      isEmpty: false,
      isValidDate: true,
    })

    expect(newDate).toBe(date)
  })
})
