import React, { ChangeEvent, useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { enAU } from "date-fns/locale"
import { DateInput, DateInputProps } from "../_subcomponents/DateInput"
import { useDateInputHandlers } from "./useDateInputHandlers"

const Wrapper: React.VFC<Partial<DateInputProps>> = ({
  value = "",
  onChange,
  onFocus,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState<DateInputProps["value"]>(value)
  const handlers = useDateInputHandlers({
    locale: enAU,
    setInputValue,
    onChange,
    onFocus,
  })

  return (
    <div>
      <DateInput
        id="test__date-input-handlers"
        labelText="Label"
        value={inputValue}
        {...restProps}
        {...handlers}
      />
    </div>
  )
}

const getDateInput = () => screen.getByLabelText("Label")

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
})
