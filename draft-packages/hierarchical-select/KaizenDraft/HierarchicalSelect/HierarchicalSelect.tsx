import React, { useState } from "react"
import { Icon } from "@kaizen/component-library"
import {
  HierarchicalMenuProps,
  HierarchicalMenu,
} from "@kaizen/draft-hierarchical-menu"

const chevronUp = require("@kaizen/component-library/icons/chevron-up.icon.svg")
  .default
const chevronDown = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default
const styles = require("./styles.module.scss")

export type HierarchicalSelectProps = HierarchicalMenuProps

export const HierarchicalSelect = (props: HierarchicalSelectProps) => {
  const [isOpen, setIsOpen] = useState(true)

  const {
    loadInitialHierarchy,
    loadHierarchy,
    onSelect,
    width = "default",
    dir = "ltr",
    focusLockDisabled = false,
  } = props

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.placeholder}>hello</div>
        <div className={styles.chevron}>
          <Icon icon={isOpen ? chevronUp : chevronDown} role="presentation" />
        </div>
      </button>
      {isOpen && (
        <div className={styles.menu}>
          <HierarchicalMenu
            loadInitialHierarchy={loadInitialHierarchy}
            loadHierarchy={loadHierarchy}
            onSelect={onSelect}
            width={width}
            dir={dir}
            focusLockDisabled={focusLockDisabled}
          />
        </div>
      )}
    </div>
  )
}
