import React from 'react'
import classNames from 'classnames'
import { useOption } from 'react-aria'
import { Icon } from '~components/Icon'
import { Radio } from '~components/Radio'
import { useSingleSelectContext } from '../../context'
import { type ListItemProps, type SelectItem } from '../../types'
import styles from './ListItem.module.css'

export const ListItem = <T extends SelectItem>({ item, state }: ListItemProps<T>): JSX.Element => {
  const { selectedIcon, selectedPosition } = useSingleSelectContext()
  const ref = React.useRef(null)
  const { optionProps, isSelected, isDisabled } = useOption({ key: item.key }, state, ref)

  const isStart = selectedPosition === 'start'
  const isEnd = selectedPosition === 'end'
  const isCheck = selectedIcon === 'check'
  const isRadio = selectedIcon === 'radio'

  const renderSelectionIcon = (): JSX.Element | null => {
    if (isCheck) {
      if (isSelected) {
        return (
          <div className={styles.selectedIconWrapper}>
            <Icon name="check" isPresentational className={styles.iconChecked} />
          </div>
        )
      }

      return isStart ? <div className={styles.emptySpacer} /> : null
    }

    if (isRadio) {
      return (
        <div className={styles.selectedIconWrapper}>
          <Radio name="test" id="test" selectedStatus={isSelected} />
        </div>
      )
    }

    return null
  }

  return (
    <li
      key={item.key}
      {...optionProps}
      ref={ref}
      className={classNames(styles.listItem, {
        [styles.disabled]: isDisabled,
        [styles.selected]: isSelected,
        [styles.selectedStartPosition]: isStart,
      })}
    >
      {isStart && renderSelectionIcon()}
      <span className={styles.itemText}>{item.rendered}</span>
      {isEnd && renderSelectionIcon()}
    </li>
  )
}
