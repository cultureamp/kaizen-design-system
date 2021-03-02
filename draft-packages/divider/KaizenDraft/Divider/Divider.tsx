import { useTheme } from "@kaizen/design-tokens"
import classNames from "classnames"
import * as React from "react"
import styles from "./styles.module.scss"

export interface DividerProps {
  isReversed?: boolean
  variant: "content" | "canvas"
}

export const Divider = ({ isReversed = false, variant }: DividerProps) => {
  const theme = useTheme()
  return (
    <hr
      className={classNames(styles[theme.themeKey], styles.wrapper, {
        [styles.reversed]: isReversed,
        [styles.content]: variant === "content",
        [styles.canvas]: variant === "canvas",
      })}
    />
  )
}
