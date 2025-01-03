// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import type { IconProps } from '~components/Icon/types'

export const FaceNeutralWhiteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path id={uniqueId} d="M12.8 6.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="currentColor"
          d="M9.992 2C5.576 2 2 5.584 2 10s3.576 8 7.992 8C14.416 18 18 14.416 18 10s-3.584-8-8.008-8"
        />
        <path
          fill="#FFF"
          d="M10 16.4A6.4 6.4 0 0 1 3.6 10c0-3.536 2.864-6.4 6.4-6.4s6.4 2.864 6.4 6.4-2.864 6.4-6.4 6.4"
        />
        <path fill="currentColor" d="M8.4 8A1.2 1.2 0 1 0 6 8a1.2 1.2 0 0 0 2.4 0" />
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path fill="currentColor" d="M7.6 12.8h4.8v-1.2H7.6z" />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
