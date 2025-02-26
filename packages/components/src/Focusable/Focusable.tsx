import React, { useRef, type HTMLAttributes, type ReactNode } from 'react'
import classnames from 'classnames'
import { useFocusable, type FocusableOptions } from 'react-aria'
import styles from './Focusable.module.scss'

export type FocusableProps = {
  children: ReactNode
} & FocusableOptions &
  HTMLAttributes<HTMLDivElement>

export const Focusable = ({ children, className, ...props }: FocusableProps): JSX.Element => {
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
      // aria-describedby on div doesn't do anthing so we instead render the content in VisuallyHidden from tooltip
      // but because RAC adds it as it assumes it's interactive element we remove it here
      aria-describedby={undefined}
      {...props}
    >
      {children}
    </div>
  )
}
