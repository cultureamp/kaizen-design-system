import React from "react"
import { Button } from "@kaizen/button"
import {
  TitleBlockCustomButtonProps,
  TitleBlockButtonProps,
} from "./TitleBlockZen"

export const TitleBlockButton = (
  props: TitleBlockCustomButtonProps | TitleBlockButtonProps
): JSX.Element | null => {
  if ("component" in props) {
    const { component, label, ...otherProps } = props
    // This assumes that if it isn't using label it will use children to render its text content
    return <Button component={component} label={label || ""} {...otherProps} />
  }
  return <Button {...props} />
}
