import React, { HTMLAttributes } from "react"
import { StickerSheetTableHeading } from "../StickerSheetTableHeading"
import styles from "./StickerSheetRow.module.scss"

export interface StickerSheetRowProps
  extends HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode
  rowTitle?: string
  isReversed?: boolean
}

export const StickerSheetRow: React.VFC<StickerSheetRowProps> = ({
  children,
  rowTitle,
  isReversed = false,
  ...restProps
}) => (
  <tr {...restProps}>
    {rowTitle && (
      <StickerSheetTableHeading isReversed={isReversed}>
        {rowTitle}
      </StickerSheetTableHeading>
    )}
    {React.Children.map(children, child => (
      <td className={styles.stickerSheetCell}>{child}</td>
    ))}
  </tr>
)

StickerSheetRow.displayName = "StickerSheet.Row"
