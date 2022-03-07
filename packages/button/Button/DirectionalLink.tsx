import * as React from "react"
import arrowBackward from "@kaizen/component-library/icons/arrow-backward.icon.svg"
import arrowForward from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import directionalStart from "@kaizen/component-library/icons/action-off.icon.svg"
import directionalEnd from "@kaizen/component-library/icons/academy.icon.svg"
import GenericButton, { GenericProps } from "./components/GenericButton"

type DirectionalLinkProps = GenericProps & {
  label: string
  icon?: React.SVGAttributes<SVGSymbolElement>
  disabled?: boolean
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
    iconButton
    directionalLink
    icon={iconMap[props.direction]}
  />
)

DirectionalLink.defaultProps = {
  reversed: false,
  disabled: false,
}

DirectionalLink.displayName = "DirectionalLink"

export default DirectionalLink
