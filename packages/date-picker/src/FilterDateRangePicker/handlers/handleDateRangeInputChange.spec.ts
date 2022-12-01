import { handleDateRangeInputChange } from "./handleDateRangeInputChange"

describe("handleDateRangeInputChange", () => {
  it("updates input value", () => {
    const onNewInputValue = jest.fn<void, [string]>()
    const newValue = "potato"

    handleDateRangeInputChange({ onNewInputValue, newValue })

    expect(onNewInputValue).toBeCalledWith(newValue)
  })
})
