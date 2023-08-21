import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const KebabIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="kebab.icon.svg"
        d="M-4 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2ZM2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
      />
    </defs>
    <use
      fill="currentColor"
      fill-rule="evenodd"
      transform="rotate(-90 7 5)"
      href="#kebab.icon.svg"
    />
  </SVG>
)
