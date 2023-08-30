import React, { HTMLAttributes } from "react"
import { StickerSheetTableHeading } from "../StickerSheetTableHeading"

export type StickerSheetHeaderProps = {
  headings: string[]
  headingsWidth?: number | string
  isReversed?: boolean
  hasVerticalHeadings?: boolean
  verticalHeadingsWidth?: number | string
} & HTMLAttributes<HTMLTableSectionElement>

export const StickerSheetHeader = ({
  headings,
  headingsWidth,
  isReversed = false,
  hasVerticalHeadings = false,
  verticalHeadingsWidth = "7rem",
  ...restProps
}: StickerSheetHeaderProps): JSX.Element => (
  <thead {...restProps}>
    <tr>
      {hasVerticalHeadings && <th style={{ width: verticalHeadingsWidth }} />}
      {headings.map(heading => (
        <StickerSheetTableHeading
          key={heading}
          isReversed={isReversed}
          style={{ width: headingsWidth }}
        >
          {heading}
        </StickerSheetTableHeading>
      ))}
    </tr>
  </thead>
)

StickerSheetHeader.displayName = "StickerSheet.Header"
