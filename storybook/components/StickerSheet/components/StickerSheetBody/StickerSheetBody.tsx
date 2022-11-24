import React from "react"
import classnames from "classnames"
import styles from "./StickerSheetBody.module.scss"

export interface StickerSheetBodyProps {
  children: React.ReactNode
  isReversed?: boolean
}

export const StickerSheetBody: React.VFC<StickerSheetBodyProps> = ({
  children,
  isReversed = false,
}) => (
  <tbody
    className={classnames(
      styles.stickerSheetBody,
      isReversed && styles.isReversed
    )}
  >
    {children}
  </tbody>
)

StickerSheetBody.displayName = "StickerSheet.Body"
