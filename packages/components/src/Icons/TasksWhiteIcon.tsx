import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const TasksWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="tasks-white.icon.svg"
        d="M15.444 3H4.548c-.864 0-1.54.692-1.54 1.556L3 15.444C3 16.3 3.684 17 4.548 17h10.896C16.3 17 17 16.3 17 15.444V4.556C17 3.692 16.3 3 15.444 3Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use
        fill="currentColor"
        fill-rule="nonzero"
        href="#tasks-white.icon.svg"
      />
      <path
        fill="#FFF"
        d="M15.444 12.333h-3.11A2.335 2.335 0 0 1 10 14.667a2.335 2.335 0 0 1-2.333-2.334h-3.12V4.556h10.897v7.777Z"
      />
    </g>
  </SVG>
)
