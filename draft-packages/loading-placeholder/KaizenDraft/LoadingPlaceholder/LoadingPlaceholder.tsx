import classnames from "classnames"
import * as React from "react"

import styles from "./styles.scss"

interface Props {
  readonly animated?: boolean
  readonly centred?: boolean
  readonly reversedDefault?: boolean
  /**
   * @deprecated reversedOcean is deprecated.
   */
  readonly reversedOcean?: boolean
  readonly tall?: boolean
  readonly inheritBaseline?: boolean
  readonly inline?: boolean
  readonly noBottomMargin?: boolean
  readonly width?: number
}

type LoadingPlaceholder = React.FunctionComponent<Props>

const LoadingPlaceholder: LoadingPlaceholder = ({
  animated = true,
  centred,
  reversedDefault,
  reversedOcean,
  tall,
  inheritBaseline,
  inline,
  noBottomMargin,
  width = 100,
}) => (
  <div
    className={classnames(styles.base, {
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
  />
)

export default LoadingPlaceholder
