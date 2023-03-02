import React, { HTMLAttributes, useState } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import styles from "./FilterContents.module.scss"

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
