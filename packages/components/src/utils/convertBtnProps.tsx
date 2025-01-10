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

export const badgeComponent = (badge: ButtonBadgeProps): JSX.Element => {
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
    href,
    newTabAndIUnderstandTheAccessibilityImplications,
    disableTabFocusAndIUnderstandTheAccessibilityImplications,
    component,
  } = oldProps

  let workingLabel, workingLabelHidden

  if (isWorkingProps(oldProps)) {
    ;({ workingLabel, workingLabelHidden } = oldProps)
  }

  const newButtonProps = {
    variant: primary || destructive ? 'primary' : secondary ? 'tertiary' : 'primary',
    size: size === 'regular' ? 'large' : size === 'small' ? 'medium' : size,
    className: classNameOverride,
    children: (
      <>
        {label} {badge && badgeComponent(badge)}
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
    href: href,
    newTabAndIUnderstandTheAccessibilityImplications:
      newTabAndIUnderstandTheAccessibilityImplications,
    disableTabFocusAndIUnderstandTheAccessibilityImplications:
      disableTabFocusAndIUnderstandTheAccessibilityImplications,
    component: component,
  }

  return newButtonProps as ButtonProps
}

// Test with isWorking and not isWorking. Check accessible label for button while pending.
// use getbyaccessbile name.
