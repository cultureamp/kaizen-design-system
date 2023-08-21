import React, { ButtonHTMLAttributes } from "react"
import classnames from "classnames"
import { ClearIcon } from "~icons/ClearIcon"
import { OverrideClassName } from "~types/OverrideClassName"
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
    <ClearIcon role="presentation" />
  </button>
)

ClearButton.displayName = "ClearButton"
