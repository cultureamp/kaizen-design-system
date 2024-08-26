import React from "react"
import { LabelledMessage } from "~components/LabelledMessage"
import { DateValidationResponse, ValidationMessage } from "../types"
import { getDateValidationHandler } from "./getDateValidationHandler"

const onValidate = vi.fn<void, [DateValidationResponse]>()
const setInbuiltValidationMessage = vi.fn<
  void,
  [ValidationMessage | undefined]
>()

describe("getDateValidationHandler()", () => {
  afterEach(() => {
    onValidate.mockClear()
    setInbuiltValidationMessage.mockClear()
  })

  it("uses onValidate if defined", () => {
    const handleValidate = getDateValidationHandler({
      onValidate,
      setInbuiltValidationMessage,
      inputLabel: "Field label",
    })

    const validationResponse = {
      date: new Date("2022-05-01"),
      inputValue: "01/05/2022",
      validationMessage: undefined,
      isInvalid: false,
      isDisabled: false,
      isEmpty: false,
      isValidDate: true,
    }

    handleValidate(validationResponse)
    expect(onValidate).toBeCalledWith(validationResponse)
    expect(setInbuiltValidationMessage).not.toBeCalled()
  })

  describe("when onValidate is not defined", () => {
    const handleValidate = getDateValidationHandler({
      onValidate: undefined,
      setInbuiltValidationMessage,
      inputLabel: "Field label",
    })

    describe("without a passed in validation message", () => {
      it("calls the inbuilt validation without a message or status", () => {
        handleValidate({
          date: new Date("2022-05-01"),
          inputValue: "01/05/2022",
          validationMessage: undefined,
          isInvalid: false,
          isDisabled: false,
          isEmpty: false,
          isValidDate: true,
        })
        expect(onValidate).not.toBeCalled()
        expect(setInbuiltValidationMessage).toBeCalledWith(undefined)
      })
    })

    describe("with passed in validation message", () => {
      it("calls the inbuilt validation with the message and status", () => {
        handleValidate({
          date: new Date("2022-05-01"),
          inputValue: "01/05/2022",
          validationMessage: {
            status: "error",
            message: "Custom error message",
          },
          isInvalid: false,
          isDisabled: false,
          isEmpty: false,
          isValidDate: true,
        })
        expect(onValidate).not.toBeCalled()
        expect(setInbuiltValidationMessage).toBeCalledWith({
          status: "error",
          message: (
            <LabelledMessage
              label="Field label"
              message="Custom error message"
            />
          ),
        })
      })
    })
  })
})
