import React, { TableHTMLAttributes } from "react"
import { Heading } from "@kaizen/typography"
import {
  StickerSheetBody,
  StickerSheetBodyProps,
} from "./components/StickerSheetBody"
import {
  StickerSheetHeader,
  StickerSheetHeaderProps,
} from "./components/StickerSheetHeader"
import { StickerSheetRow } from "./components/StickerSheetRow"
import styles from "./StickerSheet.module.scss"

type ReversibleSubcomponents = StickerSheetBodyProps | StickerSheetHeaderProps

const isReversibleSubcomponent = (
  child: React.ReactNode
): child is React.ReactElement<ReversibleSubcomponents> =>
  React.isValidElement<ReversibleSubcomponents>(child) &&
  (child.type === StickerSheetHeader || child.type === StickerSheetBody)

export interface StickerSheetProps
  extends TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode
  heading?: string
  isReversed?: boolean
}

type Subcomponents = {
  Header: typeof StickerSheetHeader
  Body: typeof StickerSheetBody
  Row: typeof StickerSheetRow
}

export const StickerSheet: React.VFC<StickerSheetProps> & Subcomponents = ({
  children,
  heading,
  isReversed = false,
  ...restProps
}) => (
  <div className={styles.stickerSheet}>
    {heading && (
      <Heading
        variant="heading-3"
        tag="h1"
        color={isReversed ? "white" : "dark"}
        classNameOverride={styles.stickerSheetSectionHeading}
      >
        {heading}
      </Heading>
    )}

    <table {...restProps}>
      {React.Children.map(children, child => {
        if (isReversibleSubcomponent(child)) {
          return React.cloneElement(child, {
            ...child.props,
            isReversed,
          })
        }
        return child
      })}
    </table>
  </div>
)

StickerSheet.Header = StickerSheetHeader
StickerSheet.Body = StickerSheetBody
StickerSheet.Row = StickerSheetRow

StickerSheet.displayName = "StickerSheet"
