import React, { TdHTMLAttributes } from "react"
import classnames from "classnames"
import styles from "./StickerSheetCell.module.scss"

export type StickerSheetCellProps = {
  children: React.ReactNode
} & TdHTMLAttributes<HTMLTableCellElement>

export const StickerSheetCell = ({
  children,
  className,
  ...restProps
}: StickerSheetCellProps): JSX.Element => (
  <td className={classnames(styles.stickerSheetCell, className)} {...restProps}>
    {children}
  </td>
)

StickerSheetCell.displayName = "StickerSheet.Cell"
