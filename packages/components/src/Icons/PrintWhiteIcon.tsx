import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const PrintWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <g fill="none" fill-rule="evenodd">
      <path
        fill="currentColor"
        d="M15.6 6.8H4.4A2.397 2.397 0 0 0 2 9.2V14h3.2v3.2h9.6V14H18V9.2c0-1.328-1.072-2.4-2.4-2.4ZM5.2 6h9.6V2.8H5.2z"
      />
      <path
        fill="#FFF"
        d="M15.6 10c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8ZM6.8 15.6h6.4v-4H6.8z"
      />
    </g>
  </SVG>
)
