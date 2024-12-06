// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import type { IconProps } from '~components/Icon/types'

export const OpenIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M15.361 2.636c.9 0 1.636.737 1.636 1.637v13.09c0 .9-.737 1.637-1.636 1.637H4.636c-.9 0-1.637-.736-1.637-1.636V4.273c0-.9.737-1.637 1.637-1.637h3.056A2.46 2.46 0 0 1 10 1c1.063 0 1.964.687 2.307 1.636zM5.909 14.91h1.636V9.182H5.91zm3.273 0h1.636V6.727H9.182zm3.273 0h1.636v-3.273h-1.636zM10.818 3.455A.82.82 0 0 0 10 2.636a.82.82 0 0 0-.818.819c0 .45.368.818.818.818s.818-.368.818-.818"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
