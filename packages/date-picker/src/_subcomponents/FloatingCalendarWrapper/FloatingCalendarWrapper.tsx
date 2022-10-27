import React, { HTMLAttributes, useState } from "react"
import { OverrideClassName } from "@kaizen/component-base"
import classnames from "classnames"
import { usePopper } from "react-popper"
import { Options } from "@popperjs/core"
import calendarWrapperStyles from "./FloatingCalendarWrapper.module.scss"

export interface FloatingCalendarWrapperProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  referenceElement: HTMLElement | null
  popperOptions?: Partial<Options>
}

export const FloatingCalendarWrapper: React.VFC<
  FloatingCalendarWrapperProps
> = ({
  children,
  referenceElement,
  popperOptions,
  classNameOverride,
  ...restProps
}) => {
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
      className={classnames(
        calendarWrapperStyles.calendarWrapper,
        classNameOverride
      )}
      role="dialog"
      aria-modal="true"
      {...restProps}
    >
      {children}
    </div>
  )
}

FloatingCalendarWrapper.displayName = "FloatingCalendarWrapper"
