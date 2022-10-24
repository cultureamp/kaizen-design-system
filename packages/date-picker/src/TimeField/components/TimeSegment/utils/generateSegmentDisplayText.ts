import { DateSegment } from "@react-stately/datepicker"

export const generateSegmentDisplayText = (segment: DateSegment): string =>
  segment.isPlaceholder && segment.type !== "dayPeriod" ? "--" : segment.text
