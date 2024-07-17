// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/Icon/subcomponents/SVG"
import type { IconProps } from "~components/Icon/types"

export const TranslationIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="m10.725 12.558-2.117-2.091.025-.025A14.6 14.6 0 0 0 11.725 5h2.442V3.333H8.333V1.667H6.667v1.666H.833v1.659h9.309A13.1 13.1 0 0 1 7.5 9.458a13 13 0 0 1-1.925-2.791H3.908a14.6 14.6 0 0 0 2.484 3.8L2.15 14.65l1.183 1.183L7.5 11.667l2.592 2.591zm4.692-4.225H13.75l-3.75 10h1.667l.933-2.5h3.958l.942 2.5h1.667zm-2.184 5.834 1.35-3.609 1.35 3.609z"
        />
      </defs>
      <use fill="currentColor" href={`#${uniqueId}`} fillRule="nonzero" />
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
