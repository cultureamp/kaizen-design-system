import { Badge } from "@kaizen/draft-badge"
import * as KaizenButton from "@kaizen/draft-button"
import { MenuContent } from "@kaizen/draft-menu"
import { StatelessMenu } from "@kaizen/draft-menu/KaizenDraft/Menu/StatelessMenu"
import classnames from "classnames"
import * as React from "react"
const filterIcon = require("@kaizen/component-library/icons/filter.icon.svg")
  .default
const styles = require("./styles.module.scss")

export interface FilterDrawerProps {
  /**
   * The text that goes inside the filter button
   */
  labelText: string

  /**
   * Metadata shows relevant info about the content being filtered, in plain text.
   * Text items are separated by a `・` character
   */
  metadata: string[]

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
  numFiltersEnabled?: number
}

export const FilterDrawer = ({
  labelText,
  children,
  metadata,
  isDropdownVisible,
  toggleDropdown,
  hideDropdown,
  numFiltersEnabled = 0,
  reversed = false,
}: FilterDrawerProps) => {
  return (
    <div
      className={classnames(styles.filterDrawer, {
        [styles.reversed]: reversed,
      })}
    >
      <StatelessMenu
        renderButton={({ onClick, onMouseDown }) => (
          <FilterButton
            {...{
              labelText,
              numFiltersEnabled,
              onClick,
              onMouseDown,
              reversed,
            }}
          />
        )}
        isMenuVisible={isDropdownVisible}
        toggleMenuDropdown={toggleDropdown}
        hideMenuDropdown={hideDropdown}
        dropdownWidth="contain"
      >
        <MenuContent>
          <div className={styles.content} onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </MenuContent>
      </StatelessMenu>
      <Metadata items={metadata} />
    </div>
  )
}

type FilterButtonProps = {
  labelText: string
  numFiltersEnabled: number
  onClick: (e: any) => void
  onMouseDown: (e: any) => void
  reversed?: boolean
}

const FilterButton = ({
  labelText,
  numFiltersEnabled,
  onClick,
  onMouseDown,
  reversed,
}: FilterButtonProps) => (
  <div className={styles.buttonEdgeCaseStyling}>
    <KaizenButton.Button
      secondary={true}
      reversed={reversed}
      label={labelText}
      icon={filterIcon}
      iconPosition="start"
      additionalContent={renderBadge(numFiltersEnabled)}
      onClick={onClick}
      onMouseDown={onMouseDown}
    />
  </div>
)

const Metadata = ({ items }: { items: string[] }) => (
  <div className={styles.metadata}>{items.join("・")}</div>
)

const renderBadge = (numFiltersEnabled: number) =>
  numFiltersEnabled > 0 ? (
    <Badge variant="active">{String(numFiltersEnabled)}</Badge>
  ) : null
