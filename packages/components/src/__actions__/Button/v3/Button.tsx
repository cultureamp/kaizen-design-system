import React from "react"
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components"
import { useReversedColors } from "~components/__utilities__/v3"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import styles from "./Button.module.css"

export type ButtonVariant = "primary" | "secondary" | "tertiary"
export type ButtonSize = "small" | "medium" | "large"

// TODO: we need to have type safe
type PendingButtonProps = {
  isPending?: false
  /** Rendered as the child while `pendingLabel` is `true` */
  pendingLabel?: string
  /** Hides the `pendingLabel` and renders only the loading spinner if `isPending` is `true`. This will still be used as the accessible label.
   * @default false
   */
  isPendingLabelVisible?: boolean
}

export type ButtonProps = RACButtonProps &
  PendingButtonProps & {
    /** The visual style of the button.
     *  @default "default" */
    variant?: ButtonVariant
    /** The visual size of the button. `medium` was formerly `regular`
     *  @default "medium" */
    size?: ButtonSize
    isPending?: boolean
    pendingLabel?: string
  }

export const Button = ({
  // TODO: in the original button v3 this was set to "default", which is close to "secondary" styles
  variant = "primary",
  className,
  size = "medium",
  children,
  ...otherProps
}: ButtonProps): JSX.Element => {
  const isReversed = useReversedColors()

  return (
    <RACButton
      className={mergeClassNames(
        styles.button,
        styles[variant],
        styles[size],
        isReversed && styles.reversed,
        className
      )}
      {...otherProps}
    >
      {children}
    </RACButton>
  )
}

// import React from "react"
// import {
//   Button as RACButton,
//   ButtonProps as RACButtonProps,
// } from "react-aria-components"
// import { LoadingSpinner } from "~components/Loading"
// import { useReversedColors } from "~components/__utilities__/v3"
// import { mergeClassNames } from "~components/utils/mergeClassNames"
// import styles from "./Button.module.scss"

// export type ButtonVariants = "primary" | "secondary" | "tertiary"
// export type ButtonSizes = "small" | "medium" | "large"

// export type ButtonBaseProps = {
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
//   variant?: ButtonVariants
//   /** The visual size of the button. `medium` was formerly `regular`
//    * @default "medium"
//    */
//   size?: ButtonSizes
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

// export type ButtonWithoutChildren = ButtonBaseProps & {
//   label: string
//   children?: never
// } & Omit<RACButtonProps, "children">

// export type ButtonWithChildren = ButtonBaseProps & {
//   label?: never
// } & RACButtonProps

// export type ButtonProps = ButtonWithoutChildren | ButtonWithChildren

// export type PendingButtonProps = Omit<
//   ButtonProps,
//   "isPending" | "pendingLabel"
// > & {
//   /** Triggers a pending state and stops additional press events while waiting for a server response */
//   isPending: true
//   /** Rendered as the child of the button during pending state */
//   pendingLabel: string
//   /** Hides the `pendingLabel` and renders only the loading spinner if `isPending` is `true`. This will still be used as the accessible label.
//    * @default false
//    */
//   isPendingLabelVisible?: boolean
// }

// // TODO: the content width based on the total size of the button content
// const PendingContent = ({
//   pendingLabel,
//   isPendingLabelVisible,
// }: PendingButtonProps): JSX.Element => {
//   if (isPendingLabelVisible) {
//     return (
//       <>
//         {pendingLabel}
//         <LoadingSpinner size="md" accessibilityLabel="" />
//       </>
//     )
//   }

//   return (
//     <>
//       {/* TODO: the loading spinner will need to take size */}
//       <LoadingSpinner size="md" accessibilityLabel={pendingLabel} />
//     </>
//   )
// }

// const ButtonContent = (props: ButtonProps): JSX.Element => {
//   const hasChildren = "children" in props

//   return hasChildren ? (
//     <>{props.children}</>
//   ) : (
//     <>
//       {props.iconPosition !== "end" && props.icon}
//       {props.label}
//       {props.iconPosition === "end" && props.icon}
//     </>
//   )
// }

// export const Button = ({
//   variant = "primary",
//   className,
//   size = "medium",
//   isFullWidth,
//   // isPending,
//   ...otherProps
// }: ButtonProps): JSX.Element => {
//   const isReversed = useReversedColors()

//   return (
//     <RACButton
//       aria-live={"pendingLabel" in otherProps ? "polite" : undefined}
//       className={mergeClassNames(
//         styles.button,
//         styles[variant],
//         styles[size],
//         isFullWidth && styles.fullWidth,
//         isReversed && styles.reversed,
//         className
//       )}
//       {...otherProps}
//     >
//       <ButtonContent {...otherProps} />
//     </RACButton>
//   )
// }
