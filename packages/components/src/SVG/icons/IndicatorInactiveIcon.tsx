import React from "react"
import { SVG, SVGProps } from "~components/SVG"

// formally named "empty"
export const IndicatorInactiveIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        d="M2,10 C2,5.584 5.584,2 10,2 C14.416,2 18,5.584 18,10 C18,14.416 14.416,18 10,18 C5.584,18 2,14.416 2,10 Z M10,16.4 C13.536,16.4 16.4,13.536 16.4,10 C16.4,6.464 13.536,3.6 10,3.6 C6.464,3.6 3.6,6.464 3.6,10 C3.6,13.536 6.464,16.4 10,16.4 Z"
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
      <g id="empty">
        <mask id="mask-2" fill="white">
          <use xlinkHref="#path-1"></use>
        </mask>
        <use id="Combined-Shape" fill="currentColor" xlinkHref="#path-1"></use>
      </g>
    </g>
  </SVG>
)
