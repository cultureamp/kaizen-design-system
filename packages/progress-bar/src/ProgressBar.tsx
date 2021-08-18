import { Box, Heading } from "@kaizen/component-library"
import React from "react"
import classnames from "classnames"
import styles from "./ProgressBar.scss"

type Props = {
  value: Value
  variant: Variant
  mood: Mood
  subtext?: string
}

type Value =
  | { kind: "percentage"; value: number }
  | { kind: "fraction"; value: number; max: number }

type Mood = "positive" | "informative" | "negative" | "cautionary"

type Variant = "static" | "loading"

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

function calculatePercentage(value: Value) {
  return value.kind === "percentage"
    ? value.value
    : (value.value / value.max) * 100.0
}

function isAnimating({ variant, mood, value }: Props) {
  if (variant === "static") {
    return false
  }
  if (mood === "negative") {
    return false
  }
  if (calculatePercentage(value) === 100) {
    return false
  }
  return true
}

export function ProgressBar(props: Props) {
  const { value, subtext } = props
  const percentage = calculatePercentage(value)
  return (
    <div
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <Label {...props} />
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

function Label(props: Props) {
  const percentage = calculatePercentage(props.value)
  const content =
    props.value.kind === "percentage"
      ? `${Math.round(percentage)}%`
      : `${props.value.value}/${props.value.max}`
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
