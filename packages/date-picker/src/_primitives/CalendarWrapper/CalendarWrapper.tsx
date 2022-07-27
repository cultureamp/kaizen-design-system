import React, { HTMLAttributes, useState } from "react"
import { OverrideClassName } from "@kaizen/component-base"
import classnames from "classnames"
import { usePopper } from "react-popper"
import { Calendar } from "../Calendar"
import calendarWrapperStyles from "./CalendarWrapper.module.scss"

interface CalendarWrapperProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactElement<typeof Calendar>
  referenceElement: HTMLElement | null
}

export const CalendarWrapper: React.VFC<CalendarWrapperProps> = ({
  children,
  referenceElement,
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
      {...restProps}
    >
      {children}
    </div>
  )
}
