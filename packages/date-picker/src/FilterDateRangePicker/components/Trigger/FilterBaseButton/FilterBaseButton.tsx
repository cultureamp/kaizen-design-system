import React, { ButtonHTMLAttributes, forwardRef } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./FilterBaseButton.module.scss"

export interface FilterBaseButtonProps
  extends OverrideClassName<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: React.ReactNode
}

export const FilterBaseButton = forwardRef<
  HTMLButtonElement,
  FilterBaseButtonProps
>(({ children, classNameOverride, ...restProps }, ref) => (
  <button
    ref={ref}
    type="button"
    className={classnames(styles.filterBaseButton, classNameOverride)}
    {...restProps}
  >
    {children}
  </button>
))

FilterBaseButton.displayName = "FilterBaseButton"
