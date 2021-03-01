import { usePopper } from "react-popper"
import { Icon } from "@kaizen/component-library"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"

import classNames from "classnames"
import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import styles from "./styles.scss"
import { Side, Size, Variant, Position } from "./types"
import {
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
  /**
   * Render the tooltip inside a react portal, given the ccs selector.
   * This is typically used for instances where the menu is a descendant of an
   * `overflow: scroll` or `overflow: hidden` element.
   */
  readonly portalSelector?: string
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
  portalSelector,
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

  const portalSelectorElement: Element | null = portalSelector
    ? document.querySelector(portalSelector)
    : null

  useEffect(() => {
    if (portalSelector && !portalSelectorElement) {
      // eslint-disable-next-line no-console
      console.warn(
        "The portal could not be created using the selector: " + portalSelector
      )
    }
  }, [portalSelectorElement, portalSelector])

  const popover = (
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
        style={popperStyles.arrow}
        className={styles.arrowWrapper}
      >
        <div
          className={classNames(styles.arrow, mapArrowVariantToClass(variant))}
        />
      </div>
    </div>
  )

  return portalSelector && portalSelectorElement
    ? ReactDOM.createPortal(popover, portalSelectorElement)
    : popover
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
export const usePopoverReferenceElementRef = (): [
  HTMLElement | null,
  (element: HTMLElement | null) => void
] => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  )

  return [referenceElement, setReferenceElement]
}
