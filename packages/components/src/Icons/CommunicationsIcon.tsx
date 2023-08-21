import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const CommunicationsIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="communications.icon.svg"
        d="M17.2 5.2h-1.6v7.2H5.2V14c0 .44.36.8.8.8h8.8L18 18V6c0-.44-.36-.8-.8-.8ZM14 10V2.8c0-.44-.36-.8-.8-.8H2.8c-.44 0-.8.36-.8.8V14l3.2-3.2h8c.44 0 .8-.36.8-.8Z"
      />
    </defs>
    <use
      fill="currentColor"
      fill-rule="nonzero"
      href="#communications.icon.svg"
    />
  </SVG>
)
