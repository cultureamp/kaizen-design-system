import React, { useRef } from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  DateRangeValidationMessage,
  DateRangeValidationMessageProps,
} from "./DateRangeValidationMessage"

const DateRangeInputFieldWrapper = (
  props: Partial<DateRangeValidationMessageProps>
): JSX.Element => (
  <DateRangeValidationMessage
    status={{
      dateEnd: "error",
      dateStart: "caution",
    }}
    validationMessage={{
      dateStart: '"Date from" is close to the submission date.',
      dateEnd: '"Date to" cannot be earlier than the "Date from" selection.',
    }}
  />
)

describe("<DateRangeValidationMessage />", () => {
  describe("will render a single validation field message", () => {
    it("when the consumer has given it a string", () => {
      render(
        <DateRangeValidationMessage
          errorMessageId="error-message-id"
          status={{
            dateEnd: "error",
          }}
          validationMessage={"Validation message"}
        />
      )
      expect(screen.getByText("Validation message")).toBeVisible()
    })

    it("when the consumer has given it a node", () => {
      render(
        <DateRangeValidationMessage
          errorMessageId="error-message-id"
          status={{
            dateEnd: "error",
          }}
          validationMessage={<p>Validation message</p>}
        />
      )
      expect(screen.getByText("Validation message")).toBeVisible()
    })

    it("when consumer passes validationMessage object but has the same status", () => {
      const { container } = render(
        <DateRangeValidationMessage
          errorMessageId="error-message-id"
          status={{
            dateEnd: "error",
            dateStart: "error",
          }}
          validationMessage={{
            dateStart: '"Date from" is not a valid date selection.',
            dateEnd:
              'Date to" cannot be earlier than the "Date from" selection.',
          }}
        />
      )
      expect(container.getElementsByClassName("error").length).toBe(1)
    })
    describe("will render two validation field messages", () => {
      it("when consumer passes validationMessage object and has different status", () => {
        const { container } = render(
          <DateRangeValidationMessage
            errorMessageId="error-message-id"
            status={{
              dateEnd: "error",
              dateStart: "caution",
            }}
            validationMessage={{
              dateStart: '"Date from" is close to the submission date.',
              dateEnd:
                '"Date to" cannot be earlier than the "Date from" selection.',
            }}
          />
        )
        expect(container.getElementsByClassName("error").length).toBe(1)
        expect(container.getElementsByClassName("caution").length).toBe(1)
      })
    })
  })
})
