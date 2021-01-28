import React, { useState, useEffect, useRef } from "react"
import { Icon } from "@kaizen/component-library"
import {
  Hierarchy,
  HierarchyNode,
  MenuWidth,
  MenuDirection,
  HierarchicalMenu,
} from "@kaizen/draft-hierarchical-menu"

import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import clear from "@kaizen/component-library/icons/clear.icon.svg"
import styles from "../styles/styles.module.scss"

export { MenuWidth, MenuDirection, Hierarchy, HierarchyNode }

export interface HierarchicalSelectProps {
  loadInitialHierarchy: () => Promise<Hierarchy>
  loadHierarchy: (node: HierarchyNode) => Promise<Hierarchy>
  onSelect: (currentHierarchy: Hierarchy, selectedNode: HierarchyNode) => void
  onClear: () => void
  value: HierarchyNode | null
  disabled?: boolean
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
    onClear,
    value,
    disabled = false,
    width = "default",
    dir = "ltr",
    placeholder = "",
    focusLockDisabled = false,
  } = props

  const hasOriginatedFromChildElement = (evt: KeyboardEvent | MouseEvent) => {
    if (!containerRef.current) return false
    if (!(evt.target instanceof Node)) return false
    return containerRef.current.contains(evt.target)
  }

  useEffect(() => {
    const handleClick = (evt: MouseEvent) => {
      if (!hasOriginatedFromChildElement(evt)) {
        setIsOpen(false)
      }
    }

    const handleKeys = (evt: KeyboardEvent) => {
      switch (evt.key) {
        case "Escape":
        case "Esc": // IE/Edge specific value
          setIsOpen(false)
          return
        case "Backspace":
        case "Delete":
          if (hasOriginatedFromChildElement(evt)) {
            evt.preventDefault()
            onClear()
            return
          }
        default:
          return
      }
    }

    document.addEventListener("click", handleClick)
    document.addEventListener("keydown", handleKeys)

    return () => {
      document.removeEventListener("click", handleClick)
      document.removeEventListener("keydown", handleKeys)
    }
  }, [])

  return (
    <div className={styles.container} ref={containerRef}>
      <button
        className={styles.button}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        title={value ? value.label : placeholder}
        disabled={disabled}
      >
        {value ? (
          <div className={styles.value}>{value.label}</div>
        ) : (
          <div className={styles.placeholder}>{placeholder}</div>
        )}
        <div className={styles.indicators}>
          {value && (
            <>
              <div
                className={styles.clear}
                // since we can't nest buttons in buttons, make this an aria
                // accessible button with onClick and role="button"
                role="button"
                aria-disabled={disabled}
                onClick={evt => {
                  if (disabled) return
                  onClear()
                  evt.stopPropagation()
                }}
              >
                <Icon icon={clear} role="img" title="Clear value" />
              </div>
              <div className={styles.separator} />
            </>
          )}
          <div className={styles.chevron}>
            <Icon icon={isOpen ? chevronUp : chevronDown} role="presentation" />
          </div>
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
