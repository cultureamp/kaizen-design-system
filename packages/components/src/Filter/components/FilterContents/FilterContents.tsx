import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import styles from "./FilterContents.module.scss"
import { OverrideClassName } from "~types/OverrideClassName"

export interface FilterContentsProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
}

export const FilterContents = ({
  children,
  classNameOverride,
  ...restProps
}: FilterContentsProps): JSX.Element => (
  <div
    className={classnames(styles.filterContents, classNameOverride)}
    {...restProps}
  >
    {children}
  </div>
)

FilterContents.displayName = "FilterContents"
