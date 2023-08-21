import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ExclamationIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="exclamation.icon.svg"
        d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm.8 12v-1.6H9.2V14h1.6Zm0-3.2V6H9.2v4.8h1.6Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#exclamation.icon.svg" />
  </SVG>
)
