import React from "react"
import classnames from "classnames"
import styles from "./Pancake.module.scss"

/**
 * @todo: Refer to `docs/` for further code standards and guidelines
 */

/**
 * @todo: Replace `HTMLAttributes<HTMLDivElement>` with attributes/props you need to extend
 */
export type PancakeProps = {
  /** @todo: Add custom props here */
  exampleRequiredString: string
  isReversed?: boolean
}

export const Pancake = ({
  exampleRequiredString,
  isReversed = false,
  ...restProps
}: PancakeProps): JSX.Element => (
  <div
    className={classnames(styles.pancake, isReversed && styles.isReversed)}
    {...restProps}
  >
    {exampleRequiredString}
  </div>
)

Pancake.displayName = "Pancake"
