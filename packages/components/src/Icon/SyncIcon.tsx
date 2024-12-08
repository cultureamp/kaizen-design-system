// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from 'react'
import { SVG } from '~components/Icon/subcomponents/SVG'
import type { IconProps } from '~components/Icon/types'

export const SyncIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="m3.638 6.365 3.637 3.638H4.547a5.46 5.46 0 0 0 5.456 5.456c.919 0 1.792-.228 2.546-.637l1.328 1.327a7.2 7.2 0 0 1-3.874 1.128 7.273 7.273 0 0 1-7.275-7.274H0zm11.82 3.638a5.46 5.46 0 0 0-5.455-5.457c-.919 0-1.791.227-2.547.637L6.13 3.855a7.2 7.2 0 0 1 3.874-1.128 7.273 7.273 0 0 1 7.275 7.276h2.728l-3.638 3.637-3.637-3.637z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
