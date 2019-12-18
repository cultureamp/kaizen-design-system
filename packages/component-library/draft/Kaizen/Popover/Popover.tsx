import { Icon } from "@cultureamp/kaizen-component-library"
const closeIcon = require("@cultureamp/kaizen-component-library/icons/close.icon.svg")
  .default
const negativeIcon = require("@cultureamp/kaizen-component-library/icons/exclamation.icon.svg")
  .default
const informativeIcon = require("@cultureamp/kaizen-component-library/icons/information.icon.svg")
  .default
const positiveIcon = require("@cultureamp/kaizen-component-library/icons/success.icon.svg")
  .default
import classNames from "classnames"
import * as React from "react"

const styles = require("./styles.scss")

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
}

type Variant =
  | "default"
  | "informative"
  | "positive"
  | "negative"
  | "cautionary"

type Side = "top" | "bottom" | "left" | "right"

type Position = "start" | "center" | "end"

type Size = "small" | "large"

type Popover = React.FunctionComponent<Props>

const Popover: Popover = ({
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
}: Props) => (
  <div
    className={classNames(
      mapVariantToRootClass(variant),
      mapSizeToClass(size)
    )}
  >
    <div
      className={classNames(
        mapArrowVariantToClass(variant),
        mapArrowSideToClass(side),
        mapArrowPositionToClass(position),
      )}
    />
    <div className={styles.header}>
      {variant !== "default" && (
        <span className={styles.icon}>
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
    <div className={classNames(styles.container, mapLineVariant(singleLine))}>
      {children}
    </div>
  </div>
)

const mapVariantToRootClass = (variant: Variant): string => {
  switch (variant) {
    case "informative":
      return styles.informative
    case "positive":
      return styles.positive
    case "negative":
      return styles.negative
    case "cautionary":
      return styles.cautionary
    default:
      return styles.default
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
      return styles.positionStart
    case "end":
      return styles.positionEnd
    default:
      return ""
  }
}

const mapArrowSideToClass = (side: Side): string => {
  switch (side) {
    case "top":
      return styles.sideTop
    default:
      return ""
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
