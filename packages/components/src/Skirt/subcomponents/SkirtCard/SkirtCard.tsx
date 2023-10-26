import React from "react"
import classnames from "classnames"
import { Card, CardProps } from "~components/Card"
import styles from "./SkirtCard.module.scss"

export type SkirtCardProps = CardProps

export const SkirtCard = (props: SkirtCardProps): JSX.Element => {
  const { classNameOverride, ...restProps } = props
  return (
    <Card
      classNameOverride={classnames(styles.wrapper, classNameOverride)}
      {...restProps}
    />
  )
}

SkirtCard.displayName = "SkirtCard"
