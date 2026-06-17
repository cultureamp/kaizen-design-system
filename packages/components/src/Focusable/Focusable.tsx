import React, { useRef, type ElementType, type HTMLAttributes, type ReactNode } from 'react'
import classnames from 'classnames'
import { useFocusable, type FocusableOptions } from 'react-aria'
import styles from './Focusable.module.css'

export type FocusableProps<T extends ElementType = 'div'> = {
  children: ReactNode
  /**
   * The HTML element to render as. Defaults to `div` to avoid an api change
   * but should be set to 'span' if rendering within something like a 'p' tag to avoid invalid HTML.
   */
  tag?: T
} & FocusableOptions &
  HTMLAttributes<HTMLDivElement>

export const Focusable = <T extends ElementType = 'div'>({
  children,
  className,
  tag,
  ...props
}: FocusableProps<T>): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const { focusableProps } = useFocusable(props, ref)
  const Element = tag ?? 'div'

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
