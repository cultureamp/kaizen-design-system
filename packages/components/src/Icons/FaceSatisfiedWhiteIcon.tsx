import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const FaceSatisfiedWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="face-satisfied-white.icon.svg"
        d="M9.992 2C5.576 2 2 5.584 2 10s3.576 8 7.992 8C14.416 18 18 14.416 18 10s-3.584-8-8.008-8"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#face-satisfied-white.icon.svg" />
      <path
        fill="#FFF"
        d="M10 16.4A6.398 6.398 0 0 1 3.6 10c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4"
      />
      <path
        fill="currentColor"
        d="M10 13.2c-1.184 0-2.2-.648-2.76-1.6H5.904a4.396 4.396 0 0 0 8.192 0H12.76c-.56.952-1.576 1.6-2.76 1.6M12.8 9.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4M7.2 9.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4"
      />
    </g>
  </SVG>
)
