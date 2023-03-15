import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { Tooltip } from "@kaizen/draft-tooltip"
import {
  FilterButtonBase,
  FilterButtonBaseProps,
} from "../Filter/FilterButton/components/FilterButtonBase"
import { OverrideClassName } from "../types"
import styles from "./ButtonGroup.module.scss"

const isFilterButton = (
  node: React.ReactNode
): node is React.ReactElement<FilterButtonBaseProps> =>
  React.isValidElement(node) && node.type === FilterButtonBase

export interface ButtonGroupProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children:
    | React.ReactElement<FilterButtonBaseProps>
    | Array<React.ReactElement<FilterButtonBaseProps>>
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
