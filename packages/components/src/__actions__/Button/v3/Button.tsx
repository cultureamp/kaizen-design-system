import React from "react"
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components"
import { useReversedColors } from "~components/__utilities__/v3"
import { mergeClassNames } from "~components/utils/mergeClassNames"
import styles from "./Button.module.scss"

export type ButtonVariants = "default"

export type ButtonProps = RACButtonProps & {
  /** The visual style of the button.
   *  @default "default" */
  variant?: ButtonVariants
  /** The visual size of the button. `medium` was formerly `regular`
   *  @default "medium" */
  size?: "small" | "medium"
}

export const Button = ({
  variant = "default",
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
