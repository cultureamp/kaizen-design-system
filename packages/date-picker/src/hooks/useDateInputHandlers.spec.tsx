import React, { ChangeEvent, FocusEvent, KeyboardEvent, useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { enAU } from "date-fns/locale"
import { CalendarSingle } from "../_subcomponents/Calendar"
import { DateInput, DateInputProps } from "../_subcomponents/DateInput"
import { Matcher } from "../types"
import {
  useDateInputHandlers,
  UseDateInputHandlersArgs,
} from "./useDateInputHandlers"

const onDateChange = jest.fn<void, [Date | undefined]>()

const Wrapper = ({
  value = "",
  locale = enAU,
  disabledDays,
  ...restProps
}: Partial<UseDateInputHandlersArgs> & { value?: string }): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(value)
  const handlers = useDateInputHandlers({
    locale,
    disabledDays,
    onDateChange,
    setInputValue,
    ...restProps,
  })

  return (
    <div>
      <DateInput
        id="test__date-input-handlers"
        labelText="Label"
        value={inputValue}
        {...handlers}
      />
      <CalendarSingle defaultMonth={new Date("2022-05-01")} />
    </div>
  )
}

const getDateInput = (): HTMLInputElement => screen.getByLabelText("Label")

describe("useDateInputHandlers", () => {
  describe("onChange", () => {
    it("updates input value", async () => {
      render(<Wrapper />)
      const input = getDateInput()
      expect(input).toHaveValue("")

      await userEvent.type(input, "1")
      await waitFor(() => {
        expect(input).toHaveValue("1")
      })
    })

    it("calls custom onChange when provided", async () => {
      const onChange = jest.fn<void, [ChangeEvent]>()
      render(<Wrapper onChange={onChange} />)
      const input = getDateInput()

      await userEvent.type(input, "1")
      await waitFor(() => {
        expect(onChange).toHaveBeenCalled()
      })
    })
  })

  describe("onFocus", () => {
    it("transforms input value when it is a valid date", async () => {
      render(<Wrapper value="1 May 2022" />)
      const input = getDateInput()
      expect(input).toHaveValue("1 May 2022")

      await userEvent.click(input)
      await waitFor(() => {
        expect(input).toHaveValue("01/05/2022")
      })
    })

    it("does not transform input value when it is an invalid date", async () => {
      render(<Wrapper value="potato" />)
      const input = getDateInput()
      expect(input).toHaveValue("potato")

      await userEvent.click(input)
      await waitFor(() => {
        expect(input).toHaveValue("potato")
      })
    })

    it("calls custom onFocus when provided", async () => {
      const onFocus = jest.fn<void, [ChangeEvent]>()
      render(<Wrapper onFocus={onFocus} />)
      const input = getDateInput()

      await userEvent.click(input)
      await waitFor(() => {
        expect(onFocus).toHaveBeenCalled()
      })
    })
  })

  describe("onBlur", () => {
    it("does not call onBlur when selecting a day in the calendar", async () => {
      const onBlur = jest.fn<void, [FocusEvent]>()
      render(<Wrapper onBlur={onBlur} />)
      const input = getDateInput()
      await userEvent.click(input)
      const dayButton = screen.getByRole("button", { name: "1st May (Sunday)" })
      await userEvent.click(dayButton)
      await waitFor(() => {
        expect(onBlur).not.toHaveBeenCalled()
      })
    })

    it("transforms input value when it is a valid date", async () => {
      render(<Wrapper />)
      const input = getDateInput()
      await userEvent.type(input, "01/05/2022")
      await userEvent.tab()
      await waitFor(() => {
        expect(input).toHaveValue("1 May 2022")
        expect(onDateChange).toBeCalledWith(new Date("2022-05-1"))
      })
    })

    it("does not transform input value when it is an invalid date", async () => {
      render(<Wrapper />)
      const input = getDateInput()
      await userEvent.type(input, "potato")
      await userEvent.tab()
      await waitFor(() => {
        expect(input).toHaveValue("potato")
        // @todo: fix this; now returns the invalid date
        expect(onDateChange).toBeCalledWith(undefined)
      })
    })

    it("does not transform input value when it is a disabled date", async () => {
      render(<Wrapper disabledDays={[new Date("2022-05-01")]} />)
      const input = getDateInput()
      await userEvent.type(input, "01/05/2022")
      await userEvent.tab()
      await waitFor(() => {
        expect(input).toHaveValue("01/05/2022")
        // @todo: fix this; now returns the invalid date
        expect(onDateChange).toBeCalledWith(undefined)
      })
    })

    it("calls custom onBlur when provided", async () => {
      const onBlur = jest.fn<void, [FocusEvent]>()
      render(<Wrapper onBlur={onBlur} />)
      const input = getDateInput()
      await userEvent.click(input)
      await userEvent.tab()
      await waitFor(() => {
        expect(onBlur).toHaveBeenCalled()
      })
    })
  })

  describe("onKeyDown - Enter", () => {
    it("returns a date when date is valid", async () => {
      render(<Wrapper />)
      const input = getDateInput()
      await userEvent.type(input, "01/05/2022{Enter}")
      await waitFor(() => {
        expect(onDateChange).toBeCalledWith(new Date("2022-05-01"))
      })
    })

    it("returns undefined when date is invalid", async () => {
      render(<Wrapper />)
      const input = getDateInput()
      await userEvent.type(input, "potato{Enter}")
      await waitFor(() => {
        expect(onDateChange).toBeCalledWith(undefined)
      })
    })

    it("calls custom onKeyDown when provided", async () => {
      const onKeyDown = jest.fn<void, [KeyboardEvent]>()
      render(<Wrapper onKeyDown={onKeyDown} />)
      const input = getDateInput()
      await userEvent.type(input, "{Enter}")
      await waitFor(() => {
        expect(onKeyDown).toHaveBeenCalled()
      })
    })
  })
})
