import { Icon } from "@kaizen/component-library"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"

import classNames from "classnames"
import * as React from "react"

import styles from "./styles.scss"
import { Size, Variant } from "./types"
import {
  mapArrowVariantToClass,
  mapLineVariant,
  mapSizeToClass,
  mapVariantToBoxClass,
  mapVariantToIcon,
  mapVariantToIconClass,
} from "./classMappers"

export type Side = "top" | "bottom"

export type Position = "start" | "center" | "end"

export type LegacyPopoverProps = {
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
  /** For almost all intents and purposes, you should be using a pre-defined variant.
   Please avoid using a custom icon unless you have a very good reason to do so. **/
  readonly customIcon?: React.SVGAttributes<SVGSymbolElement>
}

/**
 * Used for the legacy popover only. For the new popover, the position of the
 * arrow is determined by popper.
 */
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

/**
 * Used for the legacy popover only.
 * In the legacy popover, the "side" described the location of the arrow.
 * In the modern popover, the "side" describes the location of the popover
 * relative to the reference element.
 */
const mapArrowSideToClass = (side: Side): string => {
  switch (side) {
    case "top":
      return styles.arrowSideTop
    default:
      return styles.arrowSideBottom
  }
}

type Popover = React.FunctionComponent<LegacyPopoverProps>

export const PopoverLegacy: Popover = React.forwardRef<
  HTMLDivElement,
  LegacyPopoverProps
>(
  (
    {
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
      customIcon,
    },
    ref
  ) => (
    <div
      className={classNames(styles.root, mapSizeToClass(size))}
      style={{ transform: "translateX(-50%)" }}
      ref={ref}
      data-automation-id={automationId}
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
                <Icon
                  role="presentation"
                  icon={customIcon ? customIcon : mapVariantToIcon(variant)}
                />
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
          styles.arrowWrapper,
          mapArrowSideToClass(side),
          mapArrowPositionToClass(position)
        )}
      >
        <div
          className={classNames(styles.arrow, mapArrowVariantToClass(variant))}
        />
      </div>
    </div>
  )
)
