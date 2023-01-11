import React, { ThHTMLAttributes } from "react"
import classnames from "classnames"
import styles from "./StickerSheetTableHeading.module.scss"

export interface StickerSheetTableHeadingProps
  extends ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
  isReversed?: boolean
}

export const StickerSheetTableHeading = ({
  children,
  isReversed = false,
  className,
  ...restProps
}: StickerSheetTableHeadingProps): JSX.Element => (
  <th
    className={classnames(
      styles.stickerSheetTableHeading,
      isReversed && styles.isReversed,
      className
    )}
    {...restProps}
  >
    {children}
  </th>
)

StickerSheetTableHeading.displayName = "StickerSheetTableHeading"
