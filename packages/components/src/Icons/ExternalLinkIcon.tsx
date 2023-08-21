import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ExternalLinkIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="external-link.icon.svg"
        d="M16.222 16.222H3.778V3.778H10V2H3.778C2.79 2 2 2.8 2 3.778v12.444C2 17.2 2.791 18 3.778 18h12.444C17.2 18 18 17.2 18 16.222V10h-1.778v6.222ZM11.778 2v1.778h3.19l-8.737 8.738 1.253 1.253 8.738-8.738v3.191H18V2h-6.222Z"
      />
    </defs>
    <use
      fill="currentColor"
      fill-rule="evenodd"
      href="#external-link.icon.svg"
    />
  </SVG>
)
