import React, { HTMLAttributes, ReactNode, useRef } from "react"
import classnames from "classnames"
import { FocusableOptions, useFocusable } from "react-aria"
import styles from "./Focusable.module.scss"

export type FocusableProps = {
  children: ReactNode
} & FocusableOptions &
  HTMLAttributes<HTMLDivElement>

// todo this component will be reusable util for all components to give them focusable wrapper
export const Focusable = ({
  children,
  className,
  ...props
}: FocusableProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const { focusableProps } = useFocusable(props, ref)

  return (
    <div
      ref={ref}
      className={classnames(styles.focusableWrapper, className)}
      {...focusableProps}
      data-inline-hidden-content
      // We want the div to be focusable for keyboard users,
      // but screen readers will have the VisuallyHidden content
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      // Negate the aria description (added by RAC) as we have the VisuallyHidden content
      aria-describedby={undefined}
      {...props}
    >
      {children}
    </div>
  )
}
