import React from "react"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const SurveysWhiteIcon = (
  props: Omit<SVGProps, "children">
): JSX.Element => (
  <SVG {...props}>
    <defs>
      <path
        id="surveys-white.icon.svg"
        d="M12.193 2.454C11.867 1.611 11.011 1 10 1c-1.01 0-1.867.61-2.193 1.454H4.556C3.7 2.454 3 3.109 3 3.909v13.636c0 .8.7 1.455 1.556 1.455h10.888C16.3 19 17 18.345 17 17.545V3.91c0-.8-.7-1.455-1.556-1.455h-3.25Zm-2.193 0c.4 0 .726.327.726.728a.73.73 0 0 1-.726.727.73.73 0 0 1-.727-.727c0-.4.327-.728.727-.728Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <use fill="currentColor" href="#surveys-white.icon.svg" />
      <path
        fill="#FFF"
        d="M6.363 8.545h7.273V7.091H6.363zM6.363 11.454h7.273V9.999H6.363zM6.363 14.362h5.091v-1.454h-5.09z"
      />
    </g>
  </SVG>
)
