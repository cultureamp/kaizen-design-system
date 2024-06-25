import React, { forwardRef, useContext } from "react"
import {
  MenuItem as RACMenuItem,
  MenuItemProps as RACMenuItemProps,
} from "react-aria-components"
import { ChevronRightIcon } from "~components/Icon"
import { mergeClassNames } from "~utils/mergeClassNames"
import { SubmenuTriggerContext } from "./SubmenuTrigger"
import styles from "./MenuItem.module.scss"

export type MenuItemProps = RACMenuItemProps

/**
 * A MenuItem represents an individual action in a Menu.
 */
export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  ({ className, ...props }, ref): JSX.Element => {
    const submenuTriggerContext = useContext(SubmenuTriggerContext)
    if (submenuTriggerContext !== null) {
      return (
        <RACMenuItem
          className={mergeClassNames(styles.item, className)}
          ref={ref}
          {...props}
        >
          {(...renderProps) => (
            <>
              <div className={styles.submenuTriggerInner}>
                {typeof props.children === "function"
                  ? props.children(...renderProps)
                  : props.children}
              </div>
              <ChevronRightIcon role="presentation" />
            </>
          )}
        </RACMenuItem>
      )
    }

    return (
      <RACMenuItem
        className={mergeClassNames(styles.item, className)}
        {...props}
      />
    )
  }
)
