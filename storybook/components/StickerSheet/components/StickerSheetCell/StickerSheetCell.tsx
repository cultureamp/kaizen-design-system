import React, { TdHTMLAttributes } from "react"
import styles from "./StickerSheetCell.module.scss"

export type StickerSheetCellProps = {
  children: React.ReactNode
} & TdHTMLAttributes<HTMLTableCellElement>

export const StickerSheetCell = ({
  children,
  ...restProps
}: StickerSheetCellProps): JSX.Element => (
  <td className={styles.stickerSheetCell} {...restProps}>
    {children}
  </td>
)

StickerSheetCell.displayName = "StickerSheet.Cell"
