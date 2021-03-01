import { Icon } from "@kaizen/component-library"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"

import classNames from "classnames"
import * as React from "react"

import styles from "./styles.scss"
import { Side, Size, Variant, Position } from "./types"
import {
  getArrowStyle,
  mapArrowPositionToClass,
  mapArrowSideToClass,
  mapArrowVariantToClass,
  mapLineVariant,
  mapSizeToClass,
  mapVariantToBoxClass,
  mapVariantToIcon,
  mapVariantToIconClass,
} from "./classMappers"

export type ModernPopoverProps = {
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
  readonly referenceElement: HTMLDivElement | null
}

type PopoverModernType = React.FunctionComponent<ModernPopoverProps>

const PopoverModern: PopoverModernType = ({
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
  referenceElement,
}) => {
  return (
    <div
      className={classNames(styles.root, mapSizeToClass(size))}
      style={{ transform: "translateX(-50%)" }}
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
          mapArrowVariantToClass(variant),
          mapArrowSideToClass(side),
          mapArrowPositionToClass(position)
        )}
        style={getArrowStyle(side)}
      />
    </div>
  )
}

export default PopoverModern
