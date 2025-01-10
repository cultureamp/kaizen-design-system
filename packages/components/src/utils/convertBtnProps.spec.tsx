/*
export const ConvertPropsTestPending: Story = {
  render: () => {
    const [state, setState] = useState<'Ready' | 'Working' | 'Completed'>('Ready')
    const handleClick = (): void => {
      if (state === 'Ready') {
        setState('Working')
        setTimeout(() => setState('Completed'), 3000)
      } else {
        setState('Ready')
      }
    }
    const props = convertBtnProps({
      label: 'Label',
      working: state === 'Working',
      workingLabel: 'Button is doing some work',
      workingLabelHidden: true,
    })
    return <Button {...props} onPress={handleClick} />
  },
}
*/

import React from 'react'
import { Badge, BadgeAnimated } from '~components/Badge'
import { type ButtonProps } from '~components/Button'
import { type ButtonBadgeProps } from '~components/Button/GenericButton'
import { type ButtonProps as NewButtonProps } from '../__rc__/Button/Button'
import { badgeComponent, convertBtnProps, isWorkingProps } from './convertBtnProps'

const oldButtonProps = {
  label: 'Label',
  id: '1',
  reversed: false,
  onClick: () => {
    console.log('Hello, World!')
  },
  href: undefined,
  newTabAndIUnderstandTheAccessibilityImplications: false,
  disableTabFocusAndIUnderstandTheAccessibilityImplications: false,
  component: undefined,
  classNameOverride: 'New Cool Button',
  primary: false,
  destructive: false,
  secondary: false,
  size: 'regular',
  badge: {
    text: 'Badge',
    animateChange: false,
    reversed: false,
    variant: 'default',
  },
  iconPosition: 'start',
  icon: <div> p </div>,
  disabled: false,
  working: false,
} satisfies ButtonProps

const workingOldButtonProps = {
  ...oldButtonProps,
  working: true,
  workingLabel: 'Working...',
  workingLabelHidden: false,
} satisfies ButtonProps

const expectedNewButtonProps: NewButtonProps = {
  variant: 'primary',
  size: 'large',
  className: 'New Cool Button',
  children: (
    <>
      Label{' '}
      <Badge variant="default" reversed={false}>
        Badge
      </Badge>
    </>
  ),
  isDisabled: false,
  isFullWidth: undefined,
  hasHiddenLabel: false,
  isReversed: false,
  isPending: false,
  type: undefined,
  icon: <div> p </div>,
  iconPosition: 'start',
  component: undefined,
  href: undefined,
  id: '1',
  newTabAndIUnderstandTheAccessibilityImplications: false,
  disableTabFocusAndIUnderstandTheAccessibilityImplications: false,
}

const expectedPendingNewButtonProps: NewButtonProps = {
  ...expectedNewButtonProps,
  isPending: true,
  pendingLabel: 'Working...',
  hasHiddenPendingLabel: false,
}

describe('convertBtnProps()', () => {
  describe('isWorkingProps()', () => {
    it('should return true if workingLabel is in props', () => {
      expect(isWorkingProps(workingOldButtonProps)).toBe(true)
    })

    it('should return false if workingLabel is not in props', () => {
      expect(isWorkingProps(oldButtonProps)).toBe(false)
    })
  })

  describe('badgeComponent()', () => {
    it('should return a Badge component', () => {
      const badge = badgeComponent(oldButtonProps.badge)
      expect(badge).toEqual(
        <Badge variant="default" reversed={false}>
          Badge
        </Badge>,
      )
    })

    it('should return an animated Badge component', () => {
      const badge = badgeComponent({
        text: 'Badge',
        animateChange: true,
        reversed: false,
        variant: 'default',
      } satisfies ButtonBadgeProps)
      expect(badge).toEqual(
        <BadgeAnimated variant="default" reversed={false}>
          Badge
        </BadgeAnimated>,
      )
    })
  })

  describe('convertBtnProps()', () => {
    it('should convert old button props to new button props', () => {
      const newButtonProps = convertBtnProps(oldButtonProps)
      expect(newButtonProps).toEqual(expectedNewButtonProps)
    })

    it('should convert working old button props to new button props', () => {
      const newButtonProps = convertBtnProps(workingOldButtonProps)
      expect(newButtonProps).toEqual(expectedPendingNewButtonProps)
    })
  })
})
