import React, { useState, useEffect } from "react"
const styles = require("./styles.module.scss")

export interface HierarchicalMenuProps {
  initialHierarchy: Hierarchy
  loadHierarchy: (node: HierarchyNode) => Hierarchy
}

export type HierarchyNode = {
  value: string
  label: string
  level: number
  hasChildren?: boolean
}

export type Hierarchy = {
  parent: HierarchyNode | null
  current: HierarchyNode
  children: HierarchyNode[]
}

export const HierarchicalMenu = (props: HierarchicalMenuProps) => {
  const [hierarchy, setHierarchy] = useState<Hierarchy | null>(null)

  const { initialHierarchy, loadHierarchy } = props

  if (!hierarchy && initialHierarchy) {
    setHierarchy(initialHierarchy)
  }

  if (!hierarchy) {
    return <div className={styles.container}>Empty</div>
  }

  const onClick = (node: HierarchyNode) => {
    const newHierarchy = loadHierarchy(node)
    setHierarchy(newHierarchy)
  }

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.header}>
          <div className={styles.parent}>
            Parent: {hierarchy.parent?.label}
            {hierarchy.parent && (
              <button
                onClick={() => hierarchy.parent && onClick(hierarchy.parent)}
              >
                &lsaquo;
              </button>
            )}
          </div>
          <div className={styles.current}>
            Current: {hierarchy.current.label}
          </div>
        </div>
        <div className={styles.body}>
          {hierarchy.children.map(c => (
            <div className={styles.children} key={c.value}>
              Child: {c.label}
              {c.hasChildren && (
                <button onClick={() => onClick(c)}>&rsaquo;</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
