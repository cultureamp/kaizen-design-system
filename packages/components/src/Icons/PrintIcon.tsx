import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const PrintIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="print.icon.svg"
        d="M5.2 6h9.6V2.8H5.2V6Zm10.4.8c1.328 0 2.4 1.072 2.4 2.4V14h-3.2v3.2H5.2V14H2V9.2c0-1.328 1.072-2.4 2.4-2.4h11.2Zm0 3.2c.44 0 .8-.36.8-.8 0-.44-.36-.8-.8-.8-.44 0-.8.36-.8.8 0 .44.36.8.8.8Zm-8.8 5.6h6.4v-4H6.8v4Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#print.icon.svg" />
  </SVG>
)
