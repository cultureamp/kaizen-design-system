// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import type { IconProps } from '~components/Icon/types'

export const SendIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M2.008 3.143 2 8.475l11.425 1.523L2 11.52l.008 5.332 15.987-6.855z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
