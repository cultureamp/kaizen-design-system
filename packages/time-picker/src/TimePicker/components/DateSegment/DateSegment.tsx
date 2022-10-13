import React from "react"
import { useDateSegment } from "@react-aria/datepicker"
import {
  DateSegment as DateSegmentType,
  DateFieldState,
} from "@react-stately/datepicker"

import classNames from "classnames"
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
      className={classNames(styles.segment, {
        [styles.literal]: segment.type === "literal",
        [styles.placeholder]: segment.isPlaceholder,
        [styles.dayPeriod]: segment.type === "dayPeriod",
      })}
    >
      {segment.isPlaceholder && segment.type !== "dayPeriod"
        ? "--"
        : segment.text}
    </div>
  )
}
DateSegment.displayName = "DateSegment"
