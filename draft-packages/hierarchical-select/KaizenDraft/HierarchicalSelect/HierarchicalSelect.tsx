import React, { useState, useEffect, useRef } from "react"
import { Icon } from "@kaizen/component-library"
import {
  HierarchyNode,
  HierarchicalMenuProps,
  HierarchicalMenu,
} from "@kaizen/draft-hierarchical-menu"

const chevronUp = require("@kaizen/component-library/icons/chevron-up.icon.svg")
  .default
const chevronDown = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default
const styles = require("./styles.module.scss")

export interface HierarchicalSelectProps extends HierarchicalMenuProps {
  placeholder?: string
  value: HierarchyNode | null
}

export const HierarchicalSelect = (props: HierarchicalSelectProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(true)

  const {
    loadInitialHierarchy,
    loadHierarchy,
    onSelect,
    width = "default",
    dir = "ltr",
    focusLockDisabled = false,
    placeholder,
    value,
  } = props

  useEffect(() => {
    const handleDocumentClick = (evt: MouseEvent) => {
      if (
        containerRef.current &&
        evt.target instanceof Node &&
        !containerRef.current.contains(evt.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleDocumentClick)

    return () => {
      document.removeEventListener("click", handleDocumentClick)
    }
  }, [])

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        className={styles.button}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value ? (
          <div className={styles.value}>{value.label}</div>
        ) : (
          <div className={styles.placeholder}>{placeholder}</div>
        )}
        <div className={styles.chevron}>
          <Icon icon={isOpen ? chevronUp : chevronDown} role="presentation" />
        </div>
      </button>
      {isOpen && (
        <div className={styles.menu}>
          <HierarchicalMenu
            loadInitialHierarchy={loadInitialHierarchy}
            loadHierarchy={loadHierarchy}
            onSelect={(currentHierarchy, selectedNode) => {
              onSelect(currentHierarchy, selectedNode)
              setIsOpen(false)
            }}
            width={width}
            dir={dir}
            focusLockDisabled={focusLockDisabled}
          />
        </div>
      )}
    </div>
  )
}
