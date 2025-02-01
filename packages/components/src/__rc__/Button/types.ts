import { type ButtonProps as RACButtonProps } from 'react-aria-components'

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary'

export type ButtonSizes = 'small' | 'medium' | 'large'

export type PendingPropsUndefined = {
  isPending?: undefined
  /** Rendered as the child while `isPending` is `true`. This determines the accessible label for the Button while pending. */
  pendingLabel?: never
  /** Visually hides the `pendingLabel` and renders the loading spinner. This will maintain the width of the Button's `children` to avoid layout shifts.
   * @default false
   */
  hasHiddenPendingLabel?: never
}

export type PendingProps = {
  isPending: boolean
  /** Rendered as the child while `pendingLabel` is `true`. This determines the accessible label for the Button while pending. */
  pendingLabel: string
  /** Visually Hides the `pendingLabel` and renders the loading spinner. This will maintain the width of the Button's `children` to avoid layout shifts.
   * @default false
   */
  hasHiddenPendingLabel?: boolean
}

export type PendingButtonProps = PendingProps | PendingPropsUndefined

/** Shared UI props between Button and LinkButton */
export type ButtonUIProps = {
  /** Visually hides the Button's child content used as the label and the `pendingLabel`. Use for icon-only `Button`. @default "false" */
  hasHiddenLabel?: boolean
  /** The visual style of the button.
   *  @default "default" */
  variant?: ButtonVariants
  /** The visual size of the button. `medium` was formerly `regular`
   *  @default "medium" */
  size?: ButtonSizes
  /** Renders an icon at the `iconPosition` provided. To the size scales with the button, we recommend using the `Icon` component from `"@kaizen/components/future"` */
  icon?: JSX.Element
  /** Controls the position of the Icon passed in as props. @default "start" */
  iconPosition?: 'start' | 'end'
  /** Controls if the button inherits width from its parent. @default "false" */
  isFullWidth?: boolean
  /**
   * Controls the reversed style of Button
   * @deprecated Use the ReversedColors Provider instead. This is here to support gradual migration to the ReversedColors Provider and will take precedence if a value is provided. {@link https://cultureamp.design/?path=/docs/actions-button-button-v3-api-specification--docs#variants}
   */
  isReversed?: boolean
}

export type ButtonProps = ButtonUIProps &
  PendingButtonProps &
  Omit<RACButtonProps, 'children'> & {
    /** Used as the label for the button. */
    children: RACButtonProps['children']
  }
