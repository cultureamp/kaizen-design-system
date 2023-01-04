import React from "react"
import { Icon } from "@kaizen/component-library"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import styles from "./CloseButton.scss"

export interface CloseButtonProps {
  onClick: () => void
}

export const CloseButton = ({ onClick }: CloseButtonProps) => {
  {
    return (
      <button
        className={styles.closeButton}
        aria-label="Close dialog"
        onClick={onClick}
      >
        <Icon icon={closeIcon} />
      </button>
    )
  }
}
