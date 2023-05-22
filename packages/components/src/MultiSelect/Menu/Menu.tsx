/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useRef } from "react"
import type { AriaMenuProps } from "@react-types/menu"
import type { Node } from "@react-types/shared"
import classNames from "classnames"
import {
  mergeProps,
  useFocusRing,
  useMenu,
  useMenuItem,
  useMenuSection,
  useSeparator,
} from "react-aria"
import { TreeState, useTreeState } from "react-stately"
import { Checkbox } from "@kaizen/draft-form"
import menuStyles from "./Menu.module.scss"
import styles from "./MenuItem.module.scss"

interface MenuProps<T extends object> extends AriaMenuProps<T> {
  onClose: () => void
}

export function Menu<T extends object>(props: MenuProps<T>): JSX.Element {
  // Create state based on the incoming props
  const state = useTreeState(props)

  // Get props for the menu element
  const ref = useRef(null)
  const { menuProps } = useMenu(props, state, ref)
  const itemProps = {
    onAction: props.onAction,
    onClose: props.onClose,
  }

  return (
    <ul {...menuProps} ref={ref} className={menuStyles.menu}>
      {[...state.collection].map(item =>
        item.type === "section" ? (
          <MenuSection
            key={item.key}
            section={item}
            state={state}
            {...itemProps}
          />
        ) : (
          <MenuItem key={item.key} item={item} state={state} {...itemProps} />
        )
      )}
    </ul>
  )
}

interface MenuSectionProps<T> {
  section: Node<T>
  state: TreeState<T>
  onAction?: (key: React.Key) => void
  onClose?: () => void
}

function MenuSection<T>({
  section,
  state,
  onAction,
  onClose,
}: MenuSectionProps<T>): JSX.Element {
  const { itemProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  })

  const { separatorProps } = useSeparator({
    elementType: "li",
  })

  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <li {...separatorProps} />
      )}
      <li {...itemProps}>
        <ul {...groupProps}>
          {[...section.childNodes].map(node => (
            <MenuItem
              key={node.key}
              item={node}
              state={state}
              onAction={onAction}
              onClose={onClose}
            />
          ))}
        </ul>
      </li>
    </>
  )
}

interface MenuItemProps<T> {
  item: Node<T>
  state: TreeState<T>
  onAction?: (key: React.Key) => void
  onClose?: () => void
}

function MenuItem<T>({
  item,
  state,
  onAction,
  onClose,
  ...props
}: MenuItemProps<T>): JSX.Element {
  // Get props for the menu item element
  const ref = React.useRef(null)
  const { menuItemProps, isSelected, isDisabled } = useMenuItem(
    {
      key: item.key,
      onAction,
      onClose,
    },
    state,
    ref
  )

  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <li
      {...mergeProps(menuItemProps, focusProps, props)}
      className={classNames(
        styles.option,
        isSelected && styles.isSelected,
        isFocusVisible && styles.isFocusVisible,
        isDisabled && styles.disabled
      )}
      ref={ref}
    >
      <Checkbox
        name="hello"
        id={item.textValue}
        onCheck={() => onAction}
        checkedStatus={isSelected ? "on" : "off"}
      />
      {item.rendered}
    </li>
  )
}
