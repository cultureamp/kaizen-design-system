import { DateSegment } from "@react-stately/datepicker"

export const generateSegmentDisplayText = (segment: DateSegment) =>
  segment.isPlaceholder && segment.type !== "dayPeriod" ? "--" : segment.text
