import React from "react"
import { IconProps } from "../SVG"
import styles from "./RTLMirror.module.scss"

export type RTLMirrorProps = {
  children: React.ReactElement<IconProps>
}

export const RTLMirror = ({ children }: RTLMirrorProps): JSX.Element =>
  React.cloneElement(children, { classNameOverride: styles.rtlMirror })

RTLMirror.displayName = "Icon.RTLMirror"
