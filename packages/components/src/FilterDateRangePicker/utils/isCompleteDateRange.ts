import { DateRange } from "~types/date-controls"

export const isCompleteDateRange = (
  dateRange: DateRange | undefined
): dateRange is { from: Date; to: Date } =>
  dateRange?.from !== undefined && dateRange?.to !== undefined
