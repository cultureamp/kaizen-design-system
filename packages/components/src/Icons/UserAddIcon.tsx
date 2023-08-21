import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const UserAddIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="user-add.icon.svg"
        d="M7.499 11.667C5.274 11.667.833 12.783.833 15v1.667h13.331V15c0-2.217-4.44-3.333-6.665-3.333Zm9.165-3.334v-2.5h-1.667v2.5h-2.5V10h2.5v2.5h1.667V10h2.5V8.333h-2.5ZM7.499 10a3.332 3.332 0 0 0 3.333-3.333 3.332 3.332 0 1 0-6.666 0A3.332 3.332 0 0 0 7.5 10Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#user-add.icon.svg" />
  </SVG>
)
