import React, { type HTMLAttributes } from 'react'
import { type FocusableElement } from '@react-types/shared'
import classnames from 'classnames'
import { mergeProps, useFocusRing, useOption } from 'react-aria'
import { Icon } from '~components/__rc__/Icon'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { useSelectContext } from '../../context'
import { type SelectOption, type SelectOptionNode } from '../../types'
import styles from './Option.module.scss'

export type OptionProps<Option extends SelectOption = SelectOption> = {
  item: SelectOptionNode<Option>
} & OverrideClassName<Omit<HTMLAttributes<HTMLLIElement>, 'children'>>

export const Option = <Option extends SelectOption = SelectOption>({
  item,
  classNameOverride,
  ...props
}: OptionProps<Option>): JSX.Element => {
  const { state } = useSelectContext<Option>()
  const ref = React.useRef<HTMLLIElement>(null)
  const { optionProps, isSelected, isDisabled } = useOption({ key: item.key }, state, ref)

  const { onPointerUp, ...restOptionProps } = optionProps

  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <li
      {...mergeProps(restOptionProps, focusProps, props, {
        onPointerUp: (e: React.PointerEvent<FocusableElement>) => {
          if (e.pointerType === 'touch') {
            // On touch devices, the listbox closes too quickly so below elements will trigger their pointer events.
            // Slow it down a bit to prevent the appearance of propagation.
            setTimeout(() => state.setSelectedKey(item.key), 250)
          } else {
            onPointerUp?.(e)
          }
        },
      })}
      ref={ref}
      className={classnames(
        styles.option,
        isSelected && styles.isSelected,
        isFocusVisible && styles.isFocusVisible,
        isDisabled && styles.disabled,
        classNameOverride,
      )}
      aria-label={item.textValue}
    >
      {item.rendered}
      <span className={classnames(styles.icon, isSelected && styles.isSelected)}>
        {isSelected && <Icon name="check" isPresentational />}
      </span>
    </li>
  )
}

Option.displayName = 'Option'
