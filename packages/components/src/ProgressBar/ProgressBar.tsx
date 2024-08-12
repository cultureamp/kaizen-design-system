import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { Heading } from "~components/Heading"
import { OverrideClassName } from "~types/OverrideClassName"
import { Label } from "./subcomponents/Label"
import { calculatePercentage } from "./utils/calculatePercentage"
import styles from "./ProgressBar.module.scss"

export type ProgressBarMood = {
  /**
   * @deprecated Use `color` prop instead
   */
  mood: "positive" | "informative" | "negative" | "cautionary"
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
  color: "blue" | "green" | "red" | "yellow"
}

export type ProgressBarBaseProps = {
  /** A value that represents completed progress */
  value: number
  /** A value that sets the maximum progress that can be achieved */
  max: number
  /** Adds an animated state to indicate loading progress */
  isAnimating: boolean
  subtext?: string
  label?: string
  isReversed: boolean
} & OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "color">>

export type ProgressBarProps = ProgressBarBaseProps &
  (PogressBarMood | PogressBarColor)

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081896891/Progress+Bar Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-progress-bar--docs Storybook}
 */
export const ProgressBar = ({
  value,
  max,
  isAnimating,
  mood,
  color,
  subtext,
  label,
  classNameOverride,
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
      className={classNameOverride}
      {...restProps}
    >
      {label && <Label content={label} isReversed={isReversed} />}
      <div className={styles.progressBackground}>
        <div
          className={classnames(
            styles.progress,
            color ? styles[color] : styles[mood],
            isAnimating && styles.isAnimating
          )}
          style={{ transform: `translateX(-${100 - percentage}%` }}
        />
      </div>
      {subtext && (
        <div className={styles.subtext}>
          <Heading
            variant="heading-6"
            tag="p"
            color={isReversed ? "white" : "dark"}
          >
            {subtext}
          </Heading>
        </div>
      )}
    </div>
  )
}

ProgressBar.displayName = "ProgressBar"
