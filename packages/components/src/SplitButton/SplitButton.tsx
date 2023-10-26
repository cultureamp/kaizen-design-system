import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { Menu } from "@kaizen/draft-menu"
import { DataAttributes } from "~types/DataAttributes"
import { OverrideClassName } from "~types/OverrideClassName"
import { ActionButton, ActionButtonProps } from "./subcomponents/ActionButton"
import {
  DropdownButton,
  DropdownButtonProps,
} from "./subcomponents/DropdownButton"
import styles from "./SplitButton.module.scss"

export type SplitButtonProps = {
  /**
   * Props for primary action button (left).
   * Allows all native button/anchor attributes.
   */
  actionButtonProps: ActionButtonProps & DataAttributes
  /**
   * Props for dropdown menu button (right).
   * Allows all native button/anchor attributes.
   */
  dropdownButtonProps?: DropdownButtonProps & DataAttributes
  /**
   * Suggested components - MenuList > MenuItem
   */
  dropdownContent: React.ReactNode
  /**
   * Sets the dropdown menu to be open on initial render.
   */
  isDropdownInitOpen?: boolean
  /**
   * Disables both the primary action button and dropdown button.
   */
  disabled?: boolean
  /**
   * Use the `reversed` styles.
   */
  isReversed?: boolean
  /**
   * Text direction.
   */
  dir?: "ltr" | "rtl"
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * {@link https://cultureamp.design/components/split-button/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-split-button--default-kaizen-site-demo Storybook}
 */
export const SplitButton = ({
  actionButtonProps,
  dropdownButtonProps,
  dropdownContent,
  isDropdownInitOpen,
  disabled,
  isReversed,
  dir,
  classNameOverride,
  ...restProps
}: SplitButtonProps): JSX.Element => (
  <div
    dir={dir}
    className={classnames(styles.splitButton, classNameOverride)}
    {...restProps}
  >
    <ActionButton
      disabled={disabled}
      isReversed={isReversed}
      {...actionButtonProps}
    />
    <Menu
      align={dir === "rtl" ? "left" : "right"}
      dropdownWidth="contain"
      button={
        <DropdownButton
          disabled={disabled}
          isReversed={isReversed}
          {...dropdownButtonProps}
        />
      }
      menuVisible={isDropdownInitOpen}
    >
      {dropdownContent}
    </Menu>
  </div>
)

SplitButton.displayName = "SplitButton"
