// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import type { IconProps } from '~components/Icon/types'

export const CommentIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M16.4 2A1.6 1.6 0 0 1 18 3.6v9.6a1.6 1.6 0 0 1-1.6 1.6H5.2L2 18l.008-14.4c0-.884.708-1.6 1.592-1.6zm-4 7.2H14V7.6h-1.6zm-3.2 0h1.6V7.6H9.2zM6 9.2h1.6V7.6H6z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
