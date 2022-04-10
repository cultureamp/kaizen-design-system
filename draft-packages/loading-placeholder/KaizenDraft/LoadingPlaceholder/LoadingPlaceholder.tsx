import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./styles.scss"

export interface LoadingPlaceholderProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  animated?: boolean
  centred?: boolean
  reversedDefault?: boolean
  /**
   * **Deprecated**
   * @deprecated
   */
  reversedOcean?: boolean
  tall?: boolean
  inheritBaseline?: boolean
  inline?: boolean
  noBottomMargin?: boolean
  /**
   * Width as a percentage.
   */
  width?: number
}

export const LoadingPlaceholder: React.VFC<LoadingPlaceholderProps> = ({
  animated = true,
  centred,
  reversedDefault,
  reversedOcean,
  tall,
  inheritBaseline,
  inline,
  noBottomMargin,
  width = 100,
  classNameOverride,
  ...props
}) => (
  <div
    className={classnames(styles.base, classNameOverride, {
      [styles.animated]: animated,
      [styles.centered]: centred,
      [styles.reversedDefault]: reversedDefault,
      [styles.reversedOcean]: reversedOcean,
      [styles.normal]: !tall,
      [styles.tall]: tall,
      [styles.inheritBaseline]: inheritBaseline,
      [styles.inline]: inline,
      [styles.noBottomMargin]: noBottomMargin,
    })}
    style={{ width: `${width}%` }}
    {...props}
  />
)
