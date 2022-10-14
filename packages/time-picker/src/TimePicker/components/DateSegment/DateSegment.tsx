import React from "react"
import { useDateSegment } from "@react-aria/datepicker"
import classNames from "classnames"
import {
  DateSegment as DateSegmentType,
  DateFieldState,
} from "@react-stately/datepicker"
import styles from "./DateSegment.module.scss"
import { generateSegmentDisplayText } from "./utils/generateSegmentDisplayText"

export interface DateSegmentProps {
  segment: DateSegmentType
  state: DateFieldState
}

export const DateSegment: React.VFC<DateSegmentProps> = ({
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
        styles.segment,
        segment.type === "literal" && styles.literal,
        segment.isPlaceholder && styles.placeholder,
        segment.type === "dayPeriod" && styles.dayPeriod
      )}
    >
      {generateSegmentDisplayText(segment)}
    </div>
  )
}

DateSegment.displayName = "DateSegment"
