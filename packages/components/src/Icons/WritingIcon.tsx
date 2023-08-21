import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const WritingIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="writing.icon.svg"
        d="M1 18.55h18.002V15.7H1v2.85ZM16.53 4.333a.689.689 0 0 0 0-1.009L14.78 1.66a.78.78 0 0 0-1.061 0L12.25 3.052l2.813 2.673 1.466-1.393Zm-2.216 2.105-2.813-2.672-7.5 7.126v2.672h2.812l7.501-7.126Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#writing.icon.svg" />
  </SVG>
)
