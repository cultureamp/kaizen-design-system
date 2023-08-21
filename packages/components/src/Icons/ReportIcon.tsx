import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ReportIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="report.icon.svg"
        d="M8 18h4V2H8v16Zm6 0h4V7h-4v11ZM2 18h4v-8H2v8Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#report.icon.svg" />
  </SVG>
)
