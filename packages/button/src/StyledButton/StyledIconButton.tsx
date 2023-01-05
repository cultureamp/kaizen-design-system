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
  isReversed,
  classNameOverride,
  ...restProps
}) => (
  <StyledButton2
    variant={variant}
    isReversed={isReversed}
    classNameOverride={classnames(
      styles.styledIconButton,
      variant === "default" && styles.default,
      variant === "default" && isReversed && styles.isReversed,
      classNameOverride
    )}
    {...restProps}
  />
)
