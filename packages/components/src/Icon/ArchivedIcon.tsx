// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/Icon/subcomponents/SVG"
import type { IconProps } from "~components/Icon/types"

export const ArchivedIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M12.307 2.636A2.463 2.463 0 0 0 10 1a2.463 2.463 0 0 0-2.307 1.636h-3.06c-.9 0-1.636.737-1.636 1.637v13.09c0 .9.736 1.637 1.636 1.637h10.73c.9 0 1.636-.736 1.636-1.636V4.273c0-.9-.736-1.637-1.636-1.637zm-1.489.819a.82.82 0 0 1-.818.818.82.82 0 0 1-.818-.818.82.82 0 0 1 .818-.819.82.82 0 0 1 .818.819M10 14.909l-4.09-4.09h2.454V7.544h3.272v3.273h2.455z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
