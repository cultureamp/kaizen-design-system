import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const MinimizeIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      d="M2.354 19 1 17.646l5.74-5.74H3.136V10H10v6.864H8.095V13.26L2.355 19ZM10 10V3.136h1.905V6.74L17.645 1 19 2.354l-5.74 5.74h3.604V10H10Z"
    />
  </SVG>
)
