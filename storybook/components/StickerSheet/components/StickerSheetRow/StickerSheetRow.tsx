import React from "react"
import styles from "./StickerSheetRow.module.scss"

export interface StickerSheetRowProps {
  children: React.ReactNode
  rowTitle?: string
}

export const StickerSheetRow: React.VFC<StickerSheetRowProps> = ({
  children,
  rowTitle,
}) => (
  <tr>
    {rowTitle && <th>{rowTitle}</th>}
    {React.Children.map(children, child => (
      <td className={styles.stickerSheetCell}>{child}</td>
    ))}
  </tr>
)

StickerSheetRow.displayName = "StickerSheet.Row"
