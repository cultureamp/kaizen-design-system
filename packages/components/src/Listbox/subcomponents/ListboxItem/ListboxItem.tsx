import React from "react"
import {
  ListBoxItem as RACListBoxItem,
  ListBoxItemProps as RACListBoxItemProps,
} from "react-aria-components"
import styles from "./ListboxItem.module.css"

export type ListboxItemProps = RACListBoxItemProps

export const ListboxItem = (props: ListboxItemProps) => (
  <RACListBoxItem className={styles.listboxItem} {...props} />
)
