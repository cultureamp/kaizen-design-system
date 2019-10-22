import classNames from "classnames"
import * as React from "react"
const styles = require("./Tag.scss")

type Color = "default" | "peach" | "seedling" | "wisteria"

type Props = {
  color?: Color
  text: string
  withIcon?: boolean
  disableAnimation?: boolean
}

const Tag = (props: Props) => {
  const { color = "default", text, withIcon, disableAnimation } = props

  return (
    <div className={classNames(styles.root, styles[color])}>
      {text}
      {withIcon && (
        <span className={styles.pulse}>
          <span
            className={classNames(styles.pulseRing, {
              [styles.noAnimation]: disableAnimation,
            })}
          />
        </span>
      )}
    </div>
  )
}

Tag.defaultProps = {
  withIcon: false,
}

export default Tag
