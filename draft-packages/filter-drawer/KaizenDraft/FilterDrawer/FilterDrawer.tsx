import * as KaizenButton from "@kaizen/draft-button"
import { Menu, MenuContent } from "@kaizen/draft-menu"
import * as React from "react"
const filterIcon = require("@kaizen/component-library/icons/filter.icon.svg")
  .default
const styles = require("./styles.module.scss")

export interface FilterDrawerProps {
  children: React.ReactElement
}

export const FilterDrawer = ({ children }: FilterDrawerProps) => {
  return (
    <div style={{ display: "inline-block" }}>
      <Menu button={Button}>
        <MenuContent>{children}</MenuContent>
      </Menu>
    </div>
  )
}

const Button = (
  <div className={styles.buttonEdgeCaseStyling}>
    <KaizenButton.Button
      secondary={true}
      reversed={true}
      label="TODO"
      icon={filterIcon}
      iconPosition="start"
    />
  </div>
)
