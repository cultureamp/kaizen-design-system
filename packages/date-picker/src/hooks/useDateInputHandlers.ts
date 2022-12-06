import { Dispatch, SetStateAction } from "react"
import { DateInputProps } from "../_subcomponents/DateInput"

export type UseDateInputHandlersArgs = {
  setInputValue: Dispatch<SetStateAction<DateInputProps["value"]>>
  onChange?: DateInputProps["onChange"]
}

export const useDateInputHandlers = ({
  setInputValue,
  onChange,
}: UseDateInputHandlersArgs) => {
  const handleChange: DateInputProps["onChange"] = e => {
    setInputValue(e.currentTarget.value)
    onChange?.(e)
  }

  return {
    onChange: handleChange,
  }
}
