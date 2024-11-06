// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import type { IconProps } from '~components/Icon/types'

export const FeedbackCompletedWhiteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} fillRule="nonzero" />
        <path
          fill="#FFF"
          d="M14 14.8H6v-1.6h8zM8.64 11.6 6 8.96l1.12-1.12 1.52 1.52 4.24-4.24L14 6.24z"
        />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
