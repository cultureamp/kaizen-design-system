import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'
import { StickerSheetCell } from '../StickerSheetCell'
import { StickerSheetHeader } from '../StickerSheetHeader'
import styles from './StickerSheetRow.module.css'

export type StickerSheetRowProps = {
  children: React.ReactNode
  header?: string
  isReversed?: boolean
} & HTMLAttributes<HTMLDivElement>

export const StickerSheetRow = ({
  children,
  header,
  isReversed = false,
  dir,
  className,
  ...restProps
}: StickerSheetRowProps): JSX.Element => (
  <div className={classnames(styles.stickerSheetRow, className)} {...restProps}>
    {header && (
      <StickerSheetHeader className={styles.header} isReversed={isReversed}>
        {header}
      </StickerSheetHeader>
    )}
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === StickerSheetCell) {
        return child
      }

      return <StickerSheetCell dir={dir}>{child}</StickerSheetCell>
    })}
  </div>
)

StickerSheetRow.displayName = 'StickerSheet.Row'
