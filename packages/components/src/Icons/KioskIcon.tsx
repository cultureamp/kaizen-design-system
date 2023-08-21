import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const KioskIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="kiosk.icon.svg"
        d="M14.353 2h.314c.92 0 1.353.747 1.353 1.667v12.666c0 .92-.747 1.667-1.667 1.667H5.677c-.92 0-1.667-.747-1.667-1.667V3.667C4.01 2.747 4.757 2 5.677 2h8.676ZM5 14.667h10V4H5v10.667Zm4 1.666c0 .553.446 1 1 1s1-.447 1-1c0-.553-.446-1-1-1s-1 .447-1 1Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#kiosk.icon.svg" />
  </SVG>
)
