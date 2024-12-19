import { type GenericButtonProps } from '../Button/GenericButton'
import { type ButtonProps } from '../__rc__/Button/Button'

export const convertBtnProps = (oldProps: GenericButtonProps): ButtonProps => {
  // How to handle workingLabel, workingLabelHidden, and type?

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
    workingLabel,
    workingLabelHidden,
  } = oldProps

  return {
    variant: primary || destructive ? 'primary' : secondary ? 'tertiary' : 'primary',
    size: size === 'regular' ? 'large' : size === 'small' ? 'medium' : size,
    className: '',
    children: { label, badge },
    isDisabled: disabled,
    isFullWidth: fullWidth,
    icon: undefined,
    iconPosition: undefined,
    hasHiddenLabel: false,
    isPending: working ?? false,
    hasHiddenPendingLabel: workingLabelHidden ?? undefined,
    pendingLabel: workingLabel ?? undefined,
    isReversed: reversed,
  }
}