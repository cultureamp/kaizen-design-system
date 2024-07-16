// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/Icon/subcomponents/SVG"
import type { IconProps } from "~components/Icon/types"

export const ClosedIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M12.307 2.636A2.46 2.46 0 0 0 10 1a2.46 2.46 0 0 0-2.308 1.636H4.636c-.9 0-1.637.737-1.637 1.637v13.09c0 .9.737 1.637 1.637 1.637H15.36c.9 0 1.637-.736 1.637-1.636V4.273c0-.9-.738-1.637-1.637-1.637zm-1.489.819c0 .45-.369.818-.818.818a.82.82 0 0 1-.818-.818.82.82 0 0 1 .818-.819c.45 0 .818.369.818.819m-5.727 8.181 1.154-1.153 2.119 2.11 5.391-5.391 1.154 1.162-6.545 6.545z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="evenodd" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
