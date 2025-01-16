import React, { forwardRef } from 'react'
import { Button as RACButton } from 'react-aria-components'
import { useReversedColors } from '~components/__utilities__/v3'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import { ButtonContent, PendingContent } from './subcomponents'
import { type ButtonProps, type PendingButtonProps } from './types'
import styles from './Button.module.css'

export const Button = forwardRef(
  (
    {
      variant = 'primary',
      size = 'medium',
      className,
      children,
      isDisabled,
      isFullWidth = false,
      icon,
      iconPosition,
      hasHiddenLabel = false,
      isPending,
      hasHiddenPendingLabel: propsHasHiddenPendingLabel = false,
      pendingLabel,
      isReversed,
      ...restProps
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    const shouldUseReverse = useReversedColors()
    const isReversedVariant = isReversed ?? shouldUseReverse
    const pendingProps: PendingButtonProps = isPending
      ? {
          isPending,
          hasHiddenPendingLabel: hasHiddenLabel || propsHasHiddenPendingLabel,
          pendingLabel,
        }
      : {}
    const buttonContentClass = isPending
      ? !hasHiddenLabel && propsHasHiddenPendingLabel
        ? styles.retainContentWidth
        : styles.hideContentWidth
      : undefined

    return (
      <RACButton
        ref={ref}
        className={mergeClassNames(
          styles.button,
          styles[size],
          hasHiddenLabel && styles[`${size}IconButton`],
          isDisabled && styles.isDisabled,
          isReversedVariant ? styles[`${variant}Reversed`] : styles[variant],
          isFullWidth && styles.fullWidth,
          className,
        )}
        isDisabled={isDisabled}
        isPending={isPending}
        {...restProps}
      >
        {(racStateProps) => {
          const childIsFunction = typeof children === 'function'

          return (
            <>
              <ButtonContent
                size={size}
                icon={icon}
                iconPosition={iconPosition}
                hasHiddenLabel={hasHiddenLabel}
                className={buttonContentClass}
              >
                {childIsFunction ? children(racStateProps) : children}
              </ButtonContent>
              <span aria-live="polite">
                {pendingProps.isPending && <PendingContent {...pendingProps} size={size} />}
              </span>
            </>
          )
        }}
      </RACButton>
    )
  },
)

Button.displayName = 'Button'
