import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const ListViewIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="list-view.icon.svg"
        d="M2 10.89h1.778V9.112H2v1.778Zm0 3.556h1.778v-1.778H2v1.778Zm0-7.112h1.778V5.556H2v1.778Zm3.556 3.556h12.446V9.112H5.556v1.778Zm0 3.556h12.446v-1.778H5.556v1.778Zm0-8.89v1.778h12.446V5.556H5.556Z"
      />
    </defs>
    <use fill="currentColor" fill-rule="evenodd" href="#list-view.icon.svg" />
  </SVG>
)
