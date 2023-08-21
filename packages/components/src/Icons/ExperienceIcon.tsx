import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ExperienceIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="experience.icon.svg"
        d="M11.645 4.653c-.62-.003-3.092 4.004-3.092 4.004 1.054 1.512 2.04 3.41 2.04 3.41l-1.235-.009C7.976 9.912 6.684 7.704 5.908 7.71 5.04 7.716 1 15.343 1 15.343h17.993s-6.086-10.685-7.348-10.69Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#experience.icon.svg" />
  </SVG>
)
