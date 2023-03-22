import React from "react"
import { SVG, SVGProps } from "~components/SVG"

export const ChevronDownIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG>
    <defs>
      <path
        id="path-1"
        d="M6.17916667 6.84500003L10 10.746733 13.8208333 6.84500003 15 8.04913353 10 13.155 5 8.04913353z"
      ></path>
    </defs>
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g>
        <mask fill="#fff">
          <use xlinkHref="#path-1"></use>
        </mask>
        <use fill="currentColor" xlinkHref="#path-1"></use>
      </g>
    </g>
  </SVG>
)
