// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/Icon/subcomponents/SVG"
import type { IconProps } from "~components/Icon/types"

export const NotificationIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M7.004 3.318 5.882 2.196a8.176 8.176 0 0 0-3.231 6.157H4.22a6.624 6.624 0 0 1 2.784-5.035m9.718 5.035h1.568a8.226 8.226 0 0 0-3.231-6.157l-1.114 1.122a6.663 6.663 0 0 1 2.777 5.035m-1.546.392c0-2.408-1.286-4.423-3.529-4.957v-.533c0-.651-.525-1.177-1.176-1.177-.651 0-1.177.526-1.177 1.177v.533c-2.25.534-3.53 2.541-3.53 4.957v3.922l-1.568 1.568v.785h12.55v-.785l-1.57-1.568zm-4.705 8.628c.11 0 .211-.008.313-.032.51-.11.926-.455 1.13-.925.078-.189.117-.392.117-.612H8.894a1.58 1.58 0 0 0 1.577 1.569"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="nonzero" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
