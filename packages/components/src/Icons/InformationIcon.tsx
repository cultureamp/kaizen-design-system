import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const InformationIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="information.icon.svg"
        d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8Zm-.8 5.6h1.6V6H9.2v1.6Zm0 6.4h1.6V9.2H9.2V14Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#information.icon.svg" />
  </SVG>
)
