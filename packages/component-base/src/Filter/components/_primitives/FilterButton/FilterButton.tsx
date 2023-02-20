import React, { ButtonHTMLAttributes, forwardRef } from "react"
import classNames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./FilterButton.module.scss"

export interface FilterButtonProps
  extends OverrideClassName<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: React.ReactNode
}

export const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ children, classNameOverride, ...restProps }, ref) => (
    <button
      ref={ref}
      className={classNames(styles.filterBaseButton, classNameOverride)}
      {...restProps}
    >
      {children}
    </button>
  )
)

FilterButton.displayName = "FilterButton"
