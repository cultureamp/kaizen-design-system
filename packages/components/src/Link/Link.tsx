import React, { forwardRef } from 'react'
import { Link as RACLink, type LinkProps as RACLinkProps } from 'react-aria-components'
import { useReversedColors } from '~components/__utilities__/v3'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import { LinkContent } from './subcomponents/LinkContent'
import styles from './Link.module.css'

export type LinkProps = UnderlinedLink | IconLink

type BaseLinkProps = {
  variant: 'primary' | 'secondary'
  size: 'extra-small' | 'small' | 'medium' | 'large'
  iconPosition?: 'start' | 'end'
  isReversed: boolean
  isInline: boolean
} & Omit<RACLinkProps, 'children'> & {
    /** Used as the label for the Link. */
    children: RACLinkProps['children']
  }

export type UnderlinedLink = BaseLinkProps & {
  underlined: true
  icon?: JSX.Element
}

export type IconLink = BaseLinkProps & {
  underlined: false
  icon: JSX.Element
}

export const Link = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      icon,
      iconPosition = 'start',
      isInline = true,
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
          isReversedVariant ? styles.reversed : styles[variant],
          className,
          isInline && styles.isInline,
        )}
        isDisabled={isDisabled}
        {...otherProps}
      >
        {(racStateProps) => (
          <LinkContent
            icon={icon}
            iconPosition={iconPosition}
            underlined={underlined}
            size={size}
            isInline={isInline}
          >
            {childIsFunction ? children(racStateProps) : children}
          </LinkContent>
        )}
      </RACLink>
    )
  },
)

Link.displayName = 'Link'
