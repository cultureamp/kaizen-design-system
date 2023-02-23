import React, { ButtonHTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import clear from "@kaizen/component-library/icons/clear.icon.svg"
import styles from "./ClearButton.module.scss"

export interface ClearButtonProps
  extends Omit<
    OverrideClassName<ButtonHTMLAttributes<HTMLButtonElement>>,
    "children"
  > {
  isReversed?: boolean
}

export const ClearButton = ({
  classNameOverride,
  isReversed = false,
  ...restProps
}: ClearButtonProps): JSX.Element => (
  <button
    type="button"
    aria-label="clear"
    className={classnames(
      styles.clearButton,
      isReversed ? styles.reversed : styles.default,
      classNameOverride
    )}
    {...restProps}
  >
    <Icon icon={clear} role="presentation" />
  </button>
)

ClearButton.displayName = "ClearButton"
