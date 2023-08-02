import React from "react"
import { Icon } from "@kaizen/component-library"
import clear from "@kaizen/component-library/icons/clear.icon.svg"
import { Tooltip } from "@kaizen/draft-tooltip"
import {
  FilterTriggerButton,
  FilterTriggerButtonProps,
} from "../FilterTriggerButton"
import styles from "./RemovableFilterTrigger.module.scss"

export type RemovableFilterTriggerProps = {
  onRemove: () => void
} & FilterTriggerButtonProps

export const RemovableFilterTrigger = ({
  onRemove,
  classNameOverride,
  ...filterTriggerProps
}: RemovableFilterTriggerProps): JSX.Element => {
  const removeButtonLabel = `Remove filter - ${filterTriggerProps.label}`
  return (
    <div className={`${styles.trigger} ${classNameOverride}`}>
      <FilterTriggerButton
        classNameOverride={styles.triggerButton}
        {...filterTriggerProps}
      />
      <div className={styles.divider} />
      <Tooltip text={removeButtonLabel} position="below">
        <button
          type="button"
          className={styles.removeButton}
          aria-label={removeButtonLabel}
          onClick={onRemove}
        >
          <Icon icon={clear} role="presentation" />
        </button>
      </Tooltip>
    </div>
  )
}

RemovableFilterTrigger.displayName = "RemovableFilterTrigger"
