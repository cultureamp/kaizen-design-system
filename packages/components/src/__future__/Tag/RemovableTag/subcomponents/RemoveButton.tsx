import React, { ButtonHTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~components/types/OverrideClassName"
import { RemoveTagIcon } from "./RemoveTagIcon"
import styles from "./RemoveButton.module.scss"

// type RemoveButtonColor =
// | "gray"
// | "blue"
// | "green"
// | "yellow"
// | "orange"
// | "red"
// | "purple"

export type RemoveButtonBaseProps = {
  // color?: RemoveButtonColor
  ariaLabel: string
  onClick: () => void
}
export type RemoveButtonProps = OverrideClassName<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "color"> &
    RemoveButtonBaseProps
>

export const RemoveButton = ({
  classNameOverride,
  // color = "gray",
  ariaLabel,
  onClick,
  ...restProps
}: RemoveButtonProps): JSX.Element => (
  <button
    type="button"
    aria-label={ariaLabel}
    className={classnames(styles.removeButton, classNameOverride)}
    onClick={onClick}
    {...restProps}
  >
    <RemoveTagIcon role="presentation" />
  </button>
)

RemoveButton.displayName = "RemoveButton"
