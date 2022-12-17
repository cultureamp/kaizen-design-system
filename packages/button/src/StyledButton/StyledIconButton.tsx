import React from "react"
import classnames from "classnames"
import { StyledButton2, StyledButtonProps2 } from "./StyledButton"
import styles from "./StyledIconButton.module.scss"

export type StyledIconButtonProps = Omit<
  StyledButtonProps2,
  "icon" | "iconPosition"
>

export const StyledIconButton: React.VFC<StyledIconButtonProps> = ({
  variant,
  classNameOverride,
  ...restProps
}) => (
  <StyledButton2
    variant={variant}
    classNameOverride={classnames(
      styles.styledIconButton,
      variant === "default" && styles.default,
      classNameOverride
    )}
    {...restProps}
  />
)

// return React.cloneElement(element, {
//   ...element.props,
//   className
// })
