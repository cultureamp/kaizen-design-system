import React, { HTMLAttributes, useState } from "react"
import { Options } from "@popperjs/core"
import classnames from "classnames"
import { usePopper } from "react-popper"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./CalendarPopover.module.scss"

export type CalendarPopoverProps = {
  children: React.ReactNode
  referenceElement: HTMLElement | null
  popperOptions?: Partial<Options>
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * Only for use with Calendar components.
 * @todo: Replace with Popover when we have a reusable one.
 */
export const CalendarPopover = ({
  children,
  referenceElement,
  popperOptions,
  classNameOverride,
  ...restProps
}: CalendarPopoverProps): JSX.Element => {
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
