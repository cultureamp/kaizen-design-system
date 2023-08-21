import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ConnectIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      d="M14.01 5 14 1h-2v4H8V1H6v4h-.01C5 4.99 4 5.99 4 6.99v5.49L7.5 16v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99Z"
    />
  </SVG>
)
