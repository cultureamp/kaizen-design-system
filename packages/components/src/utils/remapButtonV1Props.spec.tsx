import React from 'react'
import { vi } from 'vitest'
import { type ButtonProps as OldButtonProps } from '~components/Button'
import { type CustomButtonProps } from '~components/Button/GenericButton'
import { type LinkButtonProps } from '~components/LinkButton'
import { type ButtonProps } from '~components/__next__/Button'
import { Icon } from '~components/__next__/Icon'
import { remapV1ButtonProps, type RemappedButtonProps } from './remapButtonV1Props'

const onClickMock = vi.fn()
const renderPropsMock = ({
  onClick,
  children,
  className,
  href,
  ...otherProps
}: CustomButtonProps): JSX.Element => (
  <a className={className} onClick={onClick} href={href} {...otherProps}>
    {children}
  </a>
)

const v1ButtonAllProps = {
  label: 'Label',
  reversed: true,
  onClick: onClickMock,
  href: 'https://www.google.com',
  newTabAndIUnderstandTheAccessibilityImplications: true,
  disableTabFocusAndIUnderstandTheAccessibilityImplications: true,
  component: ({ children, ...otherProps }) => <div {...otherProps}>{children}</div>,
  classNameOverride: 'newClass',
  primary: false,
  destructive: true,
  secondary: false,
  size: 'regular',
  badge: {
    text: 'Badge',
    animateChange: false,
    reversed: false,
    variant: 'default',
  },
  iconPosition: 'start',
  icon: <Icon name="thumb_up" isPresentational />,
  disabled: true,
  working: true,
  workingLabel: 'Loading',
  workingLabelHidden: false,
  fullWidth: true,
  onMouseDown: onClickMock,
  form: 'form-id',
  formAction: 'act',
  formMethod: 'GET',
} satisfies OldButtonProps

describe('remapV1ButtonProps', () => {
  it('remaps basic button props to new props', () => {
    const newProps = remapV1ButtonProps({
      label: 'Label',
      onClick: onClickMock,
      size: 'regular',
      primary: true,
      classNameOverride: 'custom-class',
    })
    const expectedOutput = {
      children: 'Label',
      onPress: onClickMock,
      size: 'large',
      variant: 'primary',
      className: 'custom-class',
    } satisfies ButtonProps

    expect(newProps).toEqual(expectedOutput)
  })

  it('returns link props with target and rel if newTabAndIUnderstandTheAccessibilityImplications is true', () => {
    const newProps = remapV1ButtonProps({
      label: 'Label',
      reversed: false,
      href: 'https://www.google.com',
      onClick: onClickMock,
      size: 'regular',
      newTabAndIUnderstandTheAccessibilityImplications: true,
    })
    const expectedOutput = {
      children: 'Label',
      isReversed: false,
      onPress: onClickMock,
      size: 'large',
      variant: 'secondary',
      href: 'https://www.google.com',
      target: '_blank',
      rel: 'noopener noreferrer',
    } satisfies LinkButtonProps

    expect(newProps).toEqual(expectedOutput)
  })

  it('remaps working props to pending props', () => {
    const newProps = remapV1ButtonProps({
      label: 'Label',
      onClick: onClickMock,
      size: 'regular',
      working: true,
      workingLabel: 'loading',
      workingLabelHidden: true,
    })
    const expectedOutput = {
      children: 'Label',
      hasHiddenPendingLabel: true,
      isPending: true,
      onPress: onClickMock,
      pendingLabel: 'loading',
      size: 'large',
      variant: 'secondary',
    } satisfies ButtonProps
    expect(newProps).toEqual(expectedOutput)
  })

  it('keeps the component render props if provided', () => {
    const newProps = remapV1ButtonProps({
      label: 'Label',
      reversed: false,
      href: 'https://www.google.com',
      onClick: onClickMock,
      size: 'regular',
      component: renderPropsMock,
    })
    const expectedOutput = {
      children: 'Label',
      isReversed: false,
      onPress: onClickMock,
      size: 'large',
      variant: 'secondary',
      href: 'https://www.google.com',
      unsafeV1ButtonProps: {
        component: renderPropsMock,
      },
    }

    expect(newProps).toEqual(expectedOutput)
  })

  it('can remap all of v1 button declared props', () => {
    const newProps = remapV1ButtonProps(v1ButtonAllProps)

    const expectedOutput = {
      children: 'Label',
      className: 'newClass',
      form: 'form-id',
      formAction: 'act',
      formMethod: 'GET',
      hasHiddenPendingLabel: false,
      href: 'https://www.google.com',
      icon: <Icon isPresentational={true} name="thumb_up" />,
      iconPosition: 'start',
      isDisabled: true,
      isFullWidth: true,
      isPending: true,
      isReversed: true,
      onPress: onClickMock,
      onPressStart: onClickMock,
      pendingLabel: 'Loading',
      rel: 'noopener noreferrer',
      size: 'large',
      target: '_blank',
      variant: 'tertiary',
      unsafeV1ButtonProps: {
        badge: {
          animateChange: false,
          reversed: false,
          text: 'Badge',
          variant: 'default',
        },
        component: v1ButtonAllProps.component,
      },
    } satisfies RemappedButtonProps

    expect(newProps).toEqual(expectedOutput)
  })
})
