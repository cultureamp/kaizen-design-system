import React from "react"
import { useDateSegment } from "@react-aria/datepicker"
import {
  DateSegment as DateSegmentType,
  DateFieldState,
} from "@react-stately/datepicker"

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
  return (
    <div
      {...segmentProps}
      ref={ref}
      className={`${styles.segment} ${
        segment.isPlaceholder ? styles.placeholder : ""
      }`}
    >
      {segment.text}
      {/* {segment.isPlaceholder && segment.type !== "dayPeriod"
        ? "00"
        : segment.text} */}
    </div>
  )
}
DateSegment.displayName = "DateSegment"
