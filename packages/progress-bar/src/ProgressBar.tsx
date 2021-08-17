import { Box, Heading } from "@kaizen/component-library"
import React from "react"
import classnames from "classnames"
import styles from "./ProgressBar.scss"

type Props = {
  percentage: number
  mood: Mood
  subtext?: string
}
type Mood = "positive" | "informative" | "negative" | "cautionary"

const progressClassNames = (mood: Mood, progress: number) =>
  classnames({
    [styles.positive]: mood === "positive",
    [styles.informative]: mood === "informative",
    [styles.cautionary]: mood === "cautionary",
    [styles.negative]: mood === "negative",
    [styles.finished]: progress === 100,
  })

export const ProgressBar = ({ percentage, mood, subtext }: Props) => (
  <div
    role="progressbar"
    aria-valuenow={percentage}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div className={styles.label}>
      <Box pb={0.25}>
        <Heading variant="heading-4" tag="p">
          {percentage}%
        </Heading>
      </Box>
    </div>
    <div className={styles.progressBackground}>
      <div
        className={progressClassNames(mood, percentage)}
        style={{ transform: `translateX(-${100 - percentage}%` }}
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
