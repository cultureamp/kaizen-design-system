import * as React from "react"
import classnames from "classnames"
import { Button } from "@kaizen/button"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import clearIcon from "@kaizen/component-library/icons/clear.icon.svg"
import styles from "./FilterSplitButton.module.scss"

type FilterSplitButtonProps = {
  labelText: string
  metadata?: React.ReactNode
  onClick: (e: any) => void
  onFilterClear?: (e: any) => void
  onMouseDown: (e: any) => void
  ariaExpanded: boolean
  ariaControls: string
  isDropdownVisible: boolean
}

export const FilterSplitButton = ({
  labelText,
  metadata,
  onClick,
  onFilterClear,
  onMouseDown,
  ariaControls,
  ariaExpanded,
  isDropdownVisible,
}: FilterSplitButtonProps) => {
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
          <span className={styles.metadata}>{metadata}</span>
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
    <div
      className={classnames(styles.button, {
        [styles.buttonActive]: isDropdownVisible,
      })}
    >
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
