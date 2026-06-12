import * as React from 'react'
import type { FC, SVGProps } from 'react'
import SvgUserSettingsIcon from '../../assets/svgs/untitled-ui-extended-icons/user-settings.svg'

export interface Props extends SVGProps<SVGSVGElement> {
  color?: string
  size?: number
}

export const UserSettingsIcon: FC<Props> = ({ size = 24, color = 'currentColor', ...props }) => (
  <SvgUserSettingsIcon width={size} height={size} color={color} {...props} />
)

UserSettingsIcon.displayName = 'UserSettingsIcon'
