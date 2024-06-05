import React, { HTMLAttributes, ReactNode, useRef } from "react"
import classnames from "classnames"
import { useFocusable } from "react-aria"
import styles from "./NonInteractiveTrigger.module.scss"

export type NonInteractiveTriggerProps = {
  children: ReactNode,
} & HTMLAttributes<HTMLDivElement>

export const NonInteractiveTrigger = ({ children, className, ...restProps }: NonInteractiveTriggerProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const { focusableProps } = useFocusable({}, ref)

  return (
    <div
      ref={ref}
      className={classnames(
        styles.nonInteractiveTrigger,
        className
      )}
      {...focusableProps}
      data-non-interactive
      // We want the div to be focusable for keyboard users,
      // but screen readers will have the VisuallyHidden content
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      // Negate the aria description (added by RAC) as we have the VisuallyHidden content
      aria-describedby={undefined}
      {...restProps}
    >
      {children}
    </div>
  )
}
