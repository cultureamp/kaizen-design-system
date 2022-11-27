import React, { HTMLAttributes } from "react"
import classnames from "classnames"
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
}) => {
  const childCount = React.Children.count(children)

  return (
  <div
    className={classnames(styles.filterButtonGroup, classNameOverride)}
    {...restProps}
  >
    {
      childCount === 1 ? (
        children
      ) : (
        React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                ...child.props,
                classNameOverride: classnames(
                  // styles.test,
                  styles.child,
                  index === 0 && styles.firstChild,
                  index === childCount - 1 && styles.lastChild,
                  child.props.classNameOverride
                ),
              })
          }
          return child
        })
    )
    }
    {/* {children} */}
  </div>
)
}

FilterButtonGroup.displayName = "FilterButtonGroup"
