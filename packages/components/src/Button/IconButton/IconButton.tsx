import React from "react"
import {
  GenericButton,
  BaseButtonProps,
  WorkingButtonProps,
} from "../GenericButton"

export type IconButtonProps = Omit<BaseButtonProps, "iconPosition"> &
  WorkingButtonProps

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3062890984/Button Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-iconbutton--docs Storybook}
 */
export const IconButton = (props: IconButtonProps): JSX.Element => (
  <GenericButton iconButton {...props} />
)

IconButton.displayName = "IconButton"
