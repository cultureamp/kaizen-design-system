import React, { ButtonHTMLAttributes } from "react"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon, IconProps } from "@kaizen/component-library"
import { StyledButton, StyledButtonProps } from "./StyledButton"
import { StyledIconButton, StyledIconButtonProps } from "./StyledIconButton"

interface NewIconButtonAttributes
  extends OverrideClassName<
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">
  > {
  "aria-label": string
}

export interface NewIconButtonProps extends NewIconButtonAttributes {
  icon: IconProps["icon"]
  variant: StyledIconButtonProps["variant"]
  isReversed?: StyledIconButtonProps["isReversed"]
  isWorking?: StyledIconButtonProps["isWorking"]
}

export const NewIconButton: React.VFC<NewIconButtonProps> = ({
  icon,
  variant,
  isReversed = false,
  isWorking = false,
  classNameOverride,
  ...buttonAttributes // maybe this is clearer than `restProps`?
}) => (
  <StyledIconButton
    variant={variant}
    isReversed={isReversed}
    isWorking={isWorking}
    isDisabled={buttonAttributes.disabled}
    classNameOverride={classNameOverride}
    element={
      <button {...buttonAttributes}>
        <Icon icon={icon} role="presentation" />
      </button>
    }
  />
)
