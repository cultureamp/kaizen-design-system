import { DateRangeValidationStatus } from "./types"

let testValue: DateRangeValidationStatus

describe("DateRangeValidationStatus", () => {
  test("valid validation status", () => {
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

  describe("invalid validation status", () => {
    test("status only", () => {
      /** @ts-expect-error */
      testValue = { status: { dateStart: "error" } }
      /** @ts-expect-error */
      testValue = { status: { dateEnd: "error" } }
      /** @ts-expect-error */
      testValue = { status: { dateStart: "caution", dateEnd: "error" } }
    })

    test("validation message only", () => {
      /** @ts-expect-error */
      testValue = { validationMessage: { dateStart: "Message" } }
      /** @ts-expect-error */
      testValue = { validationMessage: { dateEnd: "Message" } }
      /** @ts-expect-error */
      testValue = {
        validationMessage: { dateStart: "caution", dateEnd: "Message" },
      }
    })

    test("status for start date with incompatible validation message", () => {
      /** @ts-expect-error */
      testValue = {
        status: { dateStart: "error" },
        validationMessage: { dateEnd: "Message" },
      }
      /** @ts-expect-error */
      testValue = {
        status: { dateStart: "error" },
        validationMessage: { dateStart: "Message", dateEnd: "Message" },
      }
    })

    test("status for end date with incompatible validation message", () => {
      /** @ts-expect-error */
      testValue = {
        status: { dateEnd: "error" },
        validationMessage: { dateStart: "Message" },
      }
      /** @ts-expect-error */
      testValue = {
        status: { dateEnd: "error" },
        validationMessage: { dateStart: "Message", dateEnd: "Message" },
      }
    })

    test("status for both start date and end date with incompatible validation message", () => {
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
  })
})
