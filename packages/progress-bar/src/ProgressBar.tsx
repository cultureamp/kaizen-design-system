import { Box, Heading } from "@kaizen/component-library"
import React from "react"
import styles from "./ProgressBar.scss"

type Props = {
  progress: number
  hasLabel?: boolean
  error: boolean
}

const progressClass = (error: boolean, progress: number) => {
  if (error) return styles.error
  if (progress === 100) return styles.done
  return styles.progress
}

export const ProgressBar = ({
  hasLabel = true,
  progress = 0,
  error = false,
}: Props) => (
  <div>
    {hasLabel && (
      <div className={styles.progressBarLabel}>
        <Box pb={0.25}>
          <Heading variant="heading-4" tag="p">
            {progress}% complete
          </Heading>
        </Box>
      </div>
    )}
    <div className={styles.progressBackground}>
      <div
        className={progressClass(error, progress)}
        style={{ transform: `translateX(-${100 - progress}%` }}
      />
    </div>
  </div>
)
