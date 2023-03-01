import React from "react"
import { render, screen, within } from "@testing-library/react"
import { DateRangeValidationMessage } from "./DateRangeValidationMessage"

describe("<DateRangeValidationMessage />", () => {
  describe("will render a single validation field message", () => {
    test("when the consumer has given it a node", () => {
      render(
        <DateRangeValidationMessage
          dateEndId="date-end-error-message-id"
          status={{
            dateEnd: "error",
          }}
          validationMessage={{
            dateEnd: <p>Validation message</p>,
          }}
        />
      )
      expect(screen.getByText("Validation message")).toBeVisible()
    })

    it("combines multiple validation messages with the same status", () => {
      const { container } = render(
        <DateRangeValidationMessage
          dateStartId="date-start-error-message-id"
          dateEndId="date-end-error-message-id"
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
      const validationList = screen.getByRole("list")
      const { getAllByRole } = within(validationList)
      const items = getAllByRole("listitem")

      expect(items.length).toBe(2)

      expect(container.getElementsByClassName("error").length).toBe(1)
    })
    describe("will render two validation field messages", () => {
      test("when consumer passes validationMessage object and has different status", () => {
        const { container } = render(
          <DateRangeValidationMessage
            dateStartId="date-start-error-message-id"
            dateEndId="date-end-error-message-id"
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
