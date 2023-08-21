import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const KioskWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="kiosk-white.icon.svg"
        d="M14.353 2H5.677c-.92 0-1.667.747-1.667 1.667v12.666c0 .92.747 1.667 1.667 1.667h8.676c.92 0 1.667-.747 1.667-1.667V3.667c0-.92-.433-1.667-1.353-1.667h-.314Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#kiosk-white.icon.svg" />
      <path
        fill="#FFF"
        d="M5 14.667h10V4H5zM9 16.333c0-.553.446-1 1-1s1 .447 1 1c0 .553-.446 1-1 1s-1-.447-1-1Z"
      />
    </g>
  </SVG>
)
