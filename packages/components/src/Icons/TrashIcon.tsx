import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const TrashIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="trash.icon.svg"
        d="M13 2.889 12.143 2H7.857L7 2.889H4v1.778h12V2.889h-3ZM5.005 16.222c0 .982.767 1.778 1.714 1.778h6.562c.947 0 1.714-.796 1.714-1.778V5.556h-9.99v10.666Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#trash.icon.svg" />
  </SVG>
)
