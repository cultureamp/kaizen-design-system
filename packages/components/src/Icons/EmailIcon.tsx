import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const EmailIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="email.icon.svg"
        d="M16.4 3.5H3.6c-.88 0-1.592.72-1.592 1.6L2 14.7c0 .88.72 1.6 1.6 1.6h12.8c.88 0 1.6-.72 1.6-1.6V5.1c0-.88-.72-1.6-1.6-1.6Zm0 3.2-6.4 4-6.4-4V5.1l6.4 4 6.4-4v1.6Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="nonzero" href="#email.icon.svg" />
  </SVG>
)
