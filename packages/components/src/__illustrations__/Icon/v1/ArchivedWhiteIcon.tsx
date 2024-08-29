// This file is autogenerated
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/__illustrations__/Icon/v1/subcomponents/SVG"
import type { IconProps } from "~components/__illustrations__/v1"

export const ArchivedWhiteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M12.307 2.636A2.46 2.46 0 0 0 10 1a2.46 2.46 0 0 0-2.307 1.636h-3.06c-.9 0-1.636.737-1.636 1.637v13.09c0 .9.736 1.637 1.636 1.637h10.73c.9 0 1.636-.736 1.636-1.636V4.273c0-.9-.736-1.637-1.636-1.637zm-1.489.819a.82.82 0 0 1-.818.818.82.82 0 0 1-.818-.818.82.82 0 0 1 .818-.819.82.82 0 0 1 .818.819"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path
          fill="#FFF"
          d="m10 14.91-4.09-4.092h2.454V7.545h3.272v3.273h2.455z"
        />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
