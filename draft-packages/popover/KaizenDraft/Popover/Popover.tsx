import { Icon } from "@kaizen/component-library"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import negativeIcon from "@kaizen/component-library/icons/exclamation.icon.svg"
import informativeIcon from "@kaizen/component-library/icons/information.icon.svg"
import positiveIcon from "@kaizen/component-library/icons/success.icon.svg"

import classNames from "classnames"
import * as React from "react"

import styles from "./styles.scss"

export interface Props {
  readonly id?: string
  readonly automationId?: string
  readonly visible?: boolean
  readonly onClose?: (event: React.MouseEvent<HTMLButtonElement>) => any
  readonly variant?: Variant
  readonly side?: Side
  readonly size?: Size
  readonly position?: Position
  readonly heading?: string
  readonly dismissible?: boolean
  readonly singleLine?: boolean
  readonly children: React.ReactNode
  readonly boxOffset?: BoxOffset
}

type Variant =
  | "default"
  | "informative"
  | "positive"
  | "negative"
  | "cautionary"

type Side = "top" | "bottom" // | "left" | "right" - not yet implemented

type Position = "start" | "center" | "end"

type Size = "small" | "large"

type BoxOffset =
  | number
  | undefined
  | {
      xOffset?: number // to ensure a non-breaking change, xOffset can only be a number
      yOffset?: string
    }

type Popover = React.FunctionComponent<Props>

const Popover: Popover = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      id,
      automationId,
      children,
      variant = "default",
      side = "bottom",
      size = "small",
      position = "center",
      heading,
      dismissible = false,
      onClose,
      singleLine = false,
      boxOffset,
    },
    ref
  ) => (
    <div
      className={classNames(styles.root, mapSizeToClass(size))}
      style={getRootStyle(boxOffset)}
      ref={ref}
    >
      <div className={mapVariantToBoxClass(variant)}>
        {heading && (
          <div className={styles.header}>
            {variant !== "default" && (
              <span
                className={classNames(
                  styles.icon,
                  mapVariantToIconClass(variant)
                )}
              >
                <Icon role="presentation" icon={mapVariantToIcon(variant)} />
              </span>
            )}
            <div className={styles.singleLine}>{heading}</div>
            {dismissible && (
              <button className={styles.close} onClick={onClose}>
                <Icon role="presentation" icon={closeIcon} />
              </button>
            )}
          </div>
        )}
        <div
          className={classNames(styles.container, mapLineVariant(singleLine))}
        >
          {children}
        </div>
      </div>
      <div
        className={classNames(
          mapArrowVariantToClass(variant),
          mapArrowSideToClass(side),
          mapArrowPositionToClass(position)
        )}
        style={getArrowStyle(boxOffset, side)}
      />
    </div>
  )
)

const getRootStyle = (boxOffset: BoxOffset) => {
  if (boxOffset == null) {
    return { transform: "translateX(-50%)" }
  }

  const translate =
    typeof boxOffset === "number"
      ? `translateX(calc(-50% + ${boxOffset}px))`
      : `translate(${
          boxOffset.xOffset == null ? "-50%" : `${boxOffset.xOffset}px`
        }, ${boxOffset.yOffset})`

  return { transform: translate }
}

const mapVariantToBoxClass = (variant: Variant): string => {
  switch (variant) {
    case "informative":
      return styles.informativeBox
    case "positive":
      return styles.positiveBox
    case "negative":
      return styles.negativeBox
    case "cautionary":
      return styles.cautionaryBox
    default:
      return styles.defaultBox
  }
}

const getArrowStyle = (boxOffset: BoxOffset, side: Side) => {
  const rotate = side === "top" ? "rotate(180deg)" : ""
  let translate = ""
  if (boxOffset != null) {
    if (typeof boxOffset === "number") {
      translate = `translateX(${boxOffset * -1}px)`
    } else if (boxOffset.xOffset != null)
      // Because we shifted the popover in the parent, we need to readjust the
      // arrow back to where it was.
      translate = `translateX(${boxOffset.xOffset * -1}px)`
  }

  return rotate || translate
    ? {
        transform: `${translate}${rotate}`,
      }
    : undefined
}

const mapVariantToIconClass = (variant: Variant) => {
  switch (variant) {
    case "informative":
      return styles.informativeIcon
    case "positive":
      return styles.positiveIcon
    case "negative":
      return styles.negativeIcon
    case "cautionary":
      return styles.cautionaryIcon
    default:
      return undefined
  }
}

const mapVariantToIcon = (
  variant: Variant
): React.SVGAttributes<SVGSymbolElement> => {
  switch (variant) {
    case "informative":
      return informativeIcon
    case "positive":
      return positiveIcon
    case "negative":
      return negativeIcon
    case "cautionary":
      return negativeIcon
    default:
      return informativeIcon
  }
}

const mapArrowVariantToClass = (variant: Variant): string => {
  switch (variant) {
    case "informative":
      return styles.informativeArrow
    case "positive":
      return styles.positiveArrow
    case "negative":
      return styles.negativeArrow
    case "cautionary":
      return styles.cautionaryArrow
    default:
      return styles.defaultArrow
  }
}

const mapArrowPositionToClass = (position: Position): string => {
  switch (position) {
    case "start":
      return styles.arrowPositionStart
    case "end":
      return styles.arrowPositionEnd
    case "center":
      return styles.arrowPositionCenter
    default:
      return ""
  }
}

const mapArrowSideToClass = (side: Side): string => {
  switch (side) {
    case "top":
      return styles.arrowSideTop
    default:
      return styles.arrowSideBottom
  }
}

const mapSizeToClass = (size: Size): string => {
  switch (size) {
    case "large":
      return styles.large
    default:
      return ""
  }
}

const mapLineVariant = (singleLine: boolean): string => {
  if (singleLine === true) {
    return styles.singleLine
  } else {
    return ""
  }
}

export default Popover
