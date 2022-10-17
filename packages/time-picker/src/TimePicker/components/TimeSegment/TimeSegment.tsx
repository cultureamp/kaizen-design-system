import React from "react"
import { useDateSegment } from "@react-aria/datepicker"
import { DateSegment, DateFieldState } from "@react-stately/datepicker"
import classNames from "classnames"
import styles from "./TimeSegment.module.scss"
import { generateSegmentDisplayText } from "./utils/generateSegmentDisplayText"

export interface TimeSegmentProps {
  segment: DateSegment
  state: DateFieldState
}

export const TimeSegment: React.VFC<TimeSegmentProps> = ({
  segment,
  state,
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { segmentProps } = useDateSegment(segment, state, ref)

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={classNames(
        styles.timeSegment,
        segment.type === "literal" && styles.literal,
        segment.isPlaceholder && styles.placeholder,
        segment.type === "dayPeriod" && styles.dayPeriod
      )}
    >
      {generateSegmentDisplayText(segment)}
    </div>
  )
}

TimeSegment.displayName = "TimeSegment"
