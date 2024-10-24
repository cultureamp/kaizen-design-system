import React, { ReactNode } from "react"
import { VisuallyHidden } from "react-aria"
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
  ButtonRenderProps,
} from "react-aria-components"

import { LoadingSpinner } from "~components/Loading"
import { Icon, IconProps } from "~components/__future__/Icon"
import { useReversedColors } from "~components/__utilities__/v3"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import styles from "./Button.module.css"

export type ButtonVariant = "primary" | "secondary" | "tertiary"
export type ButtonSize = "small" | "medium" | "large"

export type PendingProps = {
  isPending: true
  /** Rendered as the child while `pendingLabel` is `true` */
  pendingLabel: string
  /** Hides the `pendingLabel` rendering only the loading spinner. This will still be used as the accessible label.
   * @default false
   */
  isPendingLabelHidden?: boolean
}

export type PendingUndefinedProps = {
  pending?: false
}

export type PendingButtonProps = PendingProps | PendingUndefinedProps

export type ButtonBaseProps = {
  /** The visual style of the button.
   *  @default "default" */
  variant?: ButtonVariant
  /** The visual size of the button. `medium` was formerly `regular`
   *  @default "medium" */
  size?: ButtonSize
  /** Renders the a controlled Icon component that will manage the correct size relative to the buttons size. */
  icon?: JSX.Element
  /** Controls the position of a Icon passed in as a prop. @default "start" */
  iconPosition?: "start" | "end"
  /**  */
  label?: string
} & RACButtonProps

type ButtonProps = ButtonBaseProps & PendingButtonProps

export const Button = ({
  // TODO: in the original button v3 this was set to "default", which is close to "secondary" styles
  variant = "primary",
  className,
  size = "medium",
  children,
  isDisabled,
  isPending = false,
  ...otherProps
}: ButtonProps): JSX.Element => {
  const isReversed = useReversedColors()

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
      isPending={isPending}
      isDisabled={isDisabled}
      {...otherProps}
    >
      {/* // TODO: as soon as theres a fragment you cannot seemingly use the renderprops as children - if we want this we need to figure out how */}
      <ButtonContent isPending={isPending} size={size} {...otherProps}>
        {children}
      </ButtonContent>
    </RACButton>
  )
}

// TODO: this is a workaround to get the children from the renderprops
const RacChildContent = ({
  children,
  ...otherProps
}: ButtonProps): ReactNode => {
  const childIsFunction = typeof children === "function"

  if (childIsFunction) {
    return children(
      otherProps as ButtonRenderProps & { defaultChildren: ReactNode }
    ) as React.ReactElement
  }
  return children
}

const ButtonContent = ({
  isPending = false,
  children,
  size,
  icon,
  iconPosition,
  ...otherProps
}: ButtonProps): JSX.Element => (
  <>
    <span
      className={mergeClassNames(
        styles.buttonContent,
        isPending && styles.buttonContentHidden
      )}
      aria-hidden={isPending}
    >
      {icon && iconPosition === "start" && icon}
      {/* TODO: this is a work around for the RAC Render props function. maybe we cannot achieve this */}
      <RacChildContent>{children}</RacChildContent>
      {icon && iconPosition === "end" && icon}
    </span>
    {isPending && (
      <PendingContent
        // TODO: fix the types here
        pendingLabel={otherProps.pendingLabel}
        isPendingLabelHidden={otherProps.isPendingLabelHidden ?? false}
        size={size}
        isPending={isPending}
      />
    )}
  </>
)

const PendingContent = ({
  pendingLabel,
  isPendingLabelHidden = false,
  size,
}: PendingProps & { size?: ButtonSize }): JSX.Element => (
  <span
    className={mergeClassNames(
      styles.pendingContent,
      isPendingLabelHidden && styles.pendingContentSpinnerOnly
    )}
  >
    {isPendingLabelHidden ? (
      <VisuallyHidden>{pendingLabel}</VisuallyHidden>
    ) : (
      pendingLabel
    )}
    <LoadingSpinner
      classNameOverride={mergeClassNames(
        styles.spinner,
        styles[`spinner-${size}`]
      )}
      size={size === "small" ? "xs" : "sm"}
      accessibilityLabel=""
    />
  </span>
)
