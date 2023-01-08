import React, { HTMLAttributes } from "react"
import { StickerSheetTableHeading } from "../StickerSheetTableHeading"
import styles from "./StickerSheetRow.module.scss"

export interface StickerSheetRowProps
  extends HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode
  rowTitle?: string
  isReversed?: boolean
}

export const StickerSheetRow = ({
  children,
  rowTitle,
  isReversed = false,
  dir,
  ...restProps
}: StickerSheetRowProps): JSX.Element => (
  <tr {...restProps}>
    {rowTitle && (
      <StickerSheetTableHeading isReversed={isReversed}>
        {rowTitle}
      </StickerSheetTableHeading>
    )}
    {React.Children.map(children, child => (
      <td dir={dir} className={styles.stickerSheetCell}>
        {child}
      </td>
    ))}
  </tr>
)

StickerSheetRow.displayName = "StickerSheet.Row"
