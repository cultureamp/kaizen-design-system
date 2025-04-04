import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import {
  FilterButtonBase,
  type FilterButtonBaseProps,
} from '~components/Filter/FilterButton/subcomponents/FilterButtonBase'
import { Tooltip, type TooltipProps } from '~components/Tooltip'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './ButtonGroup.module.css'

const isFilterButton = (node: React.ReactNode): node is React.ReactElement<FilterButtonBaseProps> =>
  React.isValidElement(node) && node.type === FilterButtonBase

export type ButtonGroupProps = {
  children:
    | React.ReactElement<FilterButtonBaseProps | TooltipProps>
    | React.ReactElement<FilterButtonBaseProps | TooltipProps>[]
} & Omit<OverrideClassName<HTMLAttributes<HTMLDivElement>>, 'children'>

export const ButtonGroup = ({
  children,
  classNameOverride,
  ...restProps
}: ButtonGroupProps): JSX.Element => {
  const childCount = React.Children.count(children)

  const containerProps = {
    role: 'group',
    className: classnames(styles.buttonGroup, classNameOverride),
    ...restProps,
  }

  if (childCount === 1) return <div {...containerProps}>{children}</div>

  return (
    <div {...containerProps}>
      {React.Children.map(children, (child, index) => {
        const buttonClassNames = classnames(
          styles.child,
          index === 0 && styles.firstChild,
          index === childCount - 1 && styles.lastChild,
          child.props.classNameOverride,
        )

        if (child.type === Tooltip) {
          const button = child.props.children

          if (isFilterButton(button)) {
            return React.cloneElement(child, {
              children: React.cloneElement(button, {
                classNameOverride: classnames(button.props.classNameOverride, buttonClassNames),
              }),
            })
          }

          return child
        }

        return React.cloneElement(child, {
          classNameOverride: buttonClassNames,
        })
      })}
    </div>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
