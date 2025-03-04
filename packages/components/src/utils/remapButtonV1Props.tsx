import React from 'react'
import { type ButtonProps as V1ButtonProps } from '~components/Button'
import { LinkButton, type LinkButtonProps } from '~components/LinkButton'
import { Button, type ButtonProps } from '~components/__next__/Button'

type NewButtonProps = Partial<LinkButtonProps | ButtonProps> & Record<string, any>

const getNewSizeValue = (v1ButtonSize: V1ButtonProps['size']): ButtonProps['size'] => {
  switch (v1ButtonSize) {
    case 'small':
      return 'medium'
    case 'regular':
      return 'large'
    default:
      return 'large'
  }
}

const transformV1ButtonProp = (propName: string, propValue: any): NewButtonProps | null => {
  switch (propName) {
    case 'onClick':
      return { onPress: propValue }
    case 'reversed':
      return { isReversed: propValue }
    case 'classNameOverride':
      return { className: propValue }
    case 'data-automation-id':
      return { 'data-testid': propValue }
    case 'fullWidth':
      return { isFullWidth: propValue }
    case 'working':
      return { isPending: propValue }
    case 'workingLabel':
      return { pendingLabel: propValue }
    case 'workingLabelHidden':
      return { hasHiddenPendingLabel: propValue }
    case 'onMouseDown':
      return { onPressStart: propValue }
    case 'disableTabFocusAndIUnderstandTheAccessibilityImplications':
      return null
    case 'newTabAndIUnderstandTheAccessibilityImplications':
      return { target: '_blank', rel: 'noopener noreferrer' }
    case 'disabled':
      return { isDisabled: propValue }
    case 'size':
      return { size: getNewSizeValue(propValue) }
    case 'label':
      return { children: propValue }
    case 'primary':
      return { variant: 'primary' }
    case 'secondary':
      return { variant: 'tertiary' }
    case 'destructive':
      return null
    case 'component':
      return null
    case 'badge':
      return null
    default:
      return { [propName]: propValue }
  }
}

export type RemappedButtonProps = NewButtonProps & {
  /** these are props that may not be safely remapped and added into the new component */
  unsafeV1ButtonProps?: {
    badge?: V1ButtonProps['badge']
    component?: V1ButtonProps['component']
  }
}

export const remapV1ButtonProps = (props: V1ButtonProps): RemappedButtonProps => {
  let hasSizeProp = false
  let hasVariant = false
  let hasComponent = false
  let hasBadge = false

  const remappedButtonProps: RemappedButtonProps = Object.keys(props).reduce(
    (acc, currentPropName: string) => {
      const propValue = props[currentPropName as keyof V1ButtonProps]

      if (currentPropName === 'primary' || currentPropName === 'secondary') {
        hasVariant = true
      }

      if (currentPropName === 'badge') {
        hasBadge = true
      }

      if (currentPropName === 'component') {
        hasComponent = true
      }

      if (currentPropName === 'size') {
        hasSizeProp = true
      }

      const newProp = transformV1ButtonProp(currentPropName, propValue)

      if (newProp === null) return acc

      return { ...acc, ...newProp }
    },
    {},
  )

  if (hasComponent) {
    remappedButtonProps.unsafeV1ButtonProps = {
      ...remappedButtonProps.unsafeV1ButtonProps,
      component: props.component,
    }
  }

  if (hasBadge) {
    remappedButtonProps.unsafeV1ButtonProps = {
      ...remappedButtonProps.unsafeV1ButtonProps,
      badge: props.badge,
    }
  }

  if (!hasVariant) {
    remappedButtonProps.variant = 'secondary'
  }

  if (!hasSizeProp) {
    remappedButtonProps.size = 'large'
  }

  return remappedButtonProps
}
