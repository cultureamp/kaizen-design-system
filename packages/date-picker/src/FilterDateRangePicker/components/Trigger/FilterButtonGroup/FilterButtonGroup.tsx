import React, { HTMLAttributes } from "react"
import classNames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./FilterButtonGroup.module.scss"

export interface FilterButtonGroupProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
}

export const FilterButtonGroup: React.VFC<FilterButtonGroupProps> = ({
  children,
  classNameOverride,
  ...restProps
}) => (
  <div
    className={classNames(styles.filterButtonGroup, classNameOverride)}
    {...restProps}
  >
    {children}
  </div>
)

FilterButtonGroup.displayName = "FilterButtonGroup"
