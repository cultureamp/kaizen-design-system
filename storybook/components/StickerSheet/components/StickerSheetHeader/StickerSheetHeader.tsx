import React, { HTMLAttributes } from "react"
import { StickerSheetTableHeading } from "../StickerSheetTableHeading"

export interface StickerSheetHeaderProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  headings: string[]
  isReversed?: boolean
  hasVerticalHeadings?: boolean
  verticalHeadingsWidth?: number | string
}

export const StickerSheetHeader: React.VFC<StickerSheetHeaderProps> = ({
  headings,
  isReversed = false,
  hasVerticalHeadings = false,
  verticalHeadingsWidth = "7rem",
  ...restProps
}) => (
  <thead {...restProps}>
    <tr>
      {hasVerticalHeadings && <th style={{ width: verticalHeadingsWidth }} />}
      {headings.map(heading => (
        <StickerSheetTableHeading isReversed={isReversed}>
          {heading}
        </StickerSheetTableHeading>
      ))}
    </tr>
  </thead>
)

StickerSheetHeader.displayName = "StickerSheet.Header"
