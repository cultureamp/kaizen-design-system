import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ItalicsIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      d="M5 16v-1.749h2.79l3.464-8.502h-2.71V4H16v1.749h-2.79L9.745 14.25h2.71V16H5Z"
    />
  </SVG>
)
