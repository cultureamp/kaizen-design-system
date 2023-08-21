import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const DuplicateIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="duplicate.icon.svg"
        d="M13.273 2H4.545c-.803 0-1.454.65-1.454 1.455v10.181h1.454V3.455h8.728V2Zm2.182 2.91h-8C6.65 4.91 6 5.56 6 6.363v10.181C6 17.35 6.65 18 7.455 18h8c.803 0 1.454-.65 1.454-1.455V6.364c0-.804-.65-1.455-1.454-1.455Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#duplicate.icon.svg" />
  </SVG>
)
