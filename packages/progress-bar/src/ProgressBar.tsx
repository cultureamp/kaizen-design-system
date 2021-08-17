import { Box, Heading } from "@kaizen/component-library"
import React from "react"
import styles from "./ProgressBar.scss"
import classnames from "classnames"

type Props = {
  percentage: number
  mood: Mood
  subtext?: string
}
type Mood = "positive" | "informative" | "negative" | "cautionary"

const progressClassNames = (mood: Mood, progress: number) => {
  return classnames({
    [styles.finished]: progress === 100,
    [styles.positive]: mood === "positive",
    [styles.informative]: mood === "informative",
    [styles.cautionary]: mood === "cautionary",
    [styles.negative]: mood === "negative",
  })
}

export const ProgressBar = ({ percentage, mood, subtext }: Props) => (
  <div>
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
