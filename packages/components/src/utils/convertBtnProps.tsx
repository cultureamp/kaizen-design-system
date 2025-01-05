import React from 'react'
import { Badge, BadgeAnimated } from '~components/Badge'
import {
  type ButtonBadgeProps,
  type GenericButtonProps,
  type WorkingButtonProps,
  type WorkingProps,
} from '../Button/GenericButton'
import { type ButtonProps } from '../__rc__/Button/Button'

const isWorkingProps = (props: WorkingButtonProps): props is WorkingProps => {
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

  const newButtonProps: ButtonProps = {
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
    isReversed: reversed,
    type: type,
    isPending: working,
  }

  if (working !== undefined) {
    newButtonProps.isPending = working
    newButtonProps.pendingLabel = workingLabel
    newButtonProps.hasHiddenPendingLabel = workingLabelHidden
  }

  return newButtonProps
}
