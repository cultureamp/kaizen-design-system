import { ValidationResponse } from "../../types"
import { getDateValidationHandler } from "./getDateValidationHandler"

const onValidate = jest.fn<void, [ValidationResponse]>()
const setInbuiltValidationStatus = jest.fn<
  void,
  [React.SetStateAction<ValidationResponse["status"] | undefined>]
>()
const setInbuiltValidationMessage = jest.fn<
  void,
  [React.SetStateAction<string | undefined>]
>()

describe("getDateValidationHandler", () => {
  afterEach(() => {
    onValidate.mockClear()
    setInbuiltValidationStatus.mockClear()
    setInbuiltValidationMessage.mockClear()
  })

  it("uses onValidate if defined", () => {
    const handleValidate = getDateValidationHandler({
      onValidate,
      setInbuiltValidationStatus,
      setInbuiltValidationMessage,
      inputLabel: "Field label",
    })

    const validationResponse = {
      date: new Date("2022-05-01"),
      inputValue: "01/05/2022",
      status: undefined,
      validationMessage: undefined,
      isInvalid: false,
      isDisabled: false,
      isEmpty: false,
      isValidDate: true,
    }

    handleValidate(validationResponse)
    expect(onValidate).toBeCalledWith(validationResponse)
    expect(setInbuiltValidationStatus).not.toBeCalled()
    expect(setInbuiltValidationMessage).not.toBeCalled()
  })

  describe("uses inbuilt validation when onValidate is not defined", () => {
    const handleValidate = getDateValidationHandler({
      onValidate: undefined,
      setInbuiltValidationStatus,
      setInbuiltValidationMessage,
      inputLabel: "Field label",
    })

    test("validation message not defined", () => {
      handleValidate({
        date: new Date("2022-05-01"),
        inputValue: "01/05/2022",
        status: undefined,
        validationMessage: undefined,
        isInvalid: false,
        isDisabled: false,
        isEmpty: false,
        isValidDate: true,
      })
      expect(onValidate).not.toBeCalled()
      expect(setInbuiltValidationStatus).toBeCalledWith(undefined)
      expect(setInbuiltValidationMessage).toBeCalledWith(undefined)
    })

    test("validation message defined", () => {
      handleValidate({
        date: new Date("2022-05-01"),
        inputValue: "01/05/2022",
        status: "error",
        validationMessage: "Custom error message",
        isInvalid: false,
        isDisabled: false,
        isEmpty: false,
        isValidDate: true,
      })
      expect(onValidate).not.toBeCalled()
      expect(setInbuiltValidationStatus).toBeCalledWith("error")
      expect(setInbuiltValidationMessage).toBeCalledWith(
        "Field label: Custom error message"
      )
    })
  })
})
