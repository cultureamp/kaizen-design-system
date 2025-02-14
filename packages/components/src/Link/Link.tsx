import React, { forwardRef } from 'react'
import { Link as RACLink, type LinkProps as RACLinkProps } from 'react-aria-components'
import { type TextProps } from '~components/Text'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import { LinkContent } from './subcomponents/LinkContent'
import styles from './Link.module.css'

export type LinkProps = (UnderlinedLink | NonUnderlinedLink) & (InlineLink | NonInlineLink)

type BaseLinkProps = {
  variant: 'primary' | 'secondary' | 'white'
  iconPosition?: 'start' | 'end'
} & Omit<RACLinkProps, 'children'> & {
    /** Used as the label for the Link. */
    children: RACLinkProps['children']
  }

export type UnderlinedLink = BaseLinkProps & {
  isUnderlined: true
  icon?: JSX.Element
}

export type NonUnderlinedLink = BaseLinkProps & {
  isUnderlined: false
  icon: JSX.Element
}

export type InlineLink = BaseLinkProps & {
  /** isInline assumes the Link is wrapped in a [Text](https://cultureamp.design/?path=/docs/components-text--docs) component */
  isInline: true
  size?: TextProps['variant']
}

export type NonInlineLink = BaseLinkProps & {
  isInline?: false
  size: TextProps['variant']
}

/*
function isInlineLink(link: LinkProps): link is InlineLink {
  return link.isInline === true
} */

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
      isUnderlined = true,
      ...otherProps
    }: LinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => {
    const childIsFunction = typeof children === 'function'

    return (
      <RACLink
        ref={ref}
        className={mergeClassNames(
          styles.link,
          isDisabled && styles.isDisabled,
          isInline ? styles.isInline : styles[size],
          styles[variant],
          className,
        )}
        isDisabled={isDisabled}
        {...otherProps}
      >
        {(racStateProps) => (
          <LinkContent icon={icon} iconPosition={iconPosition} isUnderlined={isUnderlined}>
            {childIsFunction ? children(racStateProps) : children}
          </LinkContent>
        )}
      </RACLink>
    )
  },
)

Link.displayName = 'Link'
