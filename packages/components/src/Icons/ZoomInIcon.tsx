import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ZoomInIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      d="M13.864 12.32h-.813l-.288-.277A6.66 6.66 0 0 0 14.38 7.69a6.69 6.69 0 1 0-6.69 6.69 6.66 6.66 0 0 0 4.354-1.617l.278.289v.813L17.467 19 19 17.467l-5.136-5.146Zm-6.174 0a4.625 4.625 0 0 1-4.632-4.63A4.625 4.625 0 0 1 7.69 3.058a4.625 4.625 0 0 1 4.63 4.632 4.625 4.625 0 0 1-4.63 4.63Zm.514-7.203H7.175v2.058H5.117v1.03h2.058v2.057h1.03V8.204h2.057V7.175H8.204V5.117Z"
    />
  </SVG>
)
