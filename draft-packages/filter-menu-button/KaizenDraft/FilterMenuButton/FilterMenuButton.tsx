import { StatelessMenu } from "@kaizen/draft-menu/KaizenDraft/Menu/StatelessMenu"
import * as React from "react"
import styles from "./styles.module.scss"
import { FilterSplitButton } from "./FilterSplitButton"

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
  isDropdownVisible,
  toggleDropdown,
  hideDropdown,
  onFilterClear,
}: FilterMenuButtonProps) => {
  const dropdownId = `${id}-dropdown`
  return (
    <div id={id} className={styles.filterMenuButton}>
      <StatelessMenu
        renderButton={({ onClick, onMouseDown }) => (
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
        onClick={e => e.stopPropagation()}
        tag="div"
      >
        {children}
      </StatelessMenu>
    </div>
  )
}
