import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const EqualIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8ZM6.153 12.1h7.694v-1.6H6.153v1.6Zm0-2.881h7.694v-1.6H6.153v1.6Z"
    />
  </SVG>
)
