import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const CautionIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M8.67 2.822 2.16 15.849A1.486 1.486 0 0 0 3.488 18h13.024a1.486 1.486 0 0 0 1.33-2.151L11.328 2.822c-.548-1.096-2.11-1.096-2.658 0ZM10.8 15H9.2v-1.6h1.6V15Zm-1.6-3.2h1.6V7H9.2v4.8Z"
      clip-rule="evenodd"
    />
  </SVG>
)
