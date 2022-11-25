import React, { forwardRef } from "react"
import { TriggerButtonBase, TriggerButtonBaseProps } from "../TriggerButtonBase"
import styles from "./FilterTriggerButton.module.scss"

export interface FilterTriggerButtonProps
  extends Omit<TriggerButtonBaseProps, "children"> {
  label: string
  selectedValue?: string
}

export const FilterTriggerButton = forwardRef<
  HTMLButtonElement,
  FilterTriggerButtonProps
>(({ label, selectedValue, ...restProps }, ref) => {
  const hasSelectedValue = selectedValue && selectedValue !== ""

  return (
    <TriggerButtonBase ref={ref} {...restProps}>
      <span>
        {hasSelectedValue ? (
          <>
            <span className={styles.hasSelectedValues}>{label}:&nbsp;</span>
            <span>{selectedValue}</span>
          </>
        ) : (
          label
        )}
      </span>
    </TriggerButtonBase>
  )
})

FilterTriggerButton.displayName = "FilterTriggerButton"
