import * as React from "react"
import styles from "./Tooltip.scss"
import classnames from "classnames"

type Position = "above" | "below"

type Props = {
  position?: Position
  text: string
  children?: React.ReactNode
}

const Tooltip = (props: Props) => (
  <span className={styles.tooltipWrap}>
    {props.children}
    <span
      className={classnames(styles.contentWrap, {
        [styles.above]: props.position == "above",
      })}
    >
      <span
        className={classnames(
          styles.root,
          {
            [styles.below]: props.position == "below",
            [styles.above]: props.position == "above",
          },
          styles.default
        )}
      >
        <span className={styles.tooltipContent}>{props.text}</span>
      </span>

      <span
        className={classnames(
          styles.root,
          styles.shadow,
          {
            [styles.below]: props.position == "below",
            [styles.above]: props.position == "above",
          },
          styles.default
        )}
      >
        <span className={styles.tooltipContent}>{props.text}</span>
      </span>
    </span>
  </span>
)

Tooltip.defaultProps = {
  position: "above",
}

export default Tooltip
