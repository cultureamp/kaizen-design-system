// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import type { IconProps } from '~components/Icon/types'

export const UserDeleteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M7.694 10a3.332 3.332 0 1 1 0-6.665 3.332 3.332 0 1 1 0 6.665m8.332-2.011 1.767-1.767L18.97 7.4l-1.767 1.767 1.767 1.768-1.178 1.178-1.767-1.767-1.767 1.767-1.179-1.178 1.768-1.768L13.08 7.4l1.179-1.178zm-8.332 3.677c2.225 0 6.665 1.117 6.665 3.333v1.666H1.03v-1.666c0-2.216 4.44-3.333 6.665-3.333"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
