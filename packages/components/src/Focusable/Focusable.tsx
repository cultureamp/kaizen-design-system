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
      // We want the element to be focusable for keyboard users,
      // but screen readers will have the VisuallyHidden content
      tabIndex={0}
      // aria-describedby on div doesn't do anthing so we instead render the content in VisuallyHidden from tooltip
      // but because RAC adds it as it assumes it's interactive element we remove it here
      aria-describedby={undefined}
      {...props}
    >
      {children}
    </Element>
  )
}
