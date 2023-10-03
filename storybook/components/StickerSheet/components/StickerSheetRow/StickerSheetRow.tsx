import React, { HTMLAttributes } from "react"
import { StickerSheetCell } from "../StickerSheetCell"
import { StickerSheetTableHeading } from "../StickerSheetTableHeading"

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
          scope="row"
          isReversed={isReversed}
          style={{ width: `calc(${rowTitleWidthString} - ${headingPaddingX})` }}
        >
          {rowTitle}
        </StickerSheetTableHeading>
      )}
      {React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === StickerSheetCell) {
          return child
        }

        return <StickerSheetCell dir={dir}>{child}</StickerSheetCell>
      })}
    </tr>
  )
}

StickerSheetRow.displayName = "StickerSheet.Row"
