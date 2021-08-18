import { Box, Heading } from "@kaizen/component-library"
import React from "react"
import classnames from "classnames"
import styles from "./ProgressBar.scss"

type Props = {
  variant: "static" | "loading"
  progressPercentage: number
  mood: Mood
  subtext?: string
}
type Mood = "positive" | "informative" | "negative" | "cautionary"

const progressClassNames = (props: Props) => {
  const { mood } = props
  return classnames({
    [styles.positive]: mood === "positive",
    [styles.informative]: mood === "informative",
    [styles.cautionary]: mood === "cautionary",
    [styles.negative]: mood === "negative",
    [styles.animating]: isAnimating(props),
  })
}

function isAnimating({ variant, mood, progressPercentage }: Props) {
  if (variant === "static") {
    return false
  }
  if (mood === "negative") {
    return false
  }
  if (progressPercentage === 100) {
    return false
  }
  return true
}

export const ProgressBar = (props: Props) => {
  const { progressPercentage, subtext } = props
  return (
    <div
      role="progressbar"
      aria-valuenow={progressPercentage}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className={styles.label}>
        <Box pb={0.25}>
          <Heading variant="heading-4" tag="p">
            {progressPercentage}%
          </Heading>
        </Box>
      </div>
      <div className={styles.progressBackground}>
        <div
          className={progressClassNames(props)}
          style={{ transform: `translateX(-${100 - progressPercentage}%` }}
        />
      </div>
      {subtext != null ? (
        <div className={styles.subtext}>
          <Box pt={0.25}>
            <Heading variant="heading-6" tag="p">
              {subtext}
            </Heading>
          </Box>
        </div>
      ) : null}
    </div>
  )
}
