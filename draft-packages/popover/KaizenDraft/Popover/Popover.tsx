import { usePopper } from "react-popper"
import { Icon } from "@kaizen/component-library"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"

import classNames from "classnames"
import React, { useMemo, useState } from "react"
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

type Placement =
  | "top"
  | "bottom"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"

export type PopoverProps = {
  readonly automationId?: string
  readonly visible?: boolean
  readonly onClose?: (event: React.MouseEvent<HTMLButtonElement>) => any
  readonly variant?: Variant
  readonly placement?: Placement
  readonly size?: Size
  readonly heading?: string
  readonly dismissible?: boolean
  readonly singleLine?: boolean
  readonly children: React.ReactNode
  /** For almost all intents and purposes, you should be using a pre-defined variant.
   Please avoid using a custom icon unless you have a very good reason to do so. **/
  readonly customIcon?: React.SVGAttributes<SVGSymbolElement>
  readonly referenceElement: HTMLElement | null
}

type PopoverModernType = React.FunctionComponent<PopoverProps>

// Sync with styles.scss
const arrowWidth = 16
const arrowHeight = 8

export const Popover: PopoverModernType = ({
  automationId,
  children,
  variant = "default",
  placement = "bottom",
  size = "small",
  heading,
  dismissible = false,
  onClose,
  singleLine = false,
  customIcon,
  referenceElement,
}: PopoverProps) => {
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
      placement,
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
        style={popperStyles.arrow}
        className={styles.arrowWrapper}
      >
        <div
          className={classNames(styles.arrow, mapArrowVariantToClass(variant))}
        />
      </div>
    </div>
  )
}

type PopoverPropsWithoutRef = Omit<PopoverProps, "referenceElement">

/**
 * How to use:
 *
 * const [referenceElementRef, Popover] = usePopover()
 *
 * return (<>
 *   <button ref={referenceElementRef}>
 *     Hello world
 *   </button>
 *   <Popover>Hello world</Popover>
 * </>)
 *
 * The purpose of this hook is to abstract away some of the awkwardness with the
 * requirement of passing in refs with popper. We need to use `useState` instead
 * of `useRef`, which may not be immediately intuitive.
 *
 * The popper documentation to help provide more context:
 *   https://popper.js.org/react-popper/v2/hook/
 */
export const usePopover = (): [
  (element: HTMLElement | null) => void,
  React.FunctionComponent<PopoverPropsWithoutRef>
] => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  )

  // I guess the problem with this pattern, is that every time referenceElement
  // changes, a brand new component is generated, which would be bad for memoization.
  // In this situation however, the value is rarely going to change, and
  // popovers aren't going to include content with expensive render times.
  const PopoverWithRef = useMemo(
    () => (props: PopoverPropsWithoutRef) =>
      referenceElement ? (
        <Popover {...props} referenceElement={referenceElement} />
      ) : null,
    [referenceElement]
  )

  return [setReferenceElement, PopoverWithRef]
}
