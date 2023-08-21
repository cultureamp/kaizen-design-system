import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const SendRtlIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="send-rtl.icon.svg"
        d="M2.008 3.143 2 8.475l11.425 1.523L2 11.52l.008 5.332 15.987-6.855z"
      />
    </defs>
    <use
      fill="currentColor"
      fill-rule="evenodd"
      transform="matrix(-1 0 0 1 19.995 0)"
      href="#send-rtl.icon.svg"
    />
  </SVG>
)
