import { MenuContent } from "@kaizen/draft-menu"
import { StatelessMenu } from "@kaizen/draft-menu/KaizenDraft/Menu/StatelessMenu"
import classnames from "classnames"
import * as React from "react"
import filterIcon from "@kaizen/component-library/icons/filter.icon.svg"

import styles from "./styles.module.scss"
import { FilterDrawerButton } from "./FilterDrawerButton"

export interface FilterDrawerProps {
  /* The html id attribute of the container element. This is also used
   * to generate ids for sub elements such as the dropdown box (for
   * accessibilty purposes)*/
  id: string

  /**
   * The text that goes inside the filter button
   */
  labelText: string

  /**
   * Metadata shows relevant info about the content being filtered
   */
  metadata?: React.ReactNode

  /**
   * The content that appears in the filter dropdown.
   */
  children: React.ReactElement
  reversed?: boolean

  /**
   * The filter drawer does not hold internall state, so you
   * must pass in the state of whether the dropdown is open
   * or not
   */
  isDropdownVisible: boolean

  /**
   * You must provide a function that toggles the isDropdownVisible state
   */
  toggleDropdown: () => void

  /**
   * You must provide a function that sets the isDropdownVisible state to `false`
   */
  hideDropdown: () => void

  /**
   * If at least one filter is enabled, then a filter badge will show.
   * The filter button badge shows the number of filter fields with applied filters.
   */
  numberOfFiltersEnabled?: number
}

export const FilterDrawer = ({
  id,
  labelText,
  children,
  metadata,
  isDropdownVisible,
  toggleDropdown,
  hideDropdown,
  numberOfFiltersEnabled = 0,
  reversed = false,
}: FilterDrawerProps) => {
  const dropdownId = `${id}-dropdown`
  return (
    <div
      id={id}
      className={classnames(styles.filterDrawer, {
        [styles.reversed]: reversed,
      })}
    >
      <StatelessMenu
        renderButton={({ onClick, onMouseDown }) => (
          <FilterDrawerButton
            {...{
              labelText,
              numberOfFiltersEnabled,
              onClick,
              onMouseDown,
              reversed,
              ariaExpanded: isDropdownVisible,
              ariaControls: dropdownId,
            }}
          />
        )}
        isMenuVisible={isDropdownVisible}
        toggleMenuDropdown={toggleDropdown}
        hideMenuDropdown={hideDropdown}
        dropdownWidth="contain"
        dropdownId={dropdownId}
      >
        <MenuContent>
          <div className={styles.content} onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </MenuContent>
      </StatelessMenu>
      <div className={styles.metadata}>{metadata}</div>
    </div>
  )
}
