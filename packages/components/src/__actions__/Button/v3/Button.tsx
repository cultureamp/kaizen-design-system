import React from "react"
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components"
import { useReversedColors } from "~components/__utilities__/v3"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import { ButtonContent } from "./subcomponents"
import { ButtonSizes, ButtonVariants, PendingButtonProps } from "./types"
import styles from "./Button.module.css"

type ButtonBaseProps = Omit<RACButtonProps, "children"> & {
  /** The visual style of the button.
   *  @default "default" */
  variant?: ButtonVariants
  /** The visual size of the button. `medium` was formerly `regular`
   *  @default "medium" */
  size?: ButtonSizes
  /** Renders an icon at the `iconPosition` provided. To the size scales with the button, we recommend using the `Icon` component from `"@kaizen/components/future"` */
  icon?: JSX.Element
  /** Controls the position of the Icon passed in as props. @default "start" */
  iconPosition?: "start" | "end"
  /** Controls if the button inherits width from its parent. @default "false" */
  isFullWidth?: boolean
  children: RACButtonProps["children"]
}

export type ButtonProps = ButtonBaseProps & PendingButtonProps

// TODO: add ref
export const Button = ({
  variant = "primary",
  size = "medium",
  className,
  children,
  isDisabled,
  isFullWidth = false,
  ...otherProps
}: ButtonProps): JSX.Element => {
  const isReversed = useReversedColors()

  return (
    <RACButton
      className={mergeClassNames(
        styles.button,
        styles[size],
        isDisabled && styles.isDisabled,
        isReversed ? styles[`${variant}Reversed`] : styles[variant],
        isFullWidth && styles.fullWidth,
        className
      )}
      isDisabled={isDisabled}
      {...otherProps}
    >
      {racStateProps => {
        const childIsFunction = typeof children === "function"

        return (
          // TODO: update the spread to be more specific to content props - we don't want irrelevant spread props to be passed to the ButtonContent component - ie: test id and RAC stuff
          <ButtonContent size={size} {...otherProps}>
            {childIsFunction ? children(racStateProps) : children}
          </ButtonContent>
        )
      }}
    </RACButton>
  )
}
