import React from 'react'
import classnames from 'classnames'
import { Card, type CardProps } from '~components/Card'
import styles from './SkirtCard.module.scss'

export type SkirtCardProps = CardProps

/**
 * @deprecated This component will be removed in v2. Use a regular Card component instead.
 */

export const SkirtCard = (props: SkirtCardProps): JSX.Element => {
  const { classNameOverride, ...restProps } = props
  return <Card classNameOverride={classnames(styles.wrapper, classNameOverride)} {...restProps} />
}

SkirtCard.displayName = 'SkirtCard'
