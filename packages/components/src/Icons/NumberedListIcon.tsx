import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const NumberedListIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      d="M2.5 16.667v-.834h1.667v-.416h-.834v-.834h.834v-.416H2.5v-.834h2.521v3.334H2.5Zm.854-10v-2.5H2.5v-.834h1.688v3.334h-.834Zm-.854 5v-.75l1.479-1.75H2.5v-.834h2.521v.771l-1.5 1.729h1.5v.834H2.5Zm4.104 4.208v-1.75H17.5v1.75H6.604Zm0-5v-1.75H17.5v1.75H6.604Zm0-5v-1.75H17.5v1.75H6.604Z"
    />
  </SVG>
)
