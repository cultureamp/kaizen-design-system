import React, { HTMLAttributes } from 'react'

import { Unstyled } from '@storybook/blocks'
import classNames from 'classnames'
import styles from './SbContent.module.scss'

/** A sensible default and convenience wrapper for Storybook text so we don't have to wrap it in an unstyled all the time */
export const SbContent = ({
  className,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <Unstyled>
    <div {...otherProps} className={classNames(styles.SbContent, className)} />
  </Unstyled>
)

SbContent.displayName = 'SbContent'
