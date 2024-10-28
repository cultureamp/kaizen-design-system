import React from "react"
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components"
import { useReversedColors } from "~components/__utilities__/v3"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import { ButtonContent } from "./subcomponents"
import { ButtonSize, ButtonVariant, PendingButtonProps } from "./types"
import styles from "./Button.module.css"

// TODO: update this so that this either must have children or must have an icon
type ButtonBaseProps = Omit<RACButtonProps, "isPending"> & {
  /** The visual style of the button.
   *  @default "default" */
  variant?: ButtonVariant
  /** The visual size of the button. `medium` was formerly `regular`
   *  @default "medium" */
  size?: ButtonSize
  /** Renders an icon at the `iconPosition` provided. To the size scales with the button, we recommend using the `Icon` component from `"@kaizen/components/future"` */
  icon?: JSX.Element
  /** Controls the position of the Icon passed in as props. @default "start" */
  iconPosition?: "start" | "end"
  /** Controls if the button inherits size from its parent. @default "false" */
  isFullWidth?: boolean
}

type ButtonPropsWithChildren = ButtonBaseProps & {
  children: ButtonBaseProps["children"]
  icon?: ButtonBaseProps["icon"]
}

type ButtonPropsWithIcon = ButtonBaseProps & {
  icon: ButtonBaseProps["icon"]
  children?: React.ReactNode
}

export type ButtonProps = (ButtonPropsWithChildren | ButtonPropsWithIcon) &
  PendingButtonProps

export const Button = ({
  variant = "primary",
  size = "medium",
  className,
  children,
  isDisabled,
  isPending = false,
  isFullWidth = false,
  ...otherProps
}: ButtonProps): JSX.Element => {
  const isReversed = useReversedColors()

  return (
    <RACButton
      className={mergeClassNames(
        styles.button,
        styles[size],
        !isReversed && styles[variant],
        isDisabled && styles.isDisabled,
        isReversed && styles[`${variant}Reversed`],
        isFullWidth && styles.fullWidth,
        className
      )}
      isPending={isPending}
      isDisabled={isDisabled}
      {...otherProps}
    >
      {racStateProps => {
        const childIsFunction = typeof children === "function"

        if (childIsFunction) {
          return (
            <ButtonContent isPending={isPending} size={size} {...otherProps}>
              {children(racStateProps)}
            </ButtonContent>
          )
        }
        return (
          <ButtonContent isPending={isPending} size={size} {...otherProps}>
            {children}
          </ButtonContent>
        )
      }}
    </RACButton>
  )
}
