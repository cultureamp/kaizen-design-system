import React from 'react'
import { render } from '@testing-library/react'
import { Badge, BadgeAnimated } from '~components/Badge'
import { type ButtonProps } from '~components/Button'
import { type ButtonBadgeProps, type CustomButtonProps } from '~components/Button/GenericButton'
import { Button, type ButtonProps as NewButtonProps } from '../__rc__/Button/Button'
import { convertV1ToRcButtonProps, isWorkingProps, renderBadge } from './convertV1ToRcButtonProps'

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
  working: undefined,
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
  type: undefined,
  icon: <div> p </div>,
  iconPosition: 'start',
  id: '1',
}

const expectedPendingNewButtonProps: NewButtonProps = {
  ...expectedNewButtonProps,
  isPending: true,
  pendingLabel: 'Working...',
  hasHiddenPendingLabel: false,
}

describe('Test Convert Button Utils', () => {
  describe('isWorkingProps()', () => {
    it('should return true if workingLabel is in props', () => {
      expect(isWorkingProps(workingOldButtonProps)).toBe(true)
    })

    it('should return false if workingLabel is not in props', () => {
      expect(isWorkingProps(oldButtonProps)).toBe(false)
    })
  })

  describe('renderBadge()', () => {
    it('should return a Badge component', () => {
      const badge = renderBadge(oldButtonProps.badge)
      expect(badge).toEqual(
        <Badge variant="default" reversed={false}>
          Badge
        </Badge>,
      )
    })

    it('should return an animated Badge component', () => {
      const badge = renderBadge({
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

  describe('convertV1ToRcButtonProps()', () => {
    it('should convert v1 button props to rc button props', () => {
      const newButtonProps = convertV1ToRcButtonProps(oldButtonProps)
      expect(newButtonProps).toEqual(expectedNewButtonProps)
    })

    it('should convert working v1 button props to rc pending button props', () => {
      const newButtonProps = convertV1ToRcButtonProps(workingOldButtonProps)
      expect(newButtonProps).toEqual(expectedPendingNewButtonProps)
    })

    it('Should take button render props and pass it into the children', () => {
      const oldButtonPropsWithComponent = {
        ...oldButtonProps,
        component: (props: CustomButtonProps) => <div>{props.children}</div>,
      } satisfies ButtonProps

      const newButtonProps = convertV1ToRcButtonProps(oldButtonPropsWithComponent)
      expect(newButtonProps.children).toBeTypeOf('function')
    })
  })
})

// Simple button test, one with a working label, and one with a component render.

describe('Rendering buttons after converting v1 props to rc.', () => {
  it('should render a button that is reversed and primary', () => {
    const oldButton = { label: 'Default', reversed: true, primary: true } satisfies ButtonProps
    const newButton = convertV1ToRcButtonProps(oldButton)

    const { getByRole } = render(<Button {...newButton} />)
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('should render a button with a working label', () => {
    const oldButton = {
      label: 'Default',
      working: true,
      workingLabel: 'Working...',
      workingLabelHidden: false,
    } satisfies ButtonProps
    const newButton = convertV1ToRcButtonProps(oldButton)

    const { getByText } = render(<Button {...newButton} />)
    expect(getByText('Working...')).toBeInTheDocument()
  })

  /** Component props is still an unknown, showcased in this test. Button rc may need to be updated
   * to accept more than racProps
   */
  it('should render a button with a a component property', () => {
    const CustomComponent = (buttonProps: CustomButtonProps): JSX.Element => (
      <div {...buttonProps}>{buttonProps.href}</div>
    )
    const oldButton = {
      label: 'Default',
      href: 'https://www.google.com',
      component: CustomComponent,
    } satisfies ButtonProps
    const newButton = convertV1ToRcButtonProps(oldButton)

    const { getByText } = render(<Button {...newButton} />)
    expect(getByText('https://www.google.com')).toBeInTheDocument()
  })
})
