import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const PersonIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="person.icon.svg"
        d="M10.005 6c-1.069 0-3.2.536-3.2 1.6l-.01 4.878h1.61V18h3.2v-5.522h1.59l.01-4.878c0-1.064-2.133-1.6-3.2-1.6m0-.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#person.icon.svg" />
  </SVG>
)
