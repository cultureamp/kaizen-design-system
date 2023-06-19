import { DateRange } from "~types/DatePicker"

export const isCompleteDateRange = (
  dateRange: DateRange | undefined
): dateRange is { from: Date; to: Date } =>
  dateRange?.from !== undefined && dateRange?.to !== undefined
