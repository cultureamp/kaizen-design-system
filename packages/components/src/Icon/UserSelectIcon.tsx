// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import type { IconProps } from '~components/Icon/types'

export const UserSelectIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M6.876 10a3.332 3.332 0 1 1 0-6.665 3.332 3.332 0 1 1 0 6.665m12.913-3.063-5.138 5.146-3.316-3.308 1.104-1.103 2.212 2.206 4.036-4.044zm-12.913 4.73c2.224 0 6.665 1.116 6.665 3.332v1.666H.21v-1.666c0-2.216 4.44-3.333 6.665-3.333"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
