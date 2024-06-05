import React, { HTMLAttributes, ReactNode, useRef } from "react"
import classnames from "classnames"
import { VisuallyHidden, useFocusable } from "react-aria"
import styles from "./NonInteractiveTrigger.module.scss"

export type NonInteractiveTriggerProps = {
  children: ReactNode,
  tooltipContent: ReactNode
} & HTMLAttributes<HTMLDivElement>

export const NonInteractiveTrigger = ({ children, tooltipContent, className, ...restProps }: NonInteractiveTriggerProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const { focusableProps } = useFocusable({}, ref)

  return (
    <div
      ref={ref}
      // We want the div to be focusable for keyboard users,
      // but screen readers will have the VisuallyHidden content
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className={classnames(
        styles.nonInteractiveTrigger,
        className
      )}
      {...focusableProps}
      // Negate the aria description (added by RAC) as we have the VisuallyHidden content
      aria-describedby={null}
      {...restProps}
    >
      {children}
      <VisuallyHidden>
        {tooltipContent}
      </VisuallyHidden>
    </div>
  )
}
