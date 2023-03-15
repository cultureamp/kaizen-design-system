import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { Tooltip } from "@kaizen/draft-tooltip"
import { OverrideClassName } from "../../../types"
import { FilterButton, FilterButtonProps } from "../FilterButton"
import styles from "./FilterButtonGroup.module.scss"

const isFilterButton = (
  node: React.ReactNode
): node is React.ReactElement<FilterButtonProps> =>
  React.isValidElement(node) && node.type === FilterButton

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
        : React.Children.map(children, (child, index) => {
            if (child.type === Tooltip) {
              const button = child.props.children

              if (isFilterButton(button)) {
                return React.cloneElement(child, {
                  ...child.props,
                  children: React.cloneElement(button, {
                    classNameOverride: classnames(
                      styles.child,
                      index === 0 && styles.firstChild,
                      index === childCount - 1 && styles.lastChild,
                      child.props.classNameOverride
                    ),
                  }),
                })
              }

              return child
            }

            return React.cloneElement(child, {
              ...child.props,
              classNameOverride: classnames(
                styles.child,
                index === 0 && styles.firstChild,
                index === childCount - 1 && styles.lastChild,
                child.props.classNameOverride
              ),
            })
          })}
    </div>
  )
}

FilterButtonGroup.displayName = "FilterButtonGroup"
