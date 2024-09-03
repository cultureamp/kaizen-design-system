import { screen, waitFor, render } from "@testing-library/react"
import { validateDate } from "./validateDate"

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

  it("returns expected response when selected day is invalid and input value is undefined", async () => {
    const date = new Date("potato")
    const inputValue = undefined
    const { validationResponse, newDate } = validateDate({ date, inputValue })

    const { validationMessage, ...response } = validationResponse

    expect(response).toStrictEqual({
      date,
      inputValue,
      status: "error",
      isInvalid: true,
      isDisabled: false,
      isEmpty: false,
      isValidDate: false,
    })
    expect(newDate).toBeUndefined()

    render(validationMessage)
    await waitFor(() => {
      expect(screen.getByText("Date is invalid")).toBeVisible()
    })
  })

  it("returns expected response when selected day is invalid and input value is empty string", async () => {
    const date = new Date("potato")
    const inputValue = ""
    const { validationResponse, newDate } = validateDate({ date, inputValue })

    const { validationMessage, ...response } = validationResponse

    expect(response).toEqual({
      date,
      inputValue,
      status: "error",
      isInvalid: true,
      isDisabled: false,
      isEmpty: false,
      isValidDate: false,
    })
    expect(newDate).toBeUndefined()

    render(validationMessage)
    await waitFor(() => {
      expect(screen.getByText("Date is invalid")).toBeVisible()
    })
  })

  it("returns expected response when selected day is invalid and input value is valid string", async () => {
    const date = new Date("potato")
    const inputValue = "potato"
    const { validationResponse, newDate } = validateDate({ date, inputValue })

    const { validationMessage, ...response } = validationResponse

    expect(response).toStrictEqual({
      date,
      inputValue,
      status: "error",
      isInvalid: true,
      isDisabled: false,
      isEmpty: false,
      isValidDate: false,
    })
    expect(newDate).toBeUndefined()

    render(validationMessage)
    await waitFor(() => {
      expect(screen.getByText("potato is an invalid date")).toBeVisible()
    })
  })

  it("returns expected response when selected day is disabled", async () => {
    const date = new Date("2022-03-01")
    const inputValue = "03/01/2022"
    const disabledDays = [new Date("2022-03-01")]
    const { validationResponse, newDate } = validateDate({
      date,
      inputValue,
      disabledDays,
    })

    const { validationMessage, ...response } = validationResponse

    expect(response).toStrictEqual({
      date,
      inputValue,
      status: "error",
      isInvalid: false,
      isDisabled: true,
      isEmpty: false,
      isValidDate: false,
    })
    expect(newDate).toBeUndefined()

    render(validationMessage)
    await waitFor(() => {
      expect(
        screen.getByText("03/01/2022 is not available, try another date")
      ).toBeVisible()
    })
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
