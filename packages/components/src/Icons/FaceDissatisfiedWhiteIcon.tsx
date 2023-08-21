import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const FaceDissatisfiedWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <g fill="none" fill-rule="evenodd">
      <path
        fill="currentColor"
        d="M9.992 2C5.576 2 2 5.583 2 10c0 4.416 3.576 8 7.992 8C14.416 18 18 14.416 18 10c0-4.417-3.584-8-8.008-8"
      />
      <path
        fill="#FFF"
        d="M10 16.4A6.398 6.398 0 0 1 3.6 10c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4"
      />
      <path
        fill="currentColor"
        d="M10 11.6a4.395 4.395 0 0 0-4.096 2.8H7.24A3.188 3.188 0 0 1 10 12.8c1.184 0 2.2.648 2.76 1.6h1.336A4.395 4.395 0 0 0 10 11.6M12.8 9.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4M7.2 9.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4"
      />
    </g>
  </SVG>
)
