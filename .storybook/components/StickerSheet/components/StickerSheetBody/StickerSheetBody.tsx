import React, { HTMLAttributes } from "react"
import { StickerSheetRowProps } from "../StickerSheetRow"

export type StickerSheetBodyProps = {
  children:
    | React.ReactElement<StickerSheetRowProps>
    | Array<React.ReactElement<StickerSheetRowProps>>
  isReversed?: boolean
} & Omit<HTMLAttributes<HTMLTableSectionElement>, "children">

export const StickerSheetBody = ({
  children,
  isReversed = false,
  ...restProps
}: StickerSheetBodyProps): JSX.Element => (
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
