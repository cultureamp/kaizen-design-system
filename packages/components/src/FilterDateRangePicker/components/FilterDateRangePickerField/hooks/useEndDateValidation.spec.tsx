import React, { useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  useEndDateValidation,
  UseEndDateValidationArgs,
} from "./useEndDateValidation"

const Wrapper = ({
  endDate,
  endDateInputValue,
  ...restProps
}: Partial<UseEndDateValidationArgs> & {
  endDate: Date | undefined
  endDateInputValue: string
}): JSX.Element => {
  const [newDate, setNewDate] = useState<Date | undefined>()
  const {
    status,
    validationMessage,
    validateDate,
    validateEndDateBeforeStartDate,
  } = useEndDateValidation({
    inputLabel: "End date",
    ...restProps,
  })

  return (
    <div>
      <p data-testid="new-date">{newDate ? newDate.toJSON() : "undefined"}</p>
      <p data-testid="status">{status ?? "undefined"}</p>
      <p data-testid="message">{validationMessage ?? "undefined"}</p>
      <button
        type="button"
        onClick={(): void =>
          setNewDate(
            validateDate({
              endDate,
              endDateInputValue,
              startDate: undefined,
              startDateFieldLabel: "Start date",
            })
          )
        }
      >
        Validate end date
      </button>
      <button
        type="button"
        onClick={(): void => {
          if (endDate) {
            const date = validateEndDateBeforeStartDate({
              endDate,
              endDateInputValue,
              startDate: new Date("2023-05-01"),
              startDateFieldLabel: "Start date",
            })
            setNewDate(date)
          }
        }}
      >
        Validate before start date
      </button>
    </div>
  )
}

const validateEndDate = (): void => {
  userEvent.click(screen.getByRole("button", { name: "Validate end date" }))
}
const validateBeforeStartDate = (): void => {
  userEvent.click(
    screen.getByRole("button", { name: "Validate before start date" })
  )
}

describe("useEndDateValidation", () => {
  it("validates end date and updates validation", async () => {
    render(<Wrapper endDate={new Date("potato")} endDateInputValue="potato" />)
    validateEndDate()

    await waitFor(() => {
      expect(screen.getByTestId("new-date").textContent).toBe("undefined")
      expect(screen.getByTestId("status").textContent).toBe("error")
      expect(screen.getByTestId("message").textContent).toBe(
        "End date: potato is an invalid date"
      )
    })
  })

  it("validates before start date and updates validation", async () => {
    render(
      <Wrapper
        endDate={new Date("2023-04-03")}
        endDateInputValue="3 Apr 2023"
      />
    )
    validateBeforeStartDate()

    await waitFor(() => {
      expect(screen.getByTestId("new-date").textContent).toBe("undefined")
      expect(screen.getByTestId("status").textContent).toBe("error")
      expect(screen.getByTestId("message").textContent).toBe(
        'End date: Cannot be earlier than the selection in "Start date"'
      )
    })
  })
})
