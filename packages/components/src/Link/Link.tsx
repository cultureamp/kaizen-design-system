import React, { forwardRef } from 'react'
import { Icon, type IconProps } from '~components/__rc__/Icon/Icon'

export type LinkProps = UnderlinedLink | IconLink

export type UnderlinedLink = {
  variant: 'primary' | 'secondary'
  size: 'extra-small' | 'small' | 'medium' | 'large'
  state: 'base' | 'hover' | 'active'
  icon?: 'none' | 'start' | 'end'
  iconVariant: 'none' | 'add'
  href: string
  underlined: true
  label: string
  className: string
  isDisabled: boolean
  isFocuses: boolean
}

export type IconLink = UnderlinedLink & {
  underlined: false
  icon: JSX.Element
}

export const Link = forwardRef((props: LinkProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
  const iconProps: IconProps = {
    name: props.iconVariant,
    isPresentational: true,
  }

  return (
    <div>
      <a href={props.href} className={props.className} ref={ref}>
        {props.icon == 'start' ? (
          <>
            {' '}
            <Icon {...iconProps} /> label{' '}
          </>
        ) : props.icon == 'end' ? (
          <>
            {' '}
            label <Icon {...iconProps} />{' '}
          </>
        ) : (
          props.label
        )}
        {props.label}
      </a>
    </div>
  )
})

Link.displayName = 'Link'
