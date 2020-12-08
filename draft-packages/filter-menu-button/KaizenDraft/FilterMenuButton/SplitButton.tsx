import { Icon } from "@kaizen/component-library"
import { Button } from "@kaizen/draft-button"
import * as React from "react"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import clearIcon from "@kaizen/component-library/icons/clear.icon.svg"
import classnames from "classnames"
import styles from "./SplitButton.module.scss"

type SplitButtonProps = {
  labelText: string
  metadata?: React.ReactNode
  onClick: (e: any) => void
  onFilterClear?: (e: any) => void
  onMouseDown: (e: any) => void
  reversed?: boolean
  ariaExpanded: boolean
  ariaControls: string
}

export const SplitButton = ({
  labelText,
  metadata,
  onClick,
  onFilterClear,
  onMouseDown,
  reversed,
  ariaControls,
  ariaExpanded,
}: SplitButtonProps) => {
  if (metadata) {
    return (
      <div className={styles.filterSelectButton}>
        <button
          onClick={onClick}
          type="button"
          className={classnames(styles.primaryActionButton, {
            [styles.noClearButton]: !onFilterClear,
          })}
        >
          <span className={styles.filterName}>{labelText}</span>
          <span>{metadata}</span>
        </button>
        {onFilterClear ? (
          <button
            onClick={onFilterClear}
            type="button"
            className={styles.clearButton}
          >
            <Icon icon={clearIcon} role="img" />
          </button>
        ) : null}
      </div>
    )
  }

  return (
    <Button
      secondary={true}
      reversed={reversed}
      label={labelText}
      icon={chevronDown}
      iconPosition="end"
      onClick={onClick}
      onMouseDown={onMouseDown}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
    />
  )
}
