import React, { forwardRef, Ref } from "react"

import { GenericButton, GenericButtonProps } from "../GenericButton"

export type ButtonProps = GenericButtonProps

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3062890984/Button Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-buttons-button--docs Storybook}
 */
export const Button = forwardRef(
  (
    props: ButtonProps,
    ref: Ref<HTMLButtonElement | HTMLAnchorElement | undefined>
  ) => <GenericButton {...props} ref={ref} />
)

Button.defaultProps = {
  fullWidth: false,
  primary: false,
  secondary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  iconPosition: "start",
  newTabAndIUnderstandTheAccessibilityImplications: false,
}

Button.displayName = "Button"
