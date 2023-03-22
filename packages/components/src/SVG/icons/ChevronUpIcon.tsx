import React from "react"
import { SVG, SVGProps } from "~components/SVG"

export const ChevronUpIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="path-chevron-up"
        d="M6.17865149 13.155L10 9.25326703 13.8213485 13.155 15.0006742 11.9508665 10 6.84500003 4.99932583 11.9508665z"
      ></path>
    </defs>
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g>
        <mask fill="#fff">
          <use xlinkHref="#path-chevron-up"></use>
        </mask>
        <use fill="currentColor" xlinkHref="#path-chevron-up"></use>
      </g>
    </g>
  </SVG>
)
