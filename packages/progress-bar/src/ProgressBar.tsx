import { Box, Heading } from "@kaizen/component-library"
import React from "react"
import styles from "./ProgressBar.scss"
import classnames from "classnames"

type Props = {
  progress: number
  hasLabel?: boolean
  mood: Mood
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

export const ProgressBar = ({ hasLabel = true, progress, mood }: Props) => (
  <div>
    {hasLabel && (
      <div className={styles.progressBarLabel}>
        <Box pb={0.25}>
          <Heading variant="heading-4" tag="p">
            {progress}%
          </Heading>
        </Box>
      </div>
    )}
    <div className={styles.progressBackground}>
      <div
        className={progressClassNames(mood, progress)}
        style={{ transform: `translateX(-${100 - progress}%` }}
      />
    </div>
  </div>
)
