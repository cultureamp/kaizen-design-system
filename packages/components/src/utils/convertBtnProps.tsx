import React from 'react'
import { Badge, BadgeAnimated } from '~components/Badge'
import {
  type ButtonBadgeProps,
  type GenericButtonProps,
  type WorkingProps,
} from '../Button/GenericButton'
import { type ButtonProps } from '../__rc__/Button/Button'

const isWorkingProps = (props: GenericButtonProps): props is WorkingProps => {
  return 'workingLabel' in props
}

const badgeComponent = (badge: ButtonBadgeProps): JSX.Element => {
  const { text, animateChange, reversed, variant } = badge

  return animateChange ? (
    <BadgeAnimated variant={variant} reversed={reversed}>
      {text}
    </BadgeAnimated>
  ) : (
    <Badge variant={variant} reversed={reversed}>
      {text}
    </Badge>
  )
}

export const convertBtnProps = (oldProps: GenericButtonProps): ButtonProps => {
  const {
    label,
    primary,
    destructive,
    secondary,
    disabled,
    size,
    badge,
    type,
    reversed,
    fullWidth,
    working,
  } = oldProps

  let workingLabel, workingLabelHidden

  if (isWorkingProps(oldProps)) {
    ;({ workingLabel, workingLabelHidden } = oldProps)
  }

  return {
    variant: primary || destructive ? 'primary' : secondary ? 'tertiary' : 'primary',
    size: size === 'regular' ? 'large' : size === 'small' ? 'medium' : size,
    className: undefined,
    children: (
      <>
        {label} {badge && badgeComponent(badge)}
      </>
    ),
    isDisabled: disabled,
    isFullWidth: fullWidth,
    icon: undefined,
    iconPosition: undefined,
    hasHiddenLabel: false,
    isPending: working ?? false,
    hasHiddenPendingLabel: workingLabelHidden ?? undefined,
    pendingLabel: workingLabel ?? undefined,
    isReversed: reversed,
    type: type,
  }
}
