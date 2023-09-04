import React from "react"
import { ArrowBackwardIcon, ArrowForwardIcon, EndIcon, StartIcon } from "~components/Icons"
import { GenericButton, GenericProps } from "../GenericButton"

export interface DirectionalLinkProps extends GenericProps {
  label: string
  disabled?: boolean
  direction: "prev" | "next" | "start" | "end"
}

const iconMap = {
  prev: <ArrowBackwardIcon role="presentation" />,
  next: <ArrowForwardIcon role="presentation" />,
  start: <StartIcon role="presentation" />,
  end: <EndIcon role="presentation" />,
}

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082092975/Pagination Guidance} |
 * {@link https://cultureamp.design/?path=/story/components-buttons-directionallink--docs Storybook}
 */
export const DirectionalLink = (props: DirectionalLinkProps): JSX.Element => (
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
