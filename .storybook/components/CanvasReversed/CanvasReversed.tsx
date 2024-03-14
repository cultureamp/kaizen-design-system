import React, { ComponentProps } from "react"
import classnames from "classnames"
import { Canvas } from "@storybook/blocks"
import styles from "./CanvasReversed.module.scss"

export const CanvasReversed = ({
  className,
  ...props
}: ComponentProps<typeof Canvas>) => (
  <Canvas {...props} className={classnames(styles.canvasReversed, className)} />
)
