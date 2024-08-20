import React, { TableHTMLAttributes } from "react"
import classnames from "classnames"
import { Heading } from "~components/Heading"
import {
  StickerSheetBody,
  StickerSheetBodyProps,
} from "./components/StickerSheetBody"
import { StickerSheetCell } from "./components/StickerSheetCell"
import {
  StickerSheetHeader,
  StickerSheetHeaderProps,
} from "./components/StickerSheetHeader"
import { StickerSheetRow } from "./components/StickerSheetRow"
import styles from "./StickerSheet.module.css"

type ReversibleSubcomponents = StickerSheetBodyProps | StickerSheetHeaderProps

const isReversibleSubcomponent = (
  child: React.ReactNode
): child is React.ReactElement<ReversibleSubcomponents> =>
  React.isValidElement<ReversibleSubcomponents>(child) &&
  (child.type === StickerSheetHeader || child.type === StickerSheetBody)

export type StickerSheetProps = {
  children: React.ReactNode
  heading?: string
  isReversed?: boolean
} & TableHTMLAttributes<HTMLTableElement>

export const StickerSheet = ({
  children,
  heading,
  isReversed = false,
  className,
  ...restProps
}: StickerSheetProps): JSX.Element => (
  <div className={styles["stickersheet"]}>
    {heading && (
      <Heading
        variant="heading-3"
        tag="h1"
        color={isReversed ? "white" : "dark"}
        classNameOverride={styles["stickersheet-section-heading"]}
      >
        {heading}
      </Heading>
    )}

    <table
      className={classnames(styles["stickersheet-table"], className)}
      {...restProps}
    >
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
StickerSheet.Cell = StickerSheetCell

StickerSheet.displayName = "StickerSheet"
