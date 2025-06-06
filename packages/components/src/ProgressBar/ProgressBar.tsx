import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { Heading } from '~components/Heading'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { Label } from './subcomponents/Label'
import { calculatePercentage } from './utils/calculatePercentage'
import styles from './ProgressBar.module.css'

export type ProgressBarMood = {
  /**
   * @deprecated Use `color` prop instead
   */
  mood: 'positive' | 'informative' | 'negative' | 'cautionary'
  color?: never
}

export type ProgressBarColor = {
  /**
   * @deprecated Use `color` prop instead
   */
  mood?: never
  /**
   * If transitioning from `mood`:
   * - `cautionary` -> `yellow`
   * - `informative` -> `blue`
   * - `negative` -> `red`
   * - `positive` -> `green`
   */
  color: 'blue' | 'green' | 'red' | 'yellow'
}

export type ProgressBarBaseProps = {
  /** A value that represents completed progress */
  value: number
  /** A value that sets the maximum progress that can be achieved */
  max: number
  subtext?: string
  label?: string
  /** @default false Adds an animated state to indicate loading progress */
  isAnimating?: boolean
  pattern?: 'stripe'
  /** @default false sets the color of the label and subtext to reversed palette */
  isReversed?: boolean
} & OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, 'color'>>

export type ProgressBarProps = ProgressBarBaseProps & (ProgressBarMood | ProgressBarColor)

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081896891/Progress+Bar Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-progress-bar--docs Storybook}
 */
export const ProgressBar = ({
  value,
  max,
  isAnimating = false,
  mood,
  color,
  subtext,
  label,
  classNameOverride,
  pattern,
  isReversed = false,
  ...restProps
}: ProgressBarProps): JSX.Element => {
  const percentage = calculatePercentage({ value, max })
  return (
    <div
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      className={classnames(styles.progressBar, classNameOverride)}
      {...restProps}
    >
      {label && <Label content={label} isReversed={isReversed} />}
      <div
        className={styles.progressBackground}
        style={{ gridTemplateColumns: `${percentage}% ${100 - percentage}%` }}
      >
        <div
          className={classnames(
            styles.progress,
            color ? styles[color] : styles[mood],
            isAnimating && styles.isAnimating,
            pattern && styles[pattern],
          )}
        />
        <div className={styles.progressIncomplete} />
      </div>

      {subtext && (
        <div className={styles.subtext}>
          <Heading variant="heading-6" tag="p" color={isReversed ? 'white' : 'dark'}>
            {subtext}
          </Heading>
        </div>
      )}
    </div>
  )
}

ProgressBar.displayName = 'ProgressBar'
