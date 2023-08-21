import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ParticipationWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="participation-white.icon.svg"
        d="M16.433 4.23c-.638 0-1.011.532-1.011 1.166l-.186 3.684h-.4l.051-6.172c0-.633-.515-1.145-1.152-1.145-.637 0-1.152.512-1.152 1.145l-.204 6.187-.41-.01-.154-6.94C11.815 1.512 11.3 1 10.663 1c-.638 0-1.152.512-1.152 1.145L9.46 9.08h-.297l-.421-5.027c0-.634-.514-1.145-1.152-1.145-.637 0-1.152.511-1.152 1.145 0 0 .784 9.214.784 9.365 0 .23-.122.223-.437-.072-.202-.189-2.71-2.192-2.733-2.197-.924-.553-1.957.702-1.543 1.328.613.926 4.771 5.122 4.771 5.122C8.556 18.725 9.168 19 9.997 19l3.919-.073c1.689 0 3.123-1.843 3.123-2.737l.546-10.815c0-.633-.515-1.144-1.152-1.144Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#participation-white.icon.svg" />
      <path
        fill="#FFF"
        d="m11.16 16.047-2.446-2.44.813-.813 1.633 1.626 2.976-2.982.813.813z"
      />
    </g>
  </SVG>
)
