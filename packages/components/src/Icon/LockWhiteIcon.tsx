// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import type { IconProps } from '~components/Icon/types'

export const LockWhiteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M14.667 7.333h-.762V5.81A3.81 3.81 0 0 0 10.095 2a3.81 3.81 0 0 0-3.81 3.81v1.523h-.761C4.686 7.333 4 8.02 4 8.857v7.62C4 17.313 4.686 18 5.524 18h9.143c.838 0 1.523-.686 1.523-1.524V8.857c0-.838-.685-1.524-1.523-1.524m-2.21 0H7.733V5.81a2.364 2.364 0 0 1 2.362-2.362 2.364 2.364 0 0 1 2.362 2.362z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} fillRule="nonzero" />
        <path
          fill="#FFF"
          d="M10.095 14.19a1.53 1.53 0 0 1-1.524-1.523c0-.838.686-1.524 1.524-1.524s1.524.686 1.524 1.524-.686 1.523-1.524 1.523"
        />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
