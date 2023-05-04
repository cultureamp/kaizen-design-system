import React from "react"
import { SVG, SVGProps } from "~components/SVG"

export const CheckIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <polygon
        id="path-1"
        points="8.33333333 14.3416667 4.16666667 10.175 5.34166667 9 8.33333333 11.9833333 14.6583333 5.65833333 15.8333333 6.84166667"
      ></polygon>
    </defs>
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="Icons/Informational/check">
        <mask id="mask-2" fill="white">
          <use xlinkHref="#path-1"></use>
        </mask>
        <use fill="#000000" xlinkHref="#path-1"></use>
      </g>
    </g>
  </SVG>
)

CheckIcon.displayName = "CheckIcon"
