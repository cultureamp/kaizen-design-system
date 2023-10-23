import React from "react"
import { SVG, IconProps } from "~components/Icon/subcomponents/SVG"

export const RemoveTagIcon = (props: IconProps): JSX.Element => {
  const svgContent = (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.97304 10.0337L5.05893 13.9478L6.11959 15.0085L10.0337 11.0944L13.9478 15.0085L15.0085 13.9478L11.0944 10.0337L15.0085 6.11959L13.9478 5.05893L10.0337 8.97304L6.11959 5.05893L5.05893 6.11959L8.97304 10.0337Z"
        fill="currentColor"
      />
    </>
  )
  return (
    <SVG {...props} viewBox="0 0 20 20">
      {svgContent}
    </SVG>
  )
}
