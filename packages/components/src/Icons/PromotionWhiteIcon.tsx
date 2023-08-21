import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const PromotionWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="promotion-white.icon.svg"
        d="M9.992 2C5.575 2 2 5.584 2 10s3.575 8 7.992 8C14.415 18 18 14.416 18 10s-3.585-8-8.008-8Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#promotion-white.icon.svg" />
      <path
        fill="#FFF"
        d="M13.384 14.8 10 12.76 6.615 14.8l.896-3.848-2.983-2.584 3.936-.336L10 4.4l1.536 3.624 3.936.336-2.984 2.584z"
      />
    </g>
  </SVG>
)
