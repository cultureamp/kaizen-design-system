import React, { forwardRef } from 'react'
import { Link as RACLink, type LinkProps as RACLinkProps } from 'react-aria-components'
import { ButtonUIProps } from '~components/__actions__/Button/v3'
import { ButtonContent } from '~components/__actions__/Button/v3/subcomponents'
import { useReversedColors } from '~components/__utilities__/v3'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import buttonStyles from '../../Button/v3/Button.module.css'
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
