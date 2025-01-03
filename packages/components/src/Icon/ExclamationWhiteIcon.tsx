// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import type { IconProps } from '~components/Icon/types'

export const ExclamationWhiteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path id={uniqueId} d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path fill="#FFF" d="M10.8 14H9.2v-1.6h1.6zM10.8 10.8H9.2V6h1.6z" />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
