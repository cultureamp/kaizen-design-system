import React, { useState, useEffect } from "react"
import { Icon, Text } from "@kaizen/component-library"
import classNames from "classnames"

const chevronLeft = require("@kaizen/component-library/icons/chevron-left.icon.svg")
  .default
const chevronRight = require("@kaizen/component-library/icons/chevron-right.icon.svg")
  .default
const styles = require("./styles.module.scss")

export interface HierarchicalMenuProps {
  initialHierarchy: Hierarchy
  loadHierarchy: (node: HierarchyNode) => Hierarchy
  menuWidth?: "default" | "contain"
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

  const { initialHierarchy, loadHierarchy, menuWidth = "default" } = props

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
    <div
      className={classNames(styles.container, {
        [styles.defaultWidth]: menuWidth === "default",
      })}
    >
      <div className={styles.menu}>
        <div className={styles.header}>
          <div className={styles.parent}>
            <button
              className={
                hierarchy.parent
                  ? styles.parentButton
                  : styles.disabledParentButton
              }
              disabled={!hierarchy.parent}
              onClick={() => hierarchy.parent && onClick(hierarchy.parent)}
            >
              <div className={styles.parentButtonIcon}>
                <Icon icon={chevronLeft} role="presentation" inheritSize />
              </div>
              <Text style="small" tag="p" inheritBaseline>
                {hierarchy.parent?.label}
              </Text>
            </button>
          </div>
          <div className={styles.current}>
            <Text style="body-bold" tag="p" inheritBaseline>
              {hierarchy.current.label}
            </Text>
            <Text style="small" tag="p" inheritBaseline>
              Level {hierarchy.current.level}
            </Text>
          </div>
        </div>
        <div className={styles.body}>
          {hierarchy.children.map(c => (
            <div className={styles.child} key={c.value}>
              <button className={styles.childLabelButton}>
                <Text style="body" tag="p" inheritBaseline>
                  {c.label}
                </Text>
              </button>
              {c.hasChildren && (
                <button
                  className={styles.childDrilldownButton}
                  onClick={() => onClick(c)}
                >
                  <div className={styles.childDrilldownButtonIcon}>
                    <Icon
                      icon={chevronRight}
                      role="img"
                      title={`Drill down on ${c.label}`}
                      inheritSize
                    />
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
