import React, { forwardRef, HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import iconClear from "@kaizen/component-library/icons/clear.icon.svg"
import { Tooltip } from "@kaizen/draft-tooltip"
import { isRefObject } from "../../../../utils/isRefObject"
import { FilterButtonBase, FilterButtonBaseProps } from "../FilterButtonBase"
import { FilterButtonGroup, FilterButtonGroupProps } from "../FilterButtonGroup"
import { FilterTriggerButton, FilterTriggerButtonProps } from "../FilterTriggerButton"
import styles from "./RemovableFilterTriggerButton.module.scss"

export interface RemovableFilterTriggerButtonProps
  // extends Omit<FilterTriggerButtonProps, "children"> {
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {

  onRemove: React.MouseEventHandler<HTMLButtonElement>
}

export type RemovableFilterTriggerButtonRefs = {
  triggerButtonRef?: React.RefObject<HTMLButtonElement>
  removeButtonRef?: React.RefObject<HTMLButtonElement>
}

export const RemovableFilterTriggerButton = forwardRef<
  RemovableFilterTriggerButtonRefs,
  RemovableFilterTriggerButtonProps
>(
  (
    { onRemove, label, classNameOverride, ...restProps },
    ref
  ) => {
    const customRefObject = isRefObject(ref) ? ref.current : null
    const triggerButtonRef = customRefObject?.triggerButtonRef
    const removeButtonRef = customRefObject?.removeButtonRef

    return (
      <div className={styles.removeableFilterTriggerButton}>
        <FilterTriggerButton
          ref={triggerButtonRef}
          label={label}
          classNameOverride={classnames(
            styles.triggerButton,
            classNameOverride,
          )}
          {...restProps}
        />
        <Tooltip text={`Remove filter ${label}`} position="below">
          <FilterButtonBase ref={removeButtonRef} onClick={onRemove} classNameOverride={styles.removeButton}>
            <Icon icon={iconClear} role="presentation" />
          </FilterButtonBase>
        </Tooltip>
      </div>
    )
})

RemovableFilterTriggerButton.displayName = "RemovableFilterTriggerButton"
