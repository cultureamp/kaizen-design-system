import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { CloseIcon } from "~components/SVG/icons/CloseIcon"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./CloseButton.module.scss"

export interface CloseButtonProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  onClick: () => void
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  classNameOverride,
}) => {
  {
    return (
      // Can't use Kaizen Icon button as there is a display: inline-block on the container
      <button
        type="button"
        className={classnames(styles.closeButton, classNameOverride)}
        aria-label="Close dialog"
        onClick={onClick}
      >
        <CloseIcon />
      </button>
    )
  }
}

CloseButton.displayName = "CloseButton"
