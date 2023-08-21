import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const PercentageIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M16.59 2 2.002 16.587l1.415 1.415L18.004 3.414 16.59 2ZM5.5 9.004c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5S2 3.574 2 5.504s1.57 3.5 3.5 3.5Zm0-5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5Zm5.5 10.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5Zm2 0c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5Z"
      clip-rule="evenodd"
    />
  </SVG>
)
