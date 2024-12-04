// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import type { IconProps } from '~components/Icon/types'

export const ExportWhiteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M15.827 8.446a5.94 5.94 0 0 0-5.824-4.78 5.94 5.94 0 0 0-5.266 3.196A4.754 4.754 0 0 0 .5 11.585a4.75 4.75 0 0 0 4.751 4.752h10.295a3.96 3.96 0 0 0 3.959-3.96c0-2.09-1.627-3.785-3.678-3.931"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path fill="#FFF" d="m13.962 10.794-3.96 3.959-3.959-3.96H8.42V7.627h3.167v3.168z" />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
