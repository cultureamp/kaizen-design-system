import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { IconButton } from "@kaizen/button"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import styles from "./CloseButton.scss"

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
        className={classnames(styles.closeButton, classNameOverride)}
        aria-label="Close dialog"
        onClick={onClick}
      >
        <Icon icon={closeIcon} />
      </button>
    )
  }
}

CloseButton.displayName = "CloseButton"
