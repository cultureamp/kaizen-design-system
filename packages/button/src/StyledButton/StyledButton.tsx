import React from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./StyledButton.module.scss"

interface BaseStyledButtonProps extends OverrideClassName<unknown> {
  variant: "default" | "primary" | "secondary" | "secondaryDestructive"
  isReversed?: boolean
  isWorking?: boolean
}

export const getStyledButtonClassNames = ({
  variant,
  isReversed,
  isWorking,
  classNameOverride,
}: BaseStyledButtonProps) =>
  classnames(
    styles.styledButton,
    styles[variant],
    isReversed && styles.isReversed,
    isWorking && styles.isWorking,
    classNameOverride
  )

// V1: Using children
export interface StyledButtonProps extends BaseStyledButtonProps {
  children: React.ReactElement
}

export const StyledButton: React.VFC<StyledButtonProps> = ({
  children,
  ...restProps
}) => {
  const className = getStyledButtonClassNames({
    ...restProps,
  })

  return React.Children.only(
    React.cloneElement(children, {
      ...children.props,
      className: classnames(
        className,
        children.props.className,
        children.props.classNameOverride
      ),
    })
  )
}

// V2: Using prop
export interface StyledButtonProps2 extends BaseStyledButtonProps {
  element: React.ReactElement
}

export const StyledButton2: React.VFC<StyledButtonProps2> = ({
  element,
  ...restProps
}) => {
  const className = getStyledButtonClassNames({
    ...restProps,
  })

  return React.cloneElement(element, {
    ...element.props,
    className: classnames(
      className,
      element.props.className,
      element.props.classNameOverride
    ),
  })
}
