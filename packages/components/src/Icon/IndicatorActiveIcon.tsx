import React from "react"
import { SVG, IconProps } from "~components/Icon/subComponents/SVG"

// formally named "full"
export const IndicatorActiveIcon = (props: IconProps): JSX.Element => (
  <SVG {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2C5.584 2 2 5.584 2 10C2 14.416 5.584 18 10 18C14.416 18 18 14.416 18 10C18 5.584 14.416 2 10 2ZM10 16.4C6.464 16.4 3.6 13.536 3.6 10C3.6 6.464 6.464 3.6 10 3.6C13.536 3.6 16.4 6.464 16.4 10C16.4 13.536 13.536 16.4 10 16.4ZM10 13.5C11.933 13.5 13.5 11.933 13.5 10C13.5 8.067 11.933 6.5 10 6.5C8.067 6.5 6.5 8.067 6.5 10C6.5 11.933 8.067 13.5 10 13.5Z"
      fill="currentColor"
    />
  </SVG>
)
