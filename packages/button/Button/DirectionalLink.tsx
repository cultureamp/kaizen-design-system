import * as React from "react"
import arrowBackward from "@kaizen/component-library/icons/arrow-backward.icon.svg"
import arrowForward from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import GenericButton, { GenericProps } from "./components/GenericButton"

type DirectionalLinkProps = Pick<
  GenericProps,
  | "id"
  | "reversed"
  | "disabled"
  | "icon"
  | "onClick"
  | "onMouseDown"
  | "href"
  | "newTabAndIUnderstandTheAccessibilityImplications"
  | "disableTabFocusAndIUnderstandTheAccessibilityImplications"
  | "onFocus"
  | "onBlur"
> & {
  label?: string
  direction: "prev" | "next"
}

const iconMap = {
  prev: arrowBackward,
  next: arrowForward,
}

const DirectionalLink: React.FunctionComponent<DirectionalLinkProps> = (
  props: DirectionalLinkProps
) => (
  <GenericButton
    {...props}
    directionalLink
    iconButton
    icon={iconMap[props.direction]}
    label={
      props.label ||
      (props.direction === "prev" ? "Previous page" : "Next page")
    }
  />
)

DirectionalLink.defaultProps = {
  reversed: false,
  disabled: false,
}

DirectionalLink.displayName = "DirectionalLink"

export default DirectionalLink
