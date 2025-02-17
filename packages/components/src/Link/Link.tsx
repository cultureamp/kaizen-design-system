import React, { forwardRef } from 'react'
import { Link as RACLink, type LinkProps as RACLinkProps } from 'react-aria-components'
import { type TextProps } from '~components/Text'
import { mergeClassNames } from '~components/utils/mergeClassNames'
import { LinkContent } from './subcomponents/LinkContent'
import styles from './Link.module.css'

export type LinkProps = (UnderlinedLink | NonUnderlinedLink) & (InlineLink | NonInlineLink)

type BaseLinkProps = {
  /** Controls the visual style of a link. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'white'
  /** Controls the postion of a link. @default 'end' */
  iconPosition?: 'start' | 'end'
} & Omit<RACLinkProps, 'children'> & {
    /** Used as the label for the Link. */
    children: RACLinkProps['children']
  }

export type UnderlinedLink = BaseLinkProps & {
  /** Toggles the underline of the icon and children @default true */
  isUnderlined?: true
  /** The icon to be displayed, optional when link is underlined */
  icon?: JSX.Element
}

export type NonUnderlinedLink = BaseLinkProps & {
  /** Toggles the underline of the icon and children */
  isUnderlined?: false
  /** The icon to be displayed, required when link is not underlined */
  icon: JSX.Element
}

export type InlineLink = BaseLinkProps & {
  /** isInline assumes the Link is wrapped in a [Text](https://cultureamp.design/?path=/docs/components-text--docs) component */
  isInline: true
  /** The size of the link, not passed when isInline */
  size?: never
}

export type NonInlineLink = BaseLinkProps & {
  /** isInline assumes the Link is wrapped in a [Text](https://cultureamp.design/?path=/docs/components-text--docs) component @default false */
  isInline?: false
  /** The size of the link @default 'body'*/
  size?: TextProps['variant']
}

export const Link = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'body',
      icon,
      iconPosition = 'end',
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
