import type { FC, SVGProps } from 'react'
import _UserSettingsIcon from '../../assets/svgs/custom-icons/user-settings.svg'

type CustomIconProps = FC<SVGProps<SVGSVGElement> & { color?: string; size?: number }>

// Cast forces tsc to emit the concrete FC type in .d.ts rather than a .svg path reference,
// which consumers can't resolve (the declare module '*.svg' in types.d.ts is not included in the package output).
export const UserSettingsIcon = _UserSettingsIcon as CustomIconProps
