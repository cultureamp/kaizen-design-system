import { DateRange } from "@kaizen/date-picker/src/types"

export const isCompleteDateRange = (
  dateRange: DateRange | undefined
): dateRange is { from: Date; to: Date } =>
  dateRange?.from !== undefined && dateRange?.to !== undefined
