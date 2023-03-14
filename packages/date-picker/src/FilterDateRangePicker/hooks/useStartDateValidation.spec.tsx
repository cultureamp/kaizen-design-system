import React, { useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  useStartDateValidation,
  UseStartDateValidationArgs,
} from "./useStartDateValidation"

const Wrapper = ({
  date,
  inputValue,
  ...restProps
}: Partial<UseStartDateValidationArgs> & {
  date: Date | undefined
  inputValue: string
}): JSX.Element => {
  const [newDate, setNewDate] = useState<Date | undefined>()
  const { status, validationMessage, validateDate } = useStartDateValidation({
    inputLabel: "Start date",
    ...restProps,
  })

  return (
    <div>
      <p data-testid="new-date">{newDate ? newDate.toJSON() : "undefined"}</p>
      <p data-testid="status">{status ?? "undefined"}</p>
      <p data-testid="message">{validationMessage ?? "undefined"}</p>
      <button
        type="button"
        onClick={(): void => setNewDate(validateDate(date, inputValue))}
      >
        Validate
      </button>
    </div>
  )
}

const validateValue = (): void => {
  userEvent.click(screen.getByRole("button", { name: "Validate" }))
}

describe("useDateInputHandlers", () => {
  test("valid date", async () => {
    render(<Wrapper date={new Date("2022-05-01")} inputValue="1 May 2022" />)
    validateValue()

    await waitFor(() => {
      expect(screen.getByTestId("new-date").textContent).toBe(
        "2022-05-01T00:00:00.000Z"
      )
      expect(screen.getByTestId("status").textContent).toBe("undefined")
      expect(screen.getByTestId("message").textContent).toBe("undefined")
    })
  })

  test("invalid date", async () => {
    render(<Wrapper date={new Date("potato")} inputValue="potato" />)
    validateValue()

    await waitFor(() => {
      expect(screen.getByTestId("new-date").textContent).toBe("undefined")
      expect(screen.getByTestId("status").textContent).toBe("error")
      expect(screen.getByTestId("message").textContent).toBe(
        "Start date: potato is an invalid date"
      )
    })
  })

  test("consumer controlled validation", async () => {
    render(
      <Wrapper
        date={new Date("potato")}
        inputValue="potato"
        onValidate={(): void => undefined}
        status="caution"
        validationMessage="Jelly-filled doughnuts"
      />
    )
    validateValue()

    await waitFor(() => {
      expect(screen.getByTestId("new-date").textContent).toBe("undefined")
      expect(screen.getByTestId("status").textContent).toBe("caution")
      expect(screen.getByTestId("message").textContent).toBe(
        "Jelly-filled doughnuts"
      )
    })
  })
})
