import { DateRangeValidationStatus } from "./types"

let testValue: DateRangeValidationStatus

describe("DateRangeValidationStatus", () => {
  it("does not error for valid validation status cases", () => {
    testValue = {}
    testValue = { status: undefined }
    testValue = { validationMessage: undefined }
    testValue = { status: undefined, validationMessage: undefined }
    testValue = {
      status: { dateStart: "error" },
      validationMessage: { dateStart: "Message" },
    }
    testValue = {
      status: { dateEnd: "error" },
      validationMessage: { dateEnd: "Message" },
    }
    testValue = {
      status: { dateStart: "caution", dateEnd: "error" },
      validationMessage: { dateStart: "Message", dateEnd: "Message" },
    }
  })

  describe("Invalid validation status cases", () => {
    it("errors when the status is missing a corresponsing validation message", () => {
      /** @ts-expect-error */
      testValue = { status: { dateStart: "error" } }
      /** @ts-expect-error */
      testValue = { status: { dateEnd: "error" } }
      /** @ts-expect-error */
      testValue = { status: { dateStart: "caution", dateEnd: "error" } }
      /** @ts-expect-error */
      testValue = {
        status: { dateStart: "caution", dateEnd: "error" },
        validationMessage: { dateStart: "Message" },
      }
      /** @ts-expect-error */
      testValue = {
        status: { dateStart: "caution", dateEnd: "error" },
        validationMessage: { dateEnd: "Message" },
      }
    })

    it("errors when the validation message is missing a corresponding status", () => {
      /** @ts-expect-error */
      testValue = { validationMessage: { dateStart: "Message" } }
      /** @ts-expect-error */
      testValue = { validationMessage: { dateEnd: "Message" } }
      /** @ts-expect-error */
      testValue = {
        validationMessage: { dateStart: "caution", dateEnd: "Message" },
      }
      /** @ts-expect-error */
      testValue = {
        status: { dateStart: "error" },
        validationMessage: { dateStart: "Message", dateEnd: "Message" },
      }
      /** @ts-expect-error */
      testValue = {
        status: { dateEnd: "error" },
        validationMessage: { dateStart: "Message", dateEnd: "Message" },
      }
    })

    it("errors when status and validation message are mismatched", () => {
      /** @ts-expect-error */
      testValue = {
        status: { dateStart: "error" },
        validationMessage: { dateEnd: "Message" },
      }
      /** @ts-expect-error */
      testValue = {
        status: { dateEnd: "error" },
        validationMessage: { dateStart: "Message" },
      }
    })
  })
})
