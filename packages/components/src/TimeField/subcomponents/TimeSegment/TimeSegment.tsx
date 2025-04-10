import React from 'react'
import { useDateSegment } from '@react-aria/datepicker'
import { type DateFieldState, type DateSegment } from '@react-stately/datepicker'
import classnames from 'classnames'
import { generateSegmentDisplayText } from './utils/generateSegmentDisplayText'
import styles from './TimeSegment.module.scss'

export type TimeSegmentProps = {
  segment: DateSegment
  state: DateFieldState
  hasPadding?: boolean
}

export const TimeSegment = ({
  segment,
  state,
  hasPadding = true,
}: TimeSegmentProps): JSX.Element => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { segmentProps } = useDateSegment(segment, state, ref)

  // Chrome has a bug where `contenteditable` elements receive focus from external clicks.
  // This (in combination with the invisible character &#8203;) creates boundaries
  // for the element.
  // https://stackoverflow.com/a/34445203
  return (
    <span className={styles.timeSegmentWrapper}>
      &#8203;
      <span
        {...segmentProps}
        ref={ref}
        className={classnames(
          styles.timeSegment,
          segment.type === 'literal' && styles.literal,
          segment.isPlaceholder && styles.placeholder,
          segment.type === 'dayPeriod' && styles.dayPeriod,
          hasPadding && styles.hasPadding,
        )}
      >
        {generateSegmentDisplayText(segment)}
      </span>
      &#8203;
    </span>
  )
}

TimeSegment.displayName = 'TimeSegment'
