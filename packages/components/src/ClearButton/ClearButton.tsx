import React, { ButtonHTMLAttributes } from "react"
import classnames from "classnames"
import { ClearIcon } from "~components/__illustrations__/v1"
import { OverrideClassName } from "~components/types/OverrideClassName"
import styles from "./ClearButton.module.scss"

export type ClearButtonProps = {
  isReversed?: boolean
} & OverrideClassName<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">>

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
