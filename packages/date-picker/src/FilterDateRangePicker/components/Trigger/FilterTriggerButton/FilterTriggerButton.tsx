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
>(({ label, selectedValue, ...restProps }, ref) => (
  <TriggerButtonBase ref={ref} {...restProps}>
    {selectedValue ? (
      <>
        <span className={styles.hasSelectedValues}>{label}:&nbsp;</span>
        <span>{selectedValue}</span>
      </>
    ) : (
      <span>{label}</span>
    )}
  </TriggerButtonBase>
))

FilterTriggerButton.displayName = "FilterTriggerButton"
