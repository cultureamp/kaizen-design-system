import * as React from "react"
import { Icon } from "@kaizen/component-library"
import { Button } from "@kaizen/draft-button"
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
  ariaExpanded: boolean
  ariaControls: string
  isDropdownVisible: boolean
}

export const SplitButton = ({
  labelText,
  metadata,
  onClick,
  onFilterClear,
  onMouseDown,
  ariaControls,
  ariaExpanded,
  isDropdownVisible,
}: SplitButtonProps) => {
  if (metadata) {
    return (
      <div className={styles.filterSelectButton}>
        <button
          onClick={onClick}
          type="button"
          className={classnames(styles.primaryActionButton, {
            [styles.noClearButton]: !onFilterClear,
            [styles.splitButtonFocus]: isDropdownVisible,
          })}
        >
          <span className={styles.filterName}>{labelText}</span>
          <span>{metadata}</span>
        </button>
        {onFilterClear ? (
          <button
            onClick={onFilterClear}
            type="button"
            className={classnames(styles.clearButton, {
              [styles.splitButtonFocus]: isDropdownVisible,
            })}
          >
            <Icon icon={clearIcon} role="img" />
          </button>
        ) : null}
      </div>
    )
  }

  return (
    <div>
      <Button
        secondary={true}
        label={labelText}
        icon={chevronDown}
        iconPosition="end"
        onClick={onClick}
        onMouseDown={onMouseDown}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
      />
    </div>
  )
}
