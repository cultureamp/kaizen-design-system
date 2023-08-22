import { SVG, SVGProps } from "~components/Icons/subComponents/SVG"

export const COMPONENT_TITLE = (
  props: Omit<SVGProps, "children">
): JSX.Element => <SVG {...props}>SVG_CONTENT</SVG>
