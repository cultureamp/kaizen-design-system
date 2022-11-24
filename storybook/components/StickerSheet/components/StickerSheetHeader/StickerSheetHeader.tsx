import React from "react"
import classnames from "classnames"
import styles from "./StickerSheetHeader.module.scss"

export interface StickerSheetHeaderProps {
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
}) => (
  <thead
    className={classnames(
      styles.stickerSheetHeader,
      isReversed && styles.isReversed
    )}
  >
    <tr>
      {hasVerticalHeadings && <th style={{ width: verticalHeadingsWidth }} />}
      {headings.map(heading => (
        <th>{heading}</th>
      ))}
    </tr>
  </thead>
)

StickerSheetHeader.displayName = "StickerSheet.Header"
