import React, { forwardRef } from 'react'

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
  return (
    <div>
      <a href={props.href} className={props.className} ref={ref}>
        {props.icon && props.icon}
        {props.label}
      </a>
    </div>
  )
})

Link.displayName = 'Link'
