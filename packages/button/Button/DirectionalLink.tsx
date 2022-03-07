import * as React from "react"
import arrowBackward from "@kaizen/component-library/icons/arrow-backward.icon.svg"
import arrowForward from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import directionalStart from "@kaizen/component-library/icons/action-off.icon.svg"
import directionalEnd from "@kaizen/component-library/icons/academy.icon.svg"
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
  accessibleLabel: string
  direction: "prev" | "next" | "start" | "end"
}

const iconMap = {
  prev: arrowBackward,
  next: arrowForward,
  start: directionalStart,
  end: directionalEnd,
}

const DirectionalLink: React.FunctionComponent<DirectionalLinkProps> = (
  props: DirectionalLinkProps
) => (
  <GenericButton
    {...props}
    directionalLink
    iconButton
    icon={iconMap[props.direction]}
    label={props.accessibleLabel}
  />
)

DirectionalLink.defaultProps = {
  reversed: false,
  disabled: false,
}

DirectionalLink.displayName = "DirectionalLink"

export default DirectionalLink
