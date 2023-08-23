// This file is autogenerated by wrapSVGs.ts
// Changes to this file will be overwritten

import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"
import { v4 as uuidv4 } from "uuid"

export const PromotionWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => {
  const uniqueId = uuidv4()
  return (
    <SVG {...props}>
      <defs>
        <path
          id={uniqueId}
          d="M9.992 2C5.575 2 2 5.584 2 10s3.575 8 7.992 8C14.415 18 18 14.416 18 10s-3.585-8-8.008-8Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="currentColor" href={`#${uniqueId}`} />
        <path
          fill="#FFF"
          d="M13.384 14.8 10 12.76 6.615 14.8l.896-3.848-2.983-2.584 3.936-.336L10 4.4l1.536 3.624 3.936.336-2.984 2.584z"
        />
      </g>
    </SVG>
  )
}
