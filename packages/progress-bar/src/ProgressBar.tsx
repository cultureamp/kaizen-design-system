import React, { HTMLAttributes, ReactNode } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Box } from "@kaizen/component-library"
import { Heading } from "@kaizen/typography"
import styles from "./ProgressBar.module.scss"

type Mood = "positive" | "informative" | "negative" | "cautionary"

export interface ProgressBarProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  value: number
  max: number
  isAnimating: boolean
  mood: Mood
  subtext?: string
  label?: string
}

const progressClassNames = (props: ProgressBarProps): string => {
  const { mood } = props
  return classnames({
    [styles.positive]: mood === "positive",
    [styles.informative]: mood === "informative",
    [styles.cautionary]: mood === "cautionary",
    [styles.negative]: mood === "negative",
    [styles.isAnimating]: props.isAnimating,
  })
}

function calculatePercentage({ value, max }: ProgressBarProps) {
  return (value / max) * 100.0
}

/**
 * {@link https://cultureamp.design/components/progress-bar/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-progress-bar--default-story Storybook}
 */
export const ProgressBar: React.VFC<ProgressBarProps> = props => {
  const {
    value,
    max,
    isAnimating,
    mood,
    subtext,
    label,
    classNameOverride,
    ...restProps
  } = props
  const percentage = calculatePercentage(props)
  return (
    <div
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      className={classNameOverride}
      {...restProps}
    >
      {label && <Label content={label} />}
      <div className={styles.progressBackground}>
        <div
          className={progressClassNames(props)}
          style={{ transform: `translateX(-${100 - percentage}%` }}
        />
      </div>
      {subtext && (
        <div className={styles.subtext}>
          <Box pt={0.25}>
            <Heading variant="heading-6" tag="p">
              {subtext}
            </Heading>
          </Box>
        </div>
      )}
    </div>
  )
}

ProgressBar.displayName = "ProgressBar"

function Label({ content }: { content: ReactNode }) {
  return (
    <div className={styles.label}>
      <Box pb={0.25}>
        <Heading variant="heading-4" tag="p">
          {content}
        </Heading>
      </Box>
    </div>
  )
}
