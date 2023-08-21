import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const PauseIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="pause.icon.svg"
        d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm-.8 11.2H7.6V6.8h1.6v6.4Zm3.2 0h-1.6V6.8h1.6v6.4Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#pause.icon.svg" />
  </SVG>
)
