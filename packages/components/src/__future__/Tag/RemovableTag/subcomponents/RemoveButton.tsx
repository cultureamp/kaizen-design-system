import React, { ButtonHTMLAttributes } from "react"
import classnames from "classnames"
import { RemoveTagIcon } from "./RemoveTagIcon"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./RemoveButton.module.scss"

type RemoveButtonColor =
  | "gray"
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "purple"

export type RemoveButtonBaseProps = {
  color?: RemoveButtonColor
  ariaLabel: string
  onClick: () => void
}
export type RemoveButtonProps = OverrideClassName<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "color"> &
    RemoveButtonBaseProps
>

export const RemoveButton = ({
  classNameOverride,
  color = "gray",
  ariaLabel,
  onClick,
  ...restProps
}: RemoveButtonProps): JSX.Element => (
  <button
    type="button"
    aria-label={ariaLabel}
    className={classnames(
      styles.removeButton,
      styles[color],
      classNameOverride
    )}
    onClick={onClick}
    {...restProps}
  >
    <RemoveTagIcon role="presentation" classNameOverride={styles.closeIcon} />
  </button>
)

RemoveButton.displayName = "RemoveButton"
