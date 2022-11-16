import React from "react"
import classNames from "classnames"
import { Card, CardProps } from "@kaizen/draft-card"
import styles from "./SkirtCard.module.scss"

export type SkirtCardProps = CardProps

export const SkirtCard: React.VFC<SkirtCardProps> = props => {
  const { classNameOverride, ...restProps } = props
  return (
    <Card
      classNameOverride={classNames(styles.wrapper, classNameOverride)}
      {...restProps}
    />
  )
}

SkirtCard.displayName = "SkirtCard"
