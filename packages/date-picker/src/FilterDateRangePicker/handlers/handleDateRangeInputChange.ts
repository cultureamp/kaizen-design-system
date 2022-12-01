export type DateRangeInputChangeHandlerArgs = {
  onNewInputValue: (value: string) => void
  newValue: string
}

export const handleDateRangeInputChange = ({
  onNewInputValue,
  newValue,
}: DateRangeInputChangeHandlerArgs): void => {
  onNewInputValue(newValue)
}
