import { DateRange } from "../subcomponents/FilterDateRangePickerField/types"

export const isCompleteDateRange = (
  dateRange: DateRange | undefined
): dateRange is { from: Date; to: Date } =>
  dateRange?.from !== undefined && dateRange?.to !== undefined
