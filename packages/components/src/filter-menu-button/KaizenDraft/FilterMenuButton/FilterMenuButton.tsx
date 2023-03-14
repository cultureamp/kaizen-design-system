import React from "react"
import { StatelessMenu } from "@kaizen/draft-menu/KaizenDraft/Menu/StatelessMenu"
import { FilterSplitButton } from "./FilterSplitButton"
import styles from "./FilterMenuButton.module.scss"

/**
 * @deprecated draft-packages FilterMenuButton is deprecated. Please use FilterMultiSelect from "@kaizen/select" instead.
 */
export interface FilterMenuButtonProps {
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

  /**
   * The filter menu button does not hold internal state, so you
   * must pass in the state of whether the dropdown is open
   * or not
   */
  isDropdownVisible: boolean

  /**
   * Determines when the menu should automatically hide.
   * @default: "on"
   */
  autoHide?: "on" | "outside-click-only" | "off"

  /**
   * A function that toggles the isDropdownVisible state
   */
  toggleDropdown: () => void

  /**
   * A function that sets the isDropdownVisible state to `false`
   */
  hideDropdown: () => void

  /**
   * A function for the clear button. You should only pass this function if you want to have a advanced filter behavior
   */
  onFilterClear?: (e: React.MouseEvent<any>) => void
}

export const FilterMenuButton = ({
  id,
  labelText,
  children,
  metadata,
  autoHide = "on",
  isDropdownVisible,
  toggleDropdown,
  hideDropdown,
  onFilterClear,
}: FilterMenuButtonProps): JSX.Element => {
  const dropdownId = `${id}-dropdown`
  return (
    <div id={id} className={styles.filterMenuButton}>
      <StatelessMenu
        renderButton={({ onClick, onMouseDown }): JSX.Element => (
          <FilterSplitButton
            {...{
              isDropdownVisible,
              onFilterClear,
              labelText,
              metadata,
              onClick,
              onMouseDown,
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
        autoHide={autoHide}
        onClick={(e): void => e.stopPropagation()}
      >
        {children}
      </StatelessMenu>
    </div>
  )
}
