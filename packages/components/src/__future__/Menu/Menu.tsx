import React, { HTMLAttributes } from "react"
import { Menu as HeadlessMenu } from "@headlessui/react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Menu.module.scss"

export type MenuProps = {
  isOpen?: boolean
  items: Array<{
    id: string
    label: string
    href?: string
    onClick?: () => void
    disabled?: boolean
    render?: () => void
  }>
  triggerButton: React.ElementType
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const Menu = (props: MenuProps): JSX.Element => {
  const { triggerButton, items, classNameOverride, ...restProps } = props

  return (
    <div className={classnames(styles.menu, classNameOverride)} {...restProps}>
      <HeadlessMenu>
        <HeadlessMenu.Button as={triggerButton} />
        <HeadlessMenu.Items className={styles.popover}>
          {items.map(item => (
            <HeadlessMenu.Item key={item.id}>
              {({ active }) => (
                <a
                  href="#asdasd"
                  className={classnames(styles.item, {
                    [styles.active]: active,
                    [styles.disabled]: item.disabled,
                  })}
                >
                  {item.label}
                </a>
              )}
            </HeadlessMenu.Item>
          ))}
        </HeadlessMenu.Items>
      </HeadlessMenu>
    </div>
  )
}

Menu.displayName = "Menu"
