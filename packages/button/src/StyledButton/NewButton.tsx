import React, { ButtonHTMLAttributes } from "react"
import { OverrideClassName } from "@kaizen/component-base"
import { StyledButton, StyledButtonProps } from "./StyledButton"

export interface NewButtonProps
  extends OverrideClassName<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant: StyledButtonProps["variant"]
  isReversed?: StyledButtonProps["isReversed"]
  isWorking?: StyledButtonProps["isWorking"]
}

export const NewButton: React.VFC<NewButtonProps> = ({
  children,
  variant,
  isReversed = false,
  isWorking = false,
  ...buttonAttributes // maybe this is clearer than `restProps`?
}) => (
  <StyledButton
    variant={variant}
    isReversed={isReversed}
    isWorking={isWorking}
    isDisabled={buttonAttributes.disabled}
  >
    <button {...buttonAttributes}>{children}</button>
  </StyledButton>
)
