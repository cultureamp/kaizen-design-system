import React, { ButtonHTMLAttributes, forwardRef } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./FilterButtonBase.module.scss"

export interface FilterButtonBaseProps
  extends OverrideClassName<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: React.ReactNode
}

export const FilterButtonBase = forwardRef<
  HTMLButtonElement,
  FilterButtonBaseProps
>(({ children, classNameOverride, ...restProps }, ref) => (
  <button
    ref={ref}
    type="button"
    className={classnames(styles.filterButtonBase, classNameOverride)}
    {...restProps}
  >
    {children}
  </button>
))

FilterButtonBase.displayName = "FilterButtonBase"
