import React from "react"
import { SVG, SVGProps } from "~components/SVG"

export const SuccessIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        d="M10,2 C14.416,2 18,5.584 18,10 C18,14.416 14.416,18 10,18 C5.584,18 2,14.416 2,10 C2,5.584 5.584,2 10,2 Z M8.4,14 L15.6,6.8 L14.472,5.664 L8.4,11.736 L5.528,8.872 L4.4,10 L8.4,14 Z"
        id="path-1"
      ></path>
    </defs>
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="success">
        <mask id="mask-2" fill="white">
          <use xlinkHref="#path-1"></use>
        </mask>
        <use id="Combined-Shape" fill="currentColor" xlinkHref="#path-1"></use>
      </g>
    </g>
  </SVG>
)
