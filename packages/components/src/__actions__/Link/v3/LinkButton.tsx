import React from "react"
import { Link as RACLink } from "react-aria-components"
import { LoadingSpinner } from "~components/Loading"
import { useReversedColors } from "~components/__utilities__/v3"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import styles from "./Button.module.scss"

export type ButtonVariants = "primary" | "secondary" | "tertiary"
export type ButtonSizes = "small" | "medium" | "large"

// type ButtonPendingProps = {
//   isPending?: false
//   /** Rendered as the child while `pendingLabel` is `true` */
//   pendingLabel?: string
//   /** Hides the `pendingLabel` and renders only the loading spinner if `isPending` is `true`. This will still be used as the accessible label.
//    * @default false
//    */
//   isPendingLabelVisible?: boolean
// }

// type ButtonContentProps = {
//   /** The visual label of Button. */
//   label?: string
//   icon?: JSX.Element
//   /** `iconPosition` will only control icons passed in as a prop
//    * @default "start"
//    */
//   iconPosition?: "start" | "end"
//   /** The visual size of the button. `medium` was formerly `regular`
//    * @default "primary"
//    */
//   children?: never
// } & ButtonPendingProps

// type ButtonContentWithChildrenProps = {
//   children: RACButtonProps["children"]
//   label?: never
//   icon?: never
//   iconPosition?: never
// } & ButtonPendingProps

export type ButtonBaseProps = {
  /** The visual label of Button. */
  label?: string
  icon?: JSX.Element
  /** `iconPosition` will only control icons passed in as a prop
   * @default "start"
   */
  iconPosition?: "start" | "end"
  /** The visual size of the button. `medium` was formerly `regular`
   * @default "primary"
   */
  variant?: ButtonVariants
  /** The visual size of the button. `medium` was formerly `regular`
   * @default "medium"
   */
  size?: ButtonSizes
  /** Determines if the button should fill the width of its container
   * @default false
   */
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
} & Omit<RACButtonProps, "children">

export type ButtonWithoutChildren = ButtonBaseProps & {
  label: string
  children?: never
}

export type ButtonWithChildren = ButtonBaseProps & {
  label?: never
  children: RACButtonProps["children"]
}

export type ButtonProps = ButtonWithoutChildren | ButtonWithChildren

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

// TODO: the content width based on the total size of the button content
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
      {/* TODO: the loading spinner will need to take size */}
      <LoadingSpinner size="md" accessibilityLabel={pendingLabel} />
    </>
  )
}

const ButtonContent = (props: ButtonProps): JSX.Element => {
  const hasChildren = "children" in props

  return hasChildren ? (
    <>{props.children}</>
  ) : (
    <>
      {props.iconPosition !== "end" && props.icon}
      {props.label}
      {props.iconPosition === "end" && props.icon}
    </>
  )
}

export const Button = ({
  variant = "primary",
  className,
  size = "medium",
  isFullWidth,
  // isPending,
  ...otherProps
}: ButtonProps): JSX.Element => {
  const isReversed = useReversedColors()

  return (
    <RACLink
      aria-live={"pendingLabel" in otherProps ? "polite" : undefined}
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
      <ButtonContent {...otherProps} />
    </RACLink>
  )
}
