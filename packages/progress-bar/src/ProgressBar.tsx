import { Box, Heading } from "@kaizen/component-library"
import React, { ReactNode } from "react"
import classnames from "classnames"
import styles from "./ProgressBar.scss"

type Props = {
  value: number
  max: number
  isAnimating: boolean
  mood: Mood
  subtext?: string
  label?: string
}

type Mood = "positive" | "informative" | "negative" | "cautionary"

const progressClassNames = (props: Props) => {
  const { mood } = props
  return classnames({
    [styles.positive]: mood === "positive",
    [styles.informative]: mood === "informative",
    [styles.cautionary]: mood === "cautionary",
    [styles.negative]: mood === "negative",
    [styles.isAnimating]: props.isAnimating,
  })
}

function calculatePercentage({ value, max }: Props) {
  return (value / max) * 100.0
}

export function ProgressBar(props: Props) {
  const { subtext } = props
  const percentage = calculatePercentage(props)
  return (
    <div
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {props.label == null ? null : <Label content={props.label} />}
      <div className={styles.progressBackground}>
        <div
          className={progressClassNames(props)}
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
}

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
