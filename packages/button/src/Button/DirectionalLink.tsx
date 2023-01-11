import React from "react"
import arrowBackward from "@kaizen/component-library/icons/arrow-backward.icon.svg"
import arrowForward from "@kaizen/component-library/icons/arrow-forward.icon.svg"
import directionalEnd from "@kaizen/component-library/icons/end.icon.svg"
import directionalStart from "@kaizen/component-library/icons/start.icon.svg"
import GenericButton, { GenericProps } from "./components/GenericButton"

export interface DirectionalLinkProps extends GenericProps {
  label: string
  disabled?: boolean
  direction: "prev" | "next" | "start" | "end"
}

const iconMap = {
  prev: arrowBackward,
  next: arrowForward,
  start: directionalStart,
  end: directionalEnd,
}

/**
 * {@link https://cultureamp.design/components/pagination/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/story/components-button-pagination-buttons--default-kaizen-directional-link Storybook}
 */
const DirectionalLink = (props: DirectionalLinkProps): JSX.Element => (
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
