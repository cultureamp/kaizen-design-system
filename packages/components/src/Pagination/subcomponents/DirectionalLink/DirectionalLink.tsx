import React from "react"
import {
  GenericButton,
  GenericProps,
} from "~components/__actions__/Button/v2/GenericButton"
import {
  ArrowBackwardIcon,
  ArrowForwardIcon,
  EndIcon,
  StartIcon,
} from "~components/__illustrations__/v1"

export type DirectionalLinkProps = {
  label: string
  disabled?: boolean
  direction: "prev" | "next" | "start" | "end"
} & GenericProps

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
export const DirectionalLink = ({
  reversed = false,
  disabled = false,
  ...otherProps
}: DirectionalLinkProps): JSX.Element => (
  <GenericButton
    reversed={reversed}
    disabled={disabled}
    {...otherProps}
    iconButton
    directionalLink
    icon={iconMap[otherProps.direction]}
  />
)

DirectionalLink.displayName = "DirectionalLink"
