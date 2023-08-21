import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const IncreaseIndentIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      d="M3 17v-1.633h14V17H3Zm0-3.791V6.81L6.209 10 3 13.209Zm6.183.7v-1.634H17v1.634H9.183ZM3 4.633V3h14v1.633H3Zm6.183 3.092V6.09H17v1.634H9.183Zm0 3.092V9.183H17v1.634H9.183Z"
    />
  </SVG>
)
