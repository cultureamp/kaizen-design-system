// This file is autogenerated
// Changes to this file will be overwritten

import React, { useId } from "react"
import { SVG } from "~components/__illustrations__/Icon/v1/subcomponents/SVG"
import type { IconProps } from "~components/__illustrations__/v1"

export const PromotionWhiteIcon = (props: IconProps): JSX.Element => {
  const uniqueId = useId()
  const svgContent = (
    <>
      <defs>
        <path
          id={uniqueId}
          d="M9.992 2C5.575 2 2 5.584 2 10s3.575 8 7.992 8C14.415 18 18 14.416 18 10s-3.585-8-8.008-8"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path
          fill="#FFF"
          d="M13.384 14.8 10 12.76 6.615 14.8l.896-3.848-2.983-2.584 3.936-.336L10 4.4l1.536 3.624 3.936.336-2.984 2.584z"
        />
      </g>
    </>
  )
  return <SVG {...props}>{svgContent}</SVG>
}
