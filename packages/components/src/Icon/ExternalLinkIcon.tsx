// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import type { IconProps } from '~components/Icon/types'

export const ExternalLinkIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M16.222 16.222H3.778V3.778H10V2H3.778C2.79 2 2 2.8 2 3.778v12.444C2 17.2 2.791 18 3.778 18h12.444C17.2 18 18 17.2 18 16.222V10h-1.778zM11.778 2v1.778h3.19l-8.737 8.738 1.253 1.253 8.738-8.738v3.191H18V2z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
