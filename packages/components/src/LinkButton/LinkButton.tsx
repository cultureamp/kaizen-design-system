import React, { forwardRef } from 'react'
import { Link as RACLink, type LinkProps as RACLinkProps } from 'react-aria-components'
import { type ButtonUIProps } from '~components/__next__/Button'
import { ButtonContent } from '~components/__next__/Button/subcomponents'
import { useReversedColors } from '~components/utils'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import buttonStyles from '../__next__/Button/Button.module.css'
import styles from './LinkButton.module.css'

export type LinkButtonProps = ButtonUIProps &
  Omit<RACLinkProps, 'children'> & {
    /** Used as the label for the LinkButton. */
    children: RACLinkProps['children']
  }

export const LinkButton = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      icon,
      iconPosition = 'start',
      hasHiddenLabel = false,
      isFullWidth = false,
      isDisabled,
      className,
      isReversed,
      ...otherProps
    }: LinkButtonProps,
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => {
    const shouldUseReverse = useReversedColors()
    const isReversedVariant = isReversed ?? shouldUseReverse

    return (
      <RACLink
        ref={ref}
        className={mergeClassNames(
          styles.linkButton,
          buttonStyles.button,
          buttonStyles[size],
          hasHiddenLabel && buttonStyles[`${size}IconButton`],
          isDisabled && buttonStyles.isDisabled,
          isReversedVariant ? buttonStyles[`${variant}Reversed`] : buttonStyles[variant],
          isFullWidth && buttonStyles.fullWidth,
          className,
        )}
        isDisabled={isDisabled}
        {...otherProps}
      >
        {(racStateProps) => {
          const childIsFunction = typeof children === 'function'

          return (
            <ButtonContent
              size={size}
              icon={icon}
              iconPosition={iconPosition}
              hasHiddenLabel={hasHiddenLabel}
            >
              {childIsFunction ? children(racStateProps) : children}
            </ButtonContent>
          )
        }}
      </RACLink>
    )
  },
)

LinkButton.displayName = 'LinkButton'
