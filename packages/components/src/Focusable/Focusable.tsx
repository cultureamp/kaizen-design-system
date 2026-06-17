import React, { useRef, type ElementType, type HTMLAttributes, type ReactNode } from 'react'
import classnames from 'classnames'
import { useFocusable, type FocusableOptions } from 'react-aria'
import styles from './Focusable.module.css'

export type FocusableProps<T extends ElementType = 'span'> = {
  children: ReactNode
  /**
   * The HTML element to render as. Defaults to `span` to avoid block-in-inline
   * hydration errors when Focusable wraps content inside a `<p>` or other inline context.
   */
  as?: T
} & FocusableOptions &
  HTMLAttributes<HTMLElement>

export const Focusable = <T extends ElementType = 'span'>({
  children,
  className,
  as,
  ...props
}: FocusableProps<T>): JSX.Element => {
  const ref = useRef<HTMLElement>(null)
  const { focusableProps } = useFocusable(props, ref)
  const Element = as ?? 'span'

  return (
    <Element
      ref={ref}
      className={classnames(styles.focusableWrapper, className)}
      {...focusableProps}
      data-inline-hidden-content
      tabIndex={0}
      // aria-describedby on this element does nothing — tooltip renders VisuallyHidden content instead
      aria-describedby={undefined}
      {...props}
    >
      {children}
    </Element>
  )
}
