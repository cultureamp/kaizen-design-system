import React, { HTMLAttributes } from "react"
import { StickerSheetTableHeading } from "../StickerSheetTableHeading"
import styles from "./StickerSheetRow.module.scss"

export type StickerSheetRowProps = {
  children: React.ReactNode
  rowTitle?: string
  rowTitleWidth?: number | string
  isReversed?: boolean
} & HTMLAttributes<HTMLTableRowElement>

export const StickerSheetRow = ({
  children,
  rowTitle,
  rowTitleWidth,
  isReversed = false,
  dir,
  ...restProps
}: StickerSheetRowProps): JSX.Element => {
  const headingPaddingX = "1.5rem" // $spacing-sm * 2
  const rowTitleWidthString =
    typeof rowTitleWidth === "number" ? `${rowTitleWidth}px` : rowTitleWidth

  return (
    <tr {...restProps}>
      {rowTitle && (
        <StickerSheetTableHeading
          isReversed={isReversed}
          style={{ width: `calc(${rowTitleWidthString} - ${headingPaddingX})` }}
        >
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
}

StickerSheetRow.displayName = "StickerSheet.Row"
