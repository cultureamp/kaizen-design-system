// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import type { IconProps } from '~components/Icon/types'

export const UndoIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M10.24 6.921A9.17 9.17 0 0 0 4.172 9.21L1 6.041v7.92h7.92L5.739 10.78A6.97 6.97 0 0 1 10.24 9.12c3.12 0 5.76 2.028 6.684 4.84l2.08-.686c-1.21-3.688-4.672-6.354-8.764-6.354"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
