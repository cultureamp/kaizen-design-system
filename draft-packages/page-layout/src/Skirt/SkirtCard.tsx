import * as React from "react"
import { Card, CardProps } from "@kaizen/draft-card"
import classNames from "classnames"
import styles from "../../styles/SkirtCard.module.scss"

export const SkirtCard = (props: CardProps) => {
  const { classNameAndIHaveSpokenToDST } = props
  return (
    <Card
      {...props}
      classNameAndIHaveSpokenToDST={classNames(
        styles.wrapper,
        classNameAndIHaveSpokenToDST
      )}
    ></Card>
  )
}
