import React, { HTMLAttributes, useState } from "react"
import { Options } from "@popperjs/core"
import classnames from "classnames"
import { usePopper } from "react-popper"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./FilterPopover.module.scss"
import { FocusOn } from "react-focus-on"

export interface FilterPopoverProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  referenceElement: HTMLElement | null
  popperOptions?: Partial<Options>
}

export const FilterPopover = ({
  children,
  referenceElement,
  popperOptions,
  classNameOverride,
  ...restProps
}: FilterPopoverProps): JSX.Element => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )

  const { styles: popperStyles, attributes: popperAttributes } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 15],
          },
        },
      ],
      placement: "bottom-start",
      strategy: "fixed",
      ...popperOptions,
    }
  )

  return (
    <div
      ref={setPopperElement}
      style={popperStyles?.popper}
      {...popperAttributes?.popper}
      className={classnames(styles.filterPopover, classNameOverride)}
      role="dialog"
      aria-modal="true"
      {...restProps}
    >
      {children}
    </div>
  )
}

FilterPopover.displayName = "FilterPopover"


interface FilterPopoverWithFocusLockProps extends FilterPopoverProps {
  onClose?: () => void
}

export const FilterPopoverWithFocusLock = ({
  children,
  referenceElement,
  popperOptions,
  onClose,
  classNameOverride,
  ...restProps
}: FilterPopoverWithFocusLockProps): JSX.Element => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )

  const { styles: popperStyles, attributes: popperAttributes } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 15],
          },
        },
      ],
      placement: "bottom-start",
      strategy: "fixed",
      ...popperOptions,
    }
  )

  return (
    <FocusOn
            scrollLock={false}
            onClickOutside={onClose}
            onEscapeKey={onClose}
          >
      <div
        ref={setPopperElement}
        style={popperStyles?.popper}
        {...popperAttributes?.popper}
        className={classnames(styles.filterPopover, classNameOverride)}
        role="dialog"
        aria-modal="true"
        {...restProps}
      >
        {children}
      </div>
    </FocusOn>
  )
}

FilterPopoverWithFocusLock.displayName = "FilterPopoverWithFocusLock"
