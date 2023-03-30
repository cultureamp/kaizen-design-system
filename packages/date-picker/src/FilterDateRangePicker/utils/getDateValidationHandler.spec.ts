import { ValidationResponse } from "../../types"
import { FieldValidation } from "../types"
import { getDateValidationHandler } from "./getDateValidationHandler"

const onValidate = jest.fn<void, [ValidationResponse]>()
const setInbuiltValidation = jest.fn<void, [FieldValidation]>()

describe("getDateValidationHandler()", () => {
  afterEach(() => {
    onValidate.mockClear()
    setInbuiltValidation.mockClear()
  })

  it("uses onValidate if defined", () => {
    const handleValidate = getDateValidationHandler({
      onValidate,
      setInbuiltValidation,
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
    expect(setInbuiltValidation).not.toBeCalled()
  })

  describe("when onValidate is not defined", () => {
    const handleValidate = getDateValidationHandler({
      onValidate: undefined,
      setInbuiltValidation,
      inputLabel: "Field label",
    })

    describe("without a passed in validation message", () => {
      it("calls the inbuilt validation without a message or status", () => {
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
        expect(setInbuiltValidation).toBeCalledWith({
          status: undefined,
          validationMessage: undefined,
        })
      })
    })

    describe("with passed in validation message", () => {
      it("calls the inbuilt validation with the message and status", () => {
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
        expect(setInbuiltValidation).toBeCalledWith({
          status: "error",
          validationMessage: "Field label: Custom error message",
        })
      })
    })
  })
})
