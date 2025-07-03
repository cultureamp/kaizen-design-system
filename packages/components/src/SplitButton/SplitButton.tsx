import React, { type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { Menu } from '~components/Menu'
import { type DataAttributes } from '~components/types/DataAttributes'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { ActionButton, type ActionButtonProps } from './subcomponents/ActionButton'
import { DropdownButton, type DropdownButtonProps } from './subcomponents/DropdownButton'
import styles from './SplitButton.module.scss'

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
  dir?: 'ltr' | 'rtl'
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

/**
 * @deprecated This component will be removed in v2. Use a Button and Menu component instead.
 *
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081896196/Split+Button Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-splitbutton--docs Storybook}
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
  <div dir={dir} className={classnames(styles.splitButton, classNameOverride)} {...restProps}>
    <ActionButton disabled={disabled} isReversed={isReversed} {...actionButtonProps} />
    <Menu
      align={dir === 'rtl' ? 'left' : 'right'}
      dropdownWidth="contain"
      button={
        <DropdownButton disabled={disabled} isReversed={isReversed} {...dropdownButtonProps} />
      }
      menuVisible={isDropdownInitOpen}
    >
      {dropdownContent}
    </Menu>
  </div>
)

SplitButton.displayName = 'SplitButton'
