import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ExportIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="export.icon.svg"
        d="M15.827 8.446a5.94 5.94 0 0 0-5.824-4.78 5.944 5.944 0 0 0-5.266 3.196A4.754 4.754 0 0 0 .5 11.585a4.75 4.75 0 0 0 4.751 4.752h10.295a3.96 3.96 0 0 0 3.959-3.96c0-2.09-1.627-3.785-3.678-3.931Zm-1.865 2.348-3.96 3.959-3.959-3.96H8.42V7.627h3.167v3.168h2.376Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#export.icon.svg" />
  </SVG>
)
