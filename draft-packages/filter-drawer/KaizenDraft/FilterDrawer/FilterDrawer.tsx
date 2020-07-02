import { Badge } from "@kaizen/draft-badge"
import * as KaizenButton from "@kaizen/draft-button"
import { MenuContent } from "@kaizen/draft-menu"
import { StatelessMenu } from "@kaizen/draft-menu/KaizenDraft/Menu/StatelessMenu"
import * as React from "react"
const filterIcon = require("@kaizen/component-library/icons/filter.icon.svg")
  .default
const styles = require("./styles.module.scss")

export interface FilterDrawerProps {
  labelText: string
  metadata: string[]
  children: React.ReactElement
  isDropdownVisible: boolean
  toggleDropdown: any // TODO any
  hideDropdown: any // TODO any
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
}: FilterDrawerProps) => {
  return (
    <div className={styles.filterDrawer}>
      <StatelessMenu
        renderButton={({ onClick, onMouseDown }) => (
          <FilterButton
            {...{ labelText, numFiltersEnabled, onClick, onMouseDown }}
          />
        )}
        isMenuVisible={isDropdownVisible}
        toggleMenuDropdown={toggleDropdown}
        hideMenuDropdown={hideDropdown}
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
  onClick: () => void
  onMouseDown: (e: any) => void
}

const FilterButton = ({
  labelText,
  numFiltersEnabled,
  onClick,
  onMouseDown,
}: FilterButtonProps) => (
  <div className={styles.buttonEdgeCaseStyling}>
    <KaizenButton.Button
      secondary={true}
      reversed={true}
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
    <Badge variant="active">{numFiltersEnabled}</Badge>
  ) : null
