import React, { HTMLAttributes, useState } from "react"
import {
  autoUpdate,
  offset,
  useFloating,
  UseFloatingOptions,
  size,
} from "@floating-ui/react-dom"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./CalendarPopover.module.scss"

export type CalendarPopoverProps = {
  children: React.ReactNode
  referenceElement: HTMLElement | null
  floatingOptions?: Partial<UseFloatingOptions>
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * Only for use with Calendar components.
 * @todo: Replace with Popover when we have a reusable one.
 */
export const CalendarPopover = ({
  children,
  referenceElement,
  floatingOptions,
  classNameOverride,
  ...restProps
}: CalendarPopoverProps): JSX.Element => {
  const [floatingElement, setFloatingElement] = useState<HTMLDivElement | null>(
    null
  )

  const { floatingStyles } = useFloating({
    placement: "bottom-start",
    elements: {
      reference: referenceElement,
      floating: floatingElement,
    },
    strategy: "fixed",
    middleware: [
      size({
        apply({ availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${Math.max(availableHeight - 20, 110)}px`,
          })
        },
      }),
      offset(15),
    ],
    whileElementsMounted: autoUpdate,
    ...floatingOptions,
  })

  return (
    <div
      ref={setFloatingElement}
      style={floatingStyles}
      // {...popperAttributes?.popper}
      className={classnames(styles.calendarPopover, classNameOverride)}
      role="dialog"
      aria-modal="true"
      {...restProps}
    >
      {children}
    </div>
  )
}

CalendarPopover.displayName = "CalendarPopover"
