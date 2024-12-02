import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'
import styles from './StickerSheetHeader.module.css'

export type StickerSheetHeaderProps = {
  children: React.ReactNode
  isReversed?: boolean
} & HTMLAttributes<HTMLDivElement>

export const StickerSheetHeader = ({
  children,
  isReversed = false,
  className,
  ...restProps
}: StickerSheetHeaderProps): JSX.Element => (
  <div
    className={classnames(styles.stickerSheetHeader, isReversed && styles.isReversed, className)}
    {...restProps}
  >
    {children}
  </div>
)

StickerSheetHeader.displayName = 'StickerSheet.Header'
