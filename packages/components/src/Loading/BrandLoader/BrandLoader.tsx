import React, { forwardRef, type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { VisuallyHidden } from '~components/VisuallyHidden'
import { useReversedColors } from '~components/utils'
import { BrandLoaderIcon } from './subcomponents'
import styles from './BrandLoader.module.css'

export type BrandLoaderProps = {
  accessibilityLabel: string
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg'
  /** @default "normal" */
  speed?: 'slow' | 'normal' | 'fast'
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>

/** {@link https://cultureamp.design/?path=/docs/components-loading-states-brandloader--docs Storybook} */
export const BrandLoader = forwardRef<HTMLDivElement, BrandLoaderProps>(
  (
    { accessibilityLabel, size = 'md', speed = 'normal', className, ...restProps },
    ref,
  ): JSX.Element => {
    const isReversed = useReversedColors()

    return (
      <div
        ref={ref}
        className={classnames(
          styles.brandLoader,
          styles[size],
          styles[speed],
          isReversed && styles.reversed,
          className,
        )}
        {...restProps}
        role="status"
      >
        <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
        <BrandLoaderIcon />
      </div>
    )
  },
)

BrandLoader.displayName = 'BrandLoader'
