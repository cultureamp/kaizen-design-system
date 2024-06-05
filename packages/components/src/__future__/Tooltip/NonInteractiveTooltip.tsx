import React, { ReactNode, useRef } from "react"
import { useFocusable } from "react-aria"

// Instant component
export const NonInteractiveTooltip = ({
  children,
}: {
  children: ReactNode
}): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const { focusableProps } = useFocusable({}, ref)

  return (
    // <div ref={ref} {...focusableProps} data-non-interactive>
    <div ref={ref} {...focusableProps} tabIndex={0}>
      {children}
    </div>
  )
}
