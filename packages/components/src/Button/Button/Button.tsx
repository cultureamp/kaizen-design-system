import React, { forwardRef, Ref } from "react"

import { GenericButton, GenericButtonProps, ButtonRef } from "../GenericButton"

export type ButtonProps = GenericButtonProps

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3062890984/Button Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-buttons-button--docs Storybook}
 */

export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<ButtonRef | undefined>) => (
    <GenericButton iconPosition="start" ref={ref} {...props} />
  )
)

Button.displayName = "Button"
