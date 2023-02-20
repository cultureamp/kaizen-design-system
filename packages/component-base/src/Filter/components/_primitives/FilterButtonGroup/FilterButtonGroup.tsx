import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { FilterButtonProps } from "../FilterButton"
import styles from "./FilterButtonGroup.module.scss"

export interface FilterButtonGroupProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children:
    | React.ReactElement<FilterButtonProps>
    | Array<React.ReactElement<FilterButtonProps>>
}

export const FilterButtonGroup = ({
  children,
  classNameOverride,
  ...restProps
}: FilterButtonGroupProps): JSX.Element => {
  const childCount = React.Children.count(children)

  return (
    <div
      role="group"
      className={classnames(styles.filterButtonGroup, classNameOverride)}
      {...restProps}
    >
      {childCount === 1
        ? children
        : React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
              ...child.props,
              classNameOverride: classnames(
                styles.child,
                index === 0 && styles.firstChild,
                index === childCount - 1 && styles.lastChild,
                child.props.classNameOverride
              ),
            })
          )}
    </div>
  )
}

FilterButtonGroup.displayName = "FilterButtonGroup"
