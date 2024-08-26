import React from "react"
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components"
import { LoadingSpinner } from "~components/Loading"
import { useReversedColors } from "~components/__utilities__/v3"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import styles from "./Button.module.scss"

export type ButtonVariants = "primary" | "secondary" | "tertiary"

type SharedButtonProps = {
  variant?: ButtonVariants
  /** The visual size of the button. `medium` was formerly `regular`
   * @default "medium"
   */
  size?: "small" | "medium" | "large"
  isFullWidth?: boolean
  /** Triggers a pending state and stops additional press events while waiting for a server response
   * @default false
   */
  isPending?: false
  /** Rendered as the child while `pendingLabel` is `true` */
  pendingLabel?: string
  /** Hides the `pendingLabel` and renders only the loading spinner if `isPending` is `true`. This will still be used as the accessible label.
   * @default false
   */
  isPendingLabelVisible?: boolean
}

export type ButtonWithoutChildren = SharedButtonProps &
  Omit<RACButtonProps, "children"> & {
    /** The visual label of Button. */
    label: string
    icon: JSX.Element
    /** `iconPosition` will only control icons passed in as a prop
     * @default "start"
     */
    iconPosition?: "start" | "end"
    /** Determines if the button should fill the width of its container
     * @default false
     */
  }

export type ButtonWithChildren = SharedButtonProps & RACButtonProps

export type ButtonProps = ButtonWithChildren | ButtonWithoutChildren

// export type ButtonProps = RACButtonProps & {
//   /** The visual label of Button. */
//   label?: string
//   /** The visual style of the button.
//    * @default "primary"
//    */
//   variant?: ButtonVariants
//   /** The visual size of the button. `medium` was formerly `regular`
//    * @default "medium"
//    */
//   size?: "small" | "medium" | "large"
//   /** renders an JSX icon at the start or end of the button component */
//   icon?: JSX.Element
//   /** `iconPosition` will only control icons passed in as a prop
//    * @default "start"
//    */
//   iconPosition?: "start" | "end"
//   /** Determines if the button should fill the width of its container
//    * @default false
//    */
//   isFullWidth?: boolean
//   /** Triggers a pending state and stops additional press events while waiting for a server response
//    * @default false
//    */
//   isPending?: false
//   /** Rendered as the child while `pendingLabel` is `true` */
//   pendingLabel?: string
//   /** Hides the `pendingLabel` and renders only the loading spinner if `isPending` is `true`. This will still be used as the accessible label.
//    * @default false
//    */
//   isPendingLabelVisible?: boolean
// }

export type PendingButtonProps = Omit<
  ButtonProps,
  "isPending" | "pendingLabel"
> & {
  /** Triggers a pending state and stops additional press events while waiting for a server response */
  isPending: true
  /** Rendered as the child of the button during pending state */
  pendingLabel: string
  /** Hides the `pendingLabel` and renders only the loading spinner if `isPending` is `true`. This will still be used as the accessible label.
   * @default false
   */
  isPendingLabelVisible?: boolean
}

// TODO: smart way to define the content width based on the total size of the button content - if there's a way not to have to pass in all of button props that would be good
const PendingContent = ({
  pendingLabel,
  isPendingLabelVisible,
}: PendingButtonProps): JSX.Element => {
  if (isPendingLabelVisible) {
    return (
      <>
        {pendingLabel}
        <LoadingSpinner size="md" accessibilityLabel="" />
      </>
    )
  }

  return (
    <>
      <LoadingSpinner size="md" accessibilityLabel={pendingLabel} />
    </>
  )
}

export const Button = ({
  variant = "primary",
  className,
  size = "medium",
  isFullWidth,
  isPending,
  ...otherProps
}: ButtonProps | PendingButtonProps): JSX.Element => {
  const isReversed = useReversedColors()
  const hasChildren = "children" in otherProps

  return (
    <RACButton
      aria-live={"workingLabel" in otherProps ? "polite" : undefined}
      className={mergeClassNames(
        styles.button,
        styles[variant],
        styles[size],
        isFullWidth && styles.fullWidth,
        isReversed && styles.reversed,
        className
      )}
      {...otherProps}
    >
      {/* TODO: maybe children is always there just visually hidden and removed from the a11y dom when it is pending */}
      {isPending ? (
        <PendingContent {...(otherProps as PendingButtonProps)} />
      ) : (
        hasChildren && otherProps.children
      )}
    </RACButton>
  )
}
