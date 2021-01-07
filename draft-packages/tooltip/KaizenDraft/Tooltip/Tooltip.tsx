import * as React from "react"
import classnames from "classnames"
import styles from "./Tooltip.scss"

type Position = "above" | "below"

export type TooltipProps = {
  inline?: boolean
  position?: Position
  text: React.ReactNode
  children?: React.ReactNode
  classNameAndIHaveSpokenToDST?: string
}

const Tooltip = (props: TooltipProps) => (
  <span
    className={classnames(
      styles.tooltipWrap,
      props.classNameAndIHaveSpokenToDST,
      {
        [styles.inline]: props.inline === true,
      }
    )}
  >
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
        <span className={styles.tooltipContent} aria-hidden>
          {props.text}
        </span>
      </span>
    </span>
  </span>
)

Tooltip.defaultProps = {
  position: "above",
}

export default Tooltip
