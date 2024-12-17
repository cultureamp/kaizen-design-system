import React from 'react'
import { GenericButton, GenericProps } from '~components/__actions__/Button/v2/GenericButton'
import { Icon } from '~components/__rc__/Icon'

export type DirectionalLinkProps = {
  label: string
  disabled?: boolean
  direction: 'prev' | 'next' | 'start' | 'end'
} & GenericProps

const iconNameMap = {
  prev: 'arrow_back',
  next: 'arrow_forward',
  start: 'keyboard_tab_rtl',
  end: 'keyboard_tab',
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
    icon={<Icon name={iconNameMap[otherProps.direction]} isPresentational shouldMirrorInRTL />}
  />
)

DirectionalLink.displayName = 'DirectionalLink'
