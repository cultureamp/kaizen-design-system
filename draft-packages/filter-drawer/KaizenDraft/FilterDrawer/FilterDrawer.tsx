import * as KaizenButton from "@kaizen/draft-button"
import { Menu } from "@kaizen/draft-menu"
import * as React from "react"
const filterIcon = require("@kaizen/component-library/icons/filter.icon.svg")
  .default
const styles = require("./styles.module.scss")

export interface FilterDrawerProps {
  /**
   * Remember to annotate your props! The typehints make developers happy
   * @default ""
   */
  example?: string
}

export const FilterDrawer = ({ example = "" }: FilterDrawerProps) => {
  return (
    <Menu button={Button}>
      <div>hello</div>
    </Menu>
  )
}

const Button = (
  <div className={styles.buttonEdgeCaseStyling}>
    <KaizenButton.Button
      secondary={true}
      reversed={true}
      label="hello"
      icon={filterIcon}
      iconPosition="start"
    />
  </div>
)
