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

const hasClassNameOverride = (elem: React.ReactElement): boolean =>
  'classNameOverride' in elem.props

const getClassName = (props: any): string | undefined => {
  return props.classNameOverride ?? props.className
}

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
          getClassName(child.props),
        )

        if (child.type === Tooltip) {
          const button = child.props.children

          if (React.isValidElement(button) && isFilterButton(button)) {
            const buttonProps = hasClassNameOverride(button)
              ? { classNameOverride: classnames(getClassName(button.props), buttonClassNames) }
              : { className: classnames(getClassName(button.props), buttonClassNames) }

            return React.cloneElement(child, {
              children: React.cloneElement(button, buttonProps),
            })
          }

          return child
        }

        const classNameProps = hasClassNameOverride(child)
          ? { classNameOverride: buttonClassNames }
          : { className: buttonClassNames }

        return React.cloneElement(child, classNameProps)
      })}
    </div>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
