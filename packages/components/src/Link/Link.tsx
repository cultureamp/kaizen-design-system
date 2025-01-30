import React, { forwardRef } from 'react'
import { Link as RACLink, type LinkProps as RACLinkProps } from 'react-aria-components'
import { useReversedColors } from '~components/__utilities__/v3'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import { LinkContent } from './subcomponents/LinkContent'
import styles from './Link.module.css'

export type LinkProps = (UnderlinedLink | NonUnderlinedLink) & (InlineLink | NonInlineLink)

type BaseLinkProps = {
  variant: 'primary' | 'secondary'
  iconPosition?: 'start' | 'end'
  isReversed: boolean
} & Omit<RACLinkProps, 'children'> & {
    /** Used as the label for the Link. */
    children: RACLinkProps['children']
  }

export type UnderlinedLink = BaseLinkProps & {
  underlined: true
  icon?: JSX.Element
}

export type NonUnderlinedLink = BaseLinkProps & {
  underlined: false
  icon: JSX.Element
}

export type InlineLink = BaseLinkProps & {
  isInline: true
  size?: 'extra-small' | 'small' | 'body' | 'intro-lede'
}

export type NonInlineLink = BaseLinkProps & {
  isInline?: false
  size: 'extra-small' | 'small' | 'body' | 'intro-lede'
}

export const Link = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'body',
      icon,
      iconPosition = 'start',
      isInline = false,
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
          isInline ? styles.isInline : styles[size],
          isReversedVariant ? styles.reversed : styles[variant],
          className,
        )}
        isDisabled={isDisabled}
        {...otherProps}
      >
        {(racStateProps) => (
          <LinkContent
            icon={icon}
            iconPosition={iconPosition}
            underlined={underlined}
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
