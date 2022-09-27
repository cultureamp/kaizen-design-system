import React from "react"
import { useDateSegment } from "@react-aria/datepicker"
import {
  DateSegment as DateSegmentType,
  DateFieldState,
} from "@react-stately/datepicker"

import { DateFormatter } from "@internationalized/date"
import { DATE_FORMATTER_CONFIG, formatDateToTime } from "../../utils"
import styles from "./DateSegment.module.scss"

export const DateSegment = ({
  segment,
  state,
}: {
  segment: DateSegmentType
  state: DateFieldState
}) => {
  const ref = React.useRef(null)
  const { segmentProps } = useDateSegment(segment, state, ref)

  const renderText = () => {
    if (segment.isPlaceholder || segment.type !== "hour") {
      return segment.text
    } else {
      // This is to start hours with a leading 0. There didn't seem to be a way to config this out of the box
      return state.dateValue.getHours()
    }
  }
  return (
    <div
      {...segmentProps}
      ref={ref}
      className={`${styles.segment} ${
        segment.isPlaceholder ? styles.placeholder : ""
      }`}
    >
      {segment.text}
      {/* {renderText()} */}
      {/* {segment.isPlaceholder && segment.type !== "dayPeriod"
        ? "00"
        : segment.text} */}
    </div>
  )
}
DateSegment.displayName = "DateSegment"
