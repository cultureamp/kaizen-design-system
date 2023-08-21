import React, { HTMLAttributes, useState } from "react"
import { createPortal } from "react-dom"
import { useFloating, offset, autoPlacement } from "@floating-ui/react-dom"
import { Options } from "@popperjs/core"
import classnames from "classnames"
import { usePopper } from "react-popper"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./FilterPopover.module.scss"

export interface FilterPopoverProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  referenceElement?: HTMLElement | null
  // popperOptions?: Partial<Options>
  elements?: unknown
}

export const FilterPopover =
  // React.forwardRef(
  (
    {
      children,
      referenceElement,
      // elements,
      // popperOptions,
      classNameOverride,
      // refs,
      ...restProps
    }: FilterPopoverProps
    // ref
  ): JSX.Element => {
    const { refs, floatingStyles } = useFloating({
      elements: {
        reference: referenceElement,
      },
      placement: "bottom-start",
      middleware: [offset(15)],
    })
    // const { floatingStyles } = useFloating({
    //   elements,
    //   placement: "bottom-start",
    //   middleware: [offset(15), autoPlacement()],
    // })

    return createPortal((
      <div
        ref={refs.setFloating}
        // ref={ref}
        style={floatingStyles}
        // {...popperAttributes?.popper}
        className={classnames(styles.filterPopover, classNameOverride)}
        role="dialog"
        aria-modal="true"
        {...restProps}
      >
        {children}
      </div>
    ), document.body)
  }
// )
FilterPopover.displayName = "FilterPopover"
