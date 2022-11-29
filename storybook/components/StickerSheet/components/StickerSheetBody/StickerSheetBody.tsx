import React, { HTMLAttributes } from "react"
import { StickerSheetRowProps } from "../StickerSheetRow"

export interface StickerSheetBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  children:
    | React.ReactElement<StickerSheetRowProps>
    | Array<React.ReactElement<StickerSheetRowProps>>
  isReversed?: boolean
}

export const StickerSheetBody: React.VFC<StickerSheetBodyProps> = ({
  children,
  isReversed = false,
  ...restProps
}) => (
  <tbody {...restProps}>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        isReversed,
        ...child.props,
      })
    )}
  </tbody>
)

StickerSheetBody.displayName = "StickerSheet.Body"
