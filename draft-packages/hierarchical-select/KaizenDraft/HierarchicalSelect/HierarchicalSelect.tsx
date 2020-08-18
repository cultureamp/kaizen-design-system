import React, { useState, useEffect, useRef } from "react"
import { Icon } from "@kaizen/component-library"
import {
  Hierarchy,
  HierarchyNode,
  MenuWidth,
  MenuDirection,
  HierarchicalMenu,
} from "@kaizen/draft-hierarchical-menu"

const chevronUp = require("@kaizen/component-library/icons/chevron-up.icon.svg")
  .default
const chevronDown = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default
const styles = require("./styles.module.scss")

export { MenuWidth, MenuDirection, Hierarchy, HierarchyNode }

export interface HierarchicalSelectProps {
  loadInitialHierarchy: () => Promise<Hierarchy>
  loadHierarchy: (node: HierarchyNode) => Promise<Hierarchy>
  onSelect: (currentHierarchy: Hierarchy, selectedNode: HierarchyNode) => void
  value: HierarchyNode | null
  width?: MenuWidth
  dir?: MenuDirection
  placeholder?: string
  focusLockDisabled?: boolean
}

export const HierarchicalSelect = (props: HierarchicalSelectProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [hierarchy, setHierarchy] = useState<Hierarchy | null>(null)
  const [navigatedFrom, setNavigatedFrom] = useState<HierarchyNode | null>(null)

  const {
    loadInitialHierarchy,
    loadHierarchy,
    onSelect,
    value,
    width = "default",
    dir = "ltr",
    placeholder = "",
    focusLockDisabled = false,
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
            hierarchy={hierarchy}
            onLoad={async () => {
              const data = await loadInitialHierarchy()
              setHierarchy(data)
            }}
            onNavigateToParent={async (currentHierarchy, toNode) => {
              const data = await loadHierarchy(toNode)
              setTimeout(() => {
                // this setTimeout is a hacky workaround to ensure that
                // `hierarchy` does not update before `handleDocumentClick` has
                // had a chance to execute
                setHierarchy(data)
                setNavigatedFrom(currentHierarchy.current)
              })
            }}
            onNavigateToChild={async (currentHierarchy, toNode) => {
              const data = await loadHierarchy(toNode)
              setTimeout(() => {
                // this setTimeout is a hacky workaround to ensure that
                // `hierarchy` does not update before `handleDocumentClick` has
                // had a chance to execute
                setHierarchy(data)
              })
            }}
            onSelect={(currentHierarchy, selectedNode) => {
              onSelect(currentHierarchy, selectedNode)
              setIsOpen(false)
            }}
            width={width}
            dir={dir}
            initialFocusIndex={hierarchy?.children.findIndex(
              c => c.value === navigatedFrom?.value
            )}
            focusLockDisabled={focusLockDisabled}
          />
        </div>
      )}
    </div>
  )
}
