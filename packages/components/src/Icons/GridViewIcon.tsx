import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const GridViewIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="grid-view.icon.svg"
        d="M6.008 15.016v-4h-4v4h4Zm5.986 0v-4h-4v4h4Zm5.991 0v-4h-4v4h4ZM6.008 9V5h-4v4h4Zm5.986 0V5h-4v4h4Zm1.991 0h4V5h-4v4Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#grid-view.icon.svg" />
  </SVG>
)
