import React from "react"
import { render, screen, within } from "@testing-library/react"
import { DateRangeValidationMessage } from "./DateRangeValidationMessage"

describe("<DateRangeValidationMessage />", () => {
  describe("when the consumer has given it a node", () => {
    it("will render a single validation field message", () => {
      render(
        <DateRangeValidationMessage
          validationMessage={{
            dateEnd: {
              status: "error",
              message: <p>Validation message</p>,
            },
          }}
        />
      )
      expect(screen.getByText("Validation message")).toBeVisible()
    })

    it("combines multiple validation messages with the same status", () => {
      render(
        <DateRangeValidationMessage
          validationMessage={{
            dateStart: {
              status: "error",
              message: '"Date from" is not a valid date selection.',
            },
            dateEnd: {
              status: "error",
              message:
                'Date to" cannot be earlier than the "Date from" selection.',
            },
          }}
        />
      )
      const validationList = screen.getByRole("list")
      const items = within(validationList).getAllByRole("listitem")

      expect(items.length).toBe(2)
      expect(screen.getAllByRole("img", { name: "error message" }).length).toBe(
        1
      )
    })
  })

  describe("when consumer passes validationMessage object and has different status", () => {
    it("will render two validation field messages", () => {
      const { getAllByRole } = render(
        <DateRangeValidationMessage
          validationMessage={{
            dateStart: {
              status: "error",
              message: '"Date from" is close to the submission date.',
            },
            dateEnd: {
              status: "caution",
              message:
                '"Date to" cannot be earlier than the "Date from" selection.',
            },
          }}
        />
      )
      expect(getAllByRole("img", { name: "error message" }).length).toBe(1)
      expect(getAllByRole("img", { name: "caution message" }).length).toBe(1)
    })
  })

  it("renders an id when passed in", () => {
    const { container } = render(
      <DateRangeValidationMessage
        dateStartId="date-start-error-message-id"
        dateEndId="date-end-error-message-id"
        validationMessage={{
          dateStart: {
            status: "caution",
            message: '"Date from" is close to the submission date.',
          },
          dateEnd: {
            status: "error",
            message:
              '"Date to" cannot be earlier than the "Date from" selection.',
          },
        }}
      />
    )
    expect(
      container.querySelector("#date-start-error-message-id")
    ).toBeVisible()
    expect(container.querySelector("#date-end-error-message-id")).toBeVisible()
  })
})
