import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const CustomIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="custom.icon.svg"
        d="m18.615 3.45-1.253-1.19a.967.967 0 0 0-1.32 0L7.66 10.223l2.573 2.444 8.382-7.963a.854.854 0 0 0 0-1.253M5.79 11.779c-1.553 0-2.807 1.19-2.807 2.666 0 1.164-1.085 1.777-1.87 1.777C1.971 17.307 3.44 18 4.852 18c2.068 0 3.743-1.59 3.743-3.555 0-1.475-1.254-2.666-2.807-2.666"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#custom.icon.svg" />
  </SVG>
)
