import React from 'react'
import { Badge, BadgeAnimated } from '~components/Badge'
import {
  type ButtonBadgeProps,
  type GenericButtonProps,
  type WorkingButtonProps,
  type WorkingProps,
} from '../Button/GenericButton'
import { type ButtonProps } from '../__rc__/Button/Button'

export const isWorkingProps = (props: WorkingButtonProps): props is WorkingProps => {
  return props.working === true
}

/** Renders a badge with the given props. Determines if its a regular Badge or AnimatedBadge and renders accordingly. */
export const renderBadge = (badge: ButtonBadgeProps): JSX.Element => {
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

export const convertV1ToRcButtonProps = (oldProps: GenericButtonProps): ButtonProps => {
  const {
    label,
    id,
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
    icon,
    iconPosition,
    classNameOverride,
    component,
  } = oldProps

  let workingLabel, workingLabelHidden

  if (isWorkingProps(oldProps)) {
    ;({ workingLabel, workingLabelHidden } = oldProps)
  }

  console.log('Look here')
  console.log(typeof component === 'function')

  const newButtonProps = {
    variant: primary || destructive ? 'primary' : secondary ? 'tertiary' : 'primary',
    size: size === 'regular' ? 'large' : size === 'small' ? 'medium' : size,
    className: classNameOverride,
    children: component ? (
      component
    ) : (
      <>
        {label} {badge && renderBadge(badge)}
      </>
    ),
    isDisabled: disabled,
    isFullWidth: fullWidth,
    icon: icon,
    iconPosition: iconPosition,
    hasHiddenLabel: false,
    isReversed: reversed,
    type: type,
    ...(working !== undefined && {
      isPending: working,
      pendingLabel: workingLabel,
      hasHiddenPendingLabel: workingLabelHidden,
    }),
    id: id,
  }

  return newButtonProps as ButtonProps
}
