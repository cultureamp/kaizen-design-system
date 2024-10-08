import React from "react"
import { VisuallyHidden } from "react-aria"
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components"
import { LoadingSpinner } from "~components/Loading"
import { useReversedColors } from "~components/__utilities__/v3"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import styles from "./Button.module.css"

export type ButtonVariant = "primary" | "secondary" | "tertiary"
export type ButtonSize = "small" | "medium" | "large"

type PendingProps = {
  isPending: true
  /** Rendered as the child while `pendingLabel` is `true` */
  pendingLabel: string
  /** Hides the `pendingLabel` rendering only the loading spinner. This will still be used as the accessible label.
   * @default false
   */
  isPendingLabelHidden?: boolean
}

export type ButtonContentProps = RACButtonProps & {
  /** The visual style of the button.
   *  @default "default" */
  variant?: ButtonVariant
  /** The visual size of the button. `medium` was formerly `regular`
   *  @default "medium" */
  size?: ButtonSize
  // /** what if we use this for when they want to truly disable a button */
  // isDisabledWithNoFocus?: boolean
  isPending: false
}

export type ButtonPendingProps = Omit<ButtonContentProps, "isPending"> &
  PendingProps

// TODO: we need to have type safe
type ButtonProps = ButtonContentProps | ButtonPendingProps

export const Button = ({
  // TODO: in the original button v3 this was set to "default", which is close to "secondary" styles
  variant = "primary",
  className,
  size = "medium",
  children,
  isDisabled,
  ...otherProps
}: ButtonProps): JSX.Element => {
  const isReversed = useReversedColors()
  const isPending = "isPending" in otherProps

  return (
    <RACButton
      className={mergeClassNames(
        styles.button,
        styles[size],
        !isReversed && styles[variant],
        isDisabled && styles.disabled,
        isReversed && styles[`${variant}-reversed`],
        className
      )}
      isDisabled={isDisabled}
      {...otherProps}
    >
      {isPending && otherProps.isPending === true ? (
        <PendingContent {...otherProps} size={size} />
      ) : (
        children
      )}
    </RACButton>
  )
}

const PendingContent = ({
  pendingLabel,
  isPendingLabelHidden,
  size,
  children,
}: ButtonPendingProps): JSX.Element => {
  if (isPendingLabelHidden) {
    return (
      <>
        <span className={styles.hiddenPendingContent} aria-hidden="true">
          {children as React.ReactNode}
        </span>
        <VisuallyHidden>{pendingLabel}</VisuallyHidden>
        <LoadingSpinner
          classNameOverride={styles.pendingSpinnerOnly}
          size={size === "small" ? "xs" : "sm"}
          accessibilityLabel=""
        />
      </>
    )
  }

  return (
    <>
      <span className={styles.hiddenPendingContent} aria-hidden="true">
        {children as React.ReactNode}
      </span>
      {pendingLabel}
      <LoadingSpinner
        classNameOverride={styles.pendingSpinner}
        size={size === "small" ? "xs" : "sm"}
        accessibilityLabel=""
      />
    </>
  )
}

// const PendingContent = (
//   props: Extract<RenderProps, { working: true }>
// ): JSX.Element => {
//   if (props.workingLabelHidden) {
//     return (
//       <>
//         {/* This is to ensure the button stays at the correct width */}
//         <span className={styles.hidden} aria-hidden="true">
//           {renderDefaultContent(props)}
//         </span>
//         <span className={styles.centeredLoadingSpinner}>
//           {renderLoadingSpinner()}
//         </span>
//       </>
//     )
//   }

//   return (
//     <>
//       {props.iconPosition !== "end" && renderLoadingSpinner()}
//       <span className={styles.label}>{props.workingLabel}</span>
//       {props.additionalContent && (
//         <span className={styles.additionalContentWrapper}>
//           {props.additionalContent}
//         </span>
//       )}
//       {props.iconPosition === "end" && renderLoadingSpinner()}
//     </>
//   )
// }
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
//   isPendingLabelHidden?: boolean
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
//   isPendingLabelHidden?: boolean
// }

// // TODO: the content width based on the total size of the button content
// const PendingContent = ({
//   pendingLabel,
//   isPendingLabelHidden,
// }: PendingButtonProps): JSX.Element => {
//   if (isPendingLabelHidden) {
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
