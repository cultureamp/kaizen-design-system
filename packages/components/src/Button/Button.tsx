import React, { forwardRef, Ref } from "react"

import GenericButton, {
  ButtonProps,
  ButtonRef,
} from "./subcomponents/GenericButton"

/**
 * {@link https://cultureamp.design/components/button/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-button--default-kaizen-site-demo Storybook}
 */
export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<ButtonRef | undefined>) => (
    <GenericButton {...props} ref={ref} />
  )
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
