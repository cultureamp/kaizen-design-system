import React, { ButtonHTMLAttributes } from "react"
import classnames from "classnames"
import { CloseIcon } from "~components/Icon"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./RemoveButton.module.scss"

export type ClearButtonProps = {
  isReversed?: boolean
} & OverrideClassName<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">>

export const RemoveButton = ({
  classNameOverride,
  isReversed = false,
  ...restProps
}: ClearButtonProps): JSX.Element => (
  <button
    type="button"
    aria-label="clear"
    className={classnames(
      styles.removeButton,
      isReversed ? styles.reversed : styles.default,
      classNameOverride
    )}
    {...restProps}
  >
    <CloseIcon role="presentation" />
  </button>
)

RemoveButton.displayName = "RemoveButton"
