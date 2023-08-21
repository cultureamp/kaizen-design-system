import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const AddIcon = (props: Omit<SVGProps, "children">): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="add.icon.svg"
        d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm4 8.8h-3.2V14H9.2v-3.2H6V9.2h3.2V6h1.6v3.2H14v1.6Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#add.icon.svg" />
  </SVG>
)
