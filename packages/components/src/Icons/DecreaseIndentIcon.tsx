import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const DecreaseIndentIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      d="M9.183 13.909v-1.634H17v1.634H9.183Zm-2.994-.7L3 10l3.19-3.19v6.399ZM3 17v-1.633h14V17H3ZM3 4.633V3h14v1.633H3Zm6.183 3.092V6.09H17v1.634H9.183Zm0 3.092V9.183H17v1.634H9.183Z"
    />
  </SVG>
)
