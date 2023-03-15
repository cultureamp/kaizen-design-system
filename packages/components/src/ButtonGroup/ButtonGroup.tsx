import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { Tooltip } from "@kaizen/draft-tooltip"
import {
  FilterButton,
  FilterButtonProps,
} from "../Filter/components/_primitives/FilterButton"
import { OverrideClassName } from "../types"
import styles from "./ButtonGroup.module.scss"

const isFilterButton = (
  node: React.ReactNode
): node is React.ReactElement<FilterButtonProps> =>
  React.isValidElement(node) && node.type === FilterButton

export interface ButtonGroupProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children:
    | React.ReactElement<FilterButtonProps>
    | Array<React.ReactElement<FilterButtonProps>>
}

export const ButtonGroup = ({
  children,
  classNameOverride,
  ...restProps
}: ButtonGroupProps): JSX.Element => {
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

ButtonGroup.displayName = "ButtonGroup"
