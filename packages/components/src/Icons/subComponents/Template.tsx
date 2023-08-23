import React from "react"
import { v4 as uuidv4 } from "uuid"
import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

const uniqueId = uuidv4()
export const COMPONENT_TITLE = (
  props: Omit<SVGProps, "children">
): JSX.Element => <SVG {...props}>SVG_CONTENT</SVG>
