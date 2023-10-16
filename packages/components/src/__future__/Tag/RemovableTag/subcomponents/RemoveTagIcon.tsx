import React from "react"
import { SVG, IconProps } from "~components/Icon/subcomponents/SVG"

export const RemoveTagIcon = (props: IconProps): JSX.Element => {
  const svgContent = (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.97304 5.0337L0.0589218 8.94782L1.11958 10.0085L5.0337 6.09436L8.94781 10.0085L10.0085 8.94782L6.09436 5.0337L10.0085 1.11959L8.94781 0.0589294L5.0337 3.97304L1.11958 0.0589294L0.0589218 1.11959L3.97304 5.0337Z"
        fill="#2F2438"
      />
    </>
  )
  return (
    <SVG {...props} viewBox="-5 -5 20 20">
      {svgContent}
    </SVG>
  )
}
