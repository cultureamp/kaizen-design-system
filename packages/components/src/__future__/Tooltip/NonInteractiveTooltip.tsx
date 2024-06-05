import React, { ReactNode, useRef } from "react"
import { FocusableOptions, useFocusable } from "react-aria"

type Props = { children: ReactNode } & FocusableOptions &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const NonInteractiveTooltip = ({
  children,
  ...props
}: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const { focusableProps } = useFocusable(props, ref)

  return (
    <div
      ref={ref}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      {...focusableProps}
      data-non-interactive
      {...props}
    >
      {children}
    </div>
  )
}
