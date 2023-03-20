import React, { HTMLAttributes, ReactNode } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Box } from "@components/Box"
import { Heading } from "@components/typography"
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
  isReversed: boolean
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

function calculatePercentage({ value, max }: ProgressBarProps): number {
  return (value / max) * 100.0
}

/**
 * {@link https://cultureamp.design/components/progress-bar/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-progress-bar--default-story Storybook}
 */
export const ProgressBar = (props: ProgressBarProps): JSX.Element => {
  const {
    value,
    max,
    isAnimating,
    mood,
    subtext,
    label,
    classNameOverride,
    isReversed = false,
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
      {label && <Label content={label} isReversed={isReversed} />}
      <div className={styles.progressBackground}>
        <div
          className={progressClassNames(props)}
          style={{ transform: `translateX(-${100 - percentage}%` }}
        />
      </div>
      {subtext && (
        <div className={styles.subtext}>
          <Box pt={0.25}>
            <Heading
              variant="heading-6"
              tag="p"
              color={isReversed ? "white" : "dark"}
            >
              {subtext}
            </Heading>
          </Box>
        </div>
      )}
    </div>
  )
}

ProgressBar.displayName = "ProgressBar"

const Label = ({
  content,
  isReversed = false,
}: {
  content: ReactNode
  isReversed: boolean
}): JSX.Element => (
  <div className={styles.label}>
    <Box pb={0.25}>
      <Heading
        variant="heading-4"
        tag="p"
        color={isReversed ? "white" : "dark"}
      >
        {content}
      </Heading>
    </Box>
  </div>
)
