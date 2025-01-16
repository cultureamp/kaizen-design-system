import React, { forwardRef } from 'react'
import { Link as RACLink, type LinkProps as RACLinkProps } from 'react-aria-components'
import { useReversedColors } from '~components/__utilities__/v3'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import { LinkContent } from './subcomponents/LinkContent'
import styles from './Link.module.css'

export type LinkProps = UnderlinedLink

export type UnderlinedLink = {
  variant: 'primary' | 'secondary'
  size: 'extra-small' | 'small' | 'medium' | 'large'
  iconPosition?: 'start' | 'end'
  underlined: boolean
  isReversed: boolean
  icon: JSX.Element
} & Omit<RACLinkProps, 'children'> & {
    /** Used as the label for the Link. */
    children: RACLinkProps['children']
  }
/*
export type IconLink = UnderlinedLink & {
  underlined: false
  iconName: IconProps['name']
} */

export const Link = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      icon,
      iconPosition = 'start',
      isDisabled,
      className,
      isReversed,
      underlined,
      ...otherProps
    }: LinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => {
    const shouldUseReverse = useReversedColors()
    const isReversedVariant = isReversed ?? shouldUseReverse
    const childIsFunction = typeof children === 'function'

    return (
      <RACLink
        ref={ref}
        className={mergeClassNames(
          styles.link,
          isDisabled && styles.isDisabled,
          styles[size],
          isReversedVariant ? styles[`${variant}Reversed`] : styles[variant],
          className,
        )}
        isDisabled={isDisabled}
        {...otherProps}
      >
        {(racStateProps) => (
          <LinkContent icon={icon} iconPosition={iconPosition} underlined={underlined} size={size}>
            {childIsFunction ? children(racStateProps) : children}
          </LinkContent>
        )}
      </RACLink>
    )
  },
)

Link.displayName = 'Link'
