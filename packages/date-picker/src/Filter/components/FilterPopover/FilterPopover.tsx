import React, { HTMLAttributes, useState } from "react"
import { Options } from "@popperjs/core"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { usePopper } from "react-popper"
import { OverrideClassName } from "@kaizen/component-base"
import { useFilterContextSol3 } from "../../context/useFilterContextSol3"
import styles from "./FilterPopover.module.scss"

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


export const FilterPopoverWithFocusLockExtraContext = ({
  children,
  referenceElement,
  popperOptions,
  classNameOverride,
  ...restProps
}: FilterPopoverProps): JSX.Element => {
  const { isOpen, setIsOpen } = useFilterContextSol3()

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

  if (!isOpen) return <></>

  return (
    <FocusOn
            scrollLock={false}
            onClickOutside={(): void => setIsOpen(false)}
            onEscapeKey={(): void => setIsOpen(false)}
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

FilterPopoverWithFocusLockExtraContext.displayName = "FilterPopoverWithFocusLockExtraContext"
