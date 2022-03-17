import * as React from "react"
import { Card, CardProps } from "@kaizen/draft-card"
import classNames from "classnames"
import styles from "./SkirtCard.scss"

export const SkirtCard = (props: CardProps) => {
  const { classNameOverride } = props
  return (
    <Card
      {...props}
      classNameOverride={classNames(styles.wrapper, classNameOverride)}
    ></Card>
  )
}
