import React from "react"
import { Icon } from "@kaizen/component-library"
import classNames from "classnames"
import clear from "@kaizen/component-library/icons/clear.icon.svg"
import { Tooltip } from "@kaizen/draft-tooltip"
import { FilterTriggerButton } from "../FilterTriggerButton"
import styles from "./RemovableFilterTrigger.scss"

export type RemovableFilterTriggerProps = {
  label: string
  selectedOptionLabels: string[]
  onRemove: () => void
}

export const RemovableFilterTrigger: React.VFC<RemovableFilterTriggerProps> = ({
  label,
  selectedOptionLabels,
  onRemove,
}) => {
  const removeButtonLabel = `Remove ${label} filter`
  return (
    <div className={styles.trigger}>
      <FilterTriggerButton
        label={label}
        selectedOptionLabels={selectedOptionLabels}
      />
      <div className={styles.divider} />
      <Tooltip text={removeButtonLabel}>
        <button
          className={classNames(
            styles.removeButton,
            selectedOptionLabels.length > 0 ? styles.hasSelectedValues : ""
          )}
          aria-label={removeButtonLabel}
          onClick={() => onRemove()}
        >
          <Icon icon={clear} role="presentation" />
        </button>
      </Tooltip>
    </div>
  )
}

RemovableFilterTrigger.displayName = "RemovableFilterTrigger"
