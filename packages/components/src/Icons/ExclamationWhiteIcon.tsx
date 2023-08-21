import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ExclamationWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="exclamation-white.icon.svg"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#exclamation-white.icon.svg" />
      <path fill="#FFF" d="M10.8 14H9.2v-1.6h1.6zM10.8 10.8H9.2V6h1.6z" />
    </g>
  </SVG>
)
