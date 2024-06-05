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
    <GenericButton
      iconButton
      // Negate the aria description (added by RAC) as it should be the
      // same as the accessible name, therefore no need to duplicate it
      aria-describedby={null}
      {...props}
      ref={ref}
    />
  )
)

IconButton.displayName = "IconButton"
