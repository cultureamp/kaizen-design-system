import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { Heading } from "~components/Heading"
import { StickerSheetCell } from "./components/StickerSheetCell"
import { StickerSheetHeader } from "./components/StickerSheetHeader"
import {
  StickerSheetRow,
  StickerSheetRowProps,
} from "./components/StickerSheetRow"
import styles from "./StickerSheet.module.css"

const countMaxColumns = (children: React.ReactNode): number =>
  React.Children.toArray(children).reduce<number>((acc, child) => {
    if (React.isValidElement(child) && child.type === StickerSheetRow) {
      return Math.max(acc, React.Children.count(child.props.children))
    }
    return acc
  }, 0)

type ReversibleSubcomponents = StickerSheetRowProps

const isReversibleSubcomponent = (
  child: React.ReactNode
): child is React.ReactElement<ReversibleSubcomponents> =>
  React.isValidElement<ReversibleSubcomponents>(child) &&
  child.type === StickerSheetRow

export type StickerSheetProps = {
  children: React.ReactNode
  title?: string
  headers?: string[]
  isReversed?: boolean
} & HTMLAttributes<HTMLDivElement>

export const StickerSheet = ({
  children,
  title,
  headers,
  isReversed = false,
  className,
  style,
  ...restProps
}: StickerSheetProps): JSX.Element => {
  const hasVerticalHeaders = React.Children.toArray(children).some(
    child =>
      React.isValidElement(child) &&
      child.type === StickerSheetRow &&
      child.props.header !== undefined
  )

  const colCount = headers?.length ?? countMaxColumns(children)

  const gridTemplateColumns = hasVerticalHeaders
    ? `fit-content(100%) repeat(${colCount}, 1fr)`
    : `repeat(${colCount}, 1fr)`

  return (
    <div className={styles.stickerSheetContainer}>
      {title && (
        <Heading
          variant="heading-3"
          tag="h1"
          color={isReversed ? "white" : "dark"}
          classNameOverride={styles.stickerSheetSectionHeading}
        >
          {title}
        </Heading>
      )}

      <div
        className={classnames(styles.stickerSheet, className)}
        style={{ gridTemplateColumns, ...style }}
        {...restProps}
      >
        {headers && (
          <StickerSheetRow>
            {hasVerticalHeaders && <div />}
            {headers.map(heading => (
              <StickerSheetHeader key={heading} isReversed={isReversed}>
                {heading}
              </StickerSheetHeader>
            ))}
          </StickerSheetRow>
        )}
        {React.Children.map(children, child => {
          if (isReversibleSubcomponent(child)) {
            return React.cloneElement(child, {
              isReversed,
            })
          }
          return child
        })}
      </div>
    </div>
  )
}

StickerSheet.Row = StickerSheetRow
StickerSheet.Cell = StickerSheetCell

StickerSheet.displayName = "StickerSheet"
