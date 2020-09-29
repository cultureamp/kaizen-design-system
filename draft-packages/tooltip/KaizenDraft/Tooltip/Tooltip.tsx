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
  <div className={styles.tooltipWrap}>
    {props.children}
    <div
      className={classnames(styles.contentWrap, {
        [styles.above]: props.position == "above",
      })}
    >
      <div
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
      </div>

      <div
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
      </div>
    </div>
  </div>
)

Tooltip.defaultProps = {
  position: "above",
}

export default Tooltip
