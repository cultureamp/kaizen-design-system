import React from "react"
import { Icon, IconProps } from "~components/SVG"

export const ClearIcon = (props: Omit<IconProps, "children">): JSX.Element => (
  <Icon {...props}>
    <defs>
      <path
        id="path-1"
        d="M10 2c-4.424 0-8 3.576-8 8 0 4.424 3.576 8 8 8 4.424 0 8-3.576 8-8 0-4.424-3.576-8-8-8zm4 10.872L12.872 14 10 11.128 7.128 14 6 12.872 8.872 10 6 7.128 7.128 6 10 8.872 12.872 6 14 7.128 11.128 10 14 12.872z"
      ></path>
    </defs>
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g>
        <mask fill="#fff">
          <use xlinkHref="#path-1"></use>
        </mask>
        <use fill="#000" xlinkHref="#path-1"></use>
      </g>
    </g>
  </Icon>
)
