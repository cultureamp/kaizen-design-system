import React, { ButtonHTMLAttributes, forwardRef } from "react"
import classNames from "classnames"
import styles from "./FilterButtonBase.module.scss"
import { OverrideClassName } from "~types/overrideClassName"

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
    className={classNames(styles.filterButtonBase, classNameOverride)}
    {...restProps}
  >
    {children}
  </button>
))

FilterButtonBase.displayName = "FilterButtonBase"
