import { enAU } from "date-fns/locale"
import { handleDateRangeInputFocus } from "./handleDateRangeInputFocus"

const locale = enAU

describe("handleDateRangeInputFocus", () => {
  it("sets input value when there is a new date", () => {
    const date = new Date("2022-05-01")
    const onNewInputValue = jest.fn<void, [string]>()

    handleDateRangeInputFocus({
      date,
      onNewInputValue,
      locale,
    })

    expect(onNewInputValue).toBeCalledWith("01/05/2022")
  })

  it("does not set input value when date is not defined", () => {
    const date = undefined
    const onNewInputValue = jest.fn<void, [string]>()

    handleDateRangeInputFocus({
      date,
      onNewInputValue,
      locale,
    })

    expect(onNewInputValue).not.toBeCalled()
  })
})
