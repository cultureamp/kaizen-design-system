import React, { ChangeEvent, useState } from "react"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { enAU } from "date-fns/locale"
import { DateInput, DateInputProps } from "../_subcomponents/DateInput"
import { useDateInputHandlers } from "./useDateInputHandlers"

const Wrapper: React.VFC<Partial<DateInputProps>> = ({
  value = "",
  onChange,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState<DateInputProps["value"]>(value)
  const handlers = useDateInputHandlers({
    locale: enAU,
    setInputValue,
    onChange,
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
})
