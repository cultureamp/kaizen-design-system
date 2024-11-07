import React, { HTMLAttributes, useState } from "react"
import { createPortal } from "react-dom"
import { Options } from "@popperjs/core"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { ReactFocusOnProps } from "react-focus-on/dist/es5/types"
import { usePopper } from "react-popper"
import { OverrideClassName } from "~components/types/OverrideClassName"
import styles from "./FilterPopover.module.scss"

export type FilterPopoverProps = {
  children: React.ReactNode
  referenceElement: HTMLElement | null
  popperOptions?: Partial<Options>
  focusOnProps?: Omit<ReactFocusOnProps, "children">
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const FilterPopover = ({
  children,
  referenceElement,
  popperOptions,
  classNameOverride,
  focusOnProps,
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
      ...popperOptions,
    }
  )

  return createPortal(
    <FocusOn {...focusOnProps}>
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
    </FocusOn>,
    document.body
  )
}

FilterPopover.displayName = "FilterPopover"
