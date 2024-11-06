import React, { forwardRef, Ref } from "react"
import {
  GenericButton,
  BaseButtonProps,
  WorkingButtonProps,
  ButtonRef,
} from "../GenericButton"

export type IconButtonProps = Omit<BaseButtonProps, "iconPosition"> &
  WorkingButtonProps

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3062890984/Button Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-iconbutton--docs Storybook}
 */
export const IconButton = forwardRef(
  (props: IconButtonProps, ref: Ref<ButtonRef | undefined>): JSX.Element => (
    <GenericButton iconButton {...props} ref={ref} />
  ),
)

IconButton.displayName = "IconButton"
