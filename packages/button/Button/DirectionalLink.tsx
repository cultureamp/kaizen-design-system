import * as React from "react"
import arrowBackward from "@kaizen/component-library/icons/arrow-backward.icon.svg"
import arrowForward from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import GenericButton, { GenericProps } from "./components/GenericButton"

type DirectionalLinkProps = GenericProps & {
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
    breadcrumb
    iconButton
    icon={iconMap[props.direction]}
    {...props}
  />
)

DirectionalLink.defaultProps = {
  form: false,
  primary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  secondary: false,
}

DirectionalLink.displayName = "DirectionalLink"

export default DirectionalLink
