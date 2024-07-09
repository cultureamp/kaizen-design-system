import React from "react"
import classnames from "classnames"
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components"
import { useReversedColors } from "~components/__utilities__/v3"
import styles from "./Button.module.scss"

export type ButtonVariants = "default"

export type ButtonProps = RACButtonProps & {
  /** The visual style of the button.
   *  @default "default" */
  variant?: ButtonVariants
  /** The visual size of the button. `medium` was formerly `regular`
   *  @default "medium" */
  size?: "small" | "medium"
  /** A controlled icon that will change adapt to the varian and size .*/
  icon?: React.ReactNode
  /** Where the icon should be placed in relation to the child content.
   *  @default "start" */
  iconPosition?: "start" | "end"
}

export const Button = ({
  className,
  variant = "default",
  size = "medium",
  children,
  icon,
  iconPosition = "start",
  ...otherProps
}: ButtonProps): JSX.Element => {
  const isReversed = useReversedColors()

  return (
    <RACButton
      className={classnames(
        styles.button,
        styles[variant],
        styles[size],
        className,
        isReversed && styles.reversed
      )}
      {...otherProps}
    >
      <>
        {icon && (
          <span
            className={classnames(
              styles.iconWrapper,
              styles[size],
              iconPosition && styles[iconPosition]
            )}
          >
            {icon}
          </span>
        )}
        {children}
      </>
    </RACButton>
  )
}
