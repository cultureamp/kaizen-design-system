import React, { ButtonHTMLAttributes } from "react"
import classnames from "classnames"
import { CloseIcon } from "~components/Icon"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./RemoveButton.module.scss"

export type RemoveButtonProps = OverrideClassName<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">
>

export const RemoveButton = ({
  classNameOverride,
  color = "gray",
  ...restProps
}: RemoveButtonProps): JSX.Element => (
  <button
    type="button"
    aria-label="clear"
    className={classnames(
      styles.removeButton,
      styles[color],
      classNameOverride
    )}
    {...restProps}
  >
    <CloseIcon role="presentation" classNameOverride={styles.closeIcon} />
  </button>
)

RemoveButton.displayName = "RemoveButton"
