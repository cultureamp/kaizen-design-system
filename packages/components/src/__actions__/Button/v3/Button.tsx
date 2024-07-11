import React, { isValidElement } from "react"
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
}

// I first opted to go the route of checking if it was an the child was an icon, but it comes in as a function, and the child.type never evaluates to an svg - this wouldn't be an issue in the future if it an actual svg was passed in, but I couldn't find a way to evaluate the fact it would become and SVG
const isIconOnly = (children: React.ReactNode): boolean => {
  console.log(children)
  if (typeof children !== "string" && React.Children.count(children) === 1) {
    const child = React.Children.only(children)
    console.log("its not a string")

    if (isValidElement(child) && child.type === "svg") {
      console.log("its a svg")

      return true
    }
  }
  console.log("its not a svg")
  return false
}

/** This function wraps all plaintext nodes in a span. This helps to target icon only buttons in CSS */
const wrapTextNodes = (children: React.ReactNode): React.ReactNode =>
  React.Children.map(children, child => {
    if (typeof child === "string" || typeof child === "number") {
      return <span>{child}</span>
    }
    return child
  })

export const Button = ({
  className,
  variant = "default",
  size = "medium",
  children,
  ...otherProps
}: ButtonProps): JSX.Element => {
  const isReversed = useReversedColors()
  const processedChildren = wrapTextNodes(children)
  return (
    <RACButton
      className={classnames(
        styles.button,
        styles[variant],
        styles[size],
        className,
        isReversed && styles.reversed
        // isIconButton && styles.iconButton
      )}
      {...otherProps}
    >
      {processedChildren}
    </RACButton>
  )
}
