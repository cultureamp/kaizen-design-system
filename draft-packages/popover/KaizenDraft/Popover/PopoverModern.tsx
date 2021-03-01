import { usePopper } from "react-popper"
import { Icon } from "@kaizen/component-library"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"

import classNames from "classnames"
import * as React from "react"

import { useState } from "react"
import styles from "./styles.scss"
import { Side, Size, Variant, Position } from "./types"
import {
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
  readonly referenceElement: HTMLElement | null
}

type PopoverModernType = React.FunctionComponent<ModernPopoverProps>

// Sync with styles.scss
const arrowWidth = 16
const arrowHeight = 8

const getPlacement = (side: Side, position: Position) => {
  if (position === "center") {
    return side
  }

  return `${side}-${position}` as
    | "bottom-start"
    | "bottom-end"
    | "top-start"
    | "top-end"
}

export const PopoverModern: PopoverModernType = ({
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
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null)
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        {
          name: "arrow",
          options: {
            element: arrowElement,
            // Ensures that the arrow doesn't go too far to the left or right
            // of the tooltip.
            padding: arrowWidth / 2 + 10,
          },
        },
        {
          name: "offset",
          options: {
            offset: [0, arrowHeight],
          },
        },
        {
          name: "preventOverflow",
          options: {
            // Makes sure that the popover isn't flush up against the end of the
            // viewport
            padding: 4,
          },
        },
      ],
      placement: getPlacement(side, position),
    }
  )

  return (
    <div
      ref={setPopperElement}
      style={popperStyles.popper}
      {...attributes.popper}
      className={classNames(styles.root, mapSizeToClass(size))}
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
        ref={setArrowElement}
        className={classNames(
          mapArrowVariantToClass(variant),
          mapArrowSideToClass(side)
        )}
        style={popperStyles.arrow}
      />
    </div>
  )
}

/**
 * How to use:
 *
 * const [referenceElement, referenceElementRef] = usePopoverReferenceElementRef()
 *
 * return (<>
 *   <button ref={referenceElementRef}>
 *     Hello world
 *   </button>
 *   <Popover referenceElement={referenceElement} />
 * </>)
 *
 * The purpose of this hook is to ensure that the user passes down an element
 * reference, which will cause a rerender when it changes. To do this, we need
 * to use `useState` instead of `useRef`. Given how this is an uncommon pattern,
 * we figured that creating this hook will help abstract this away.
 *
 * The popper documentation may help provide more context:
 *   https://popper.js.org/react-popper/v2/hook/
 */
export const usePopoverReferenceElementRef = () => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  )

  return [referenceElement, setReferenceElement]
}
