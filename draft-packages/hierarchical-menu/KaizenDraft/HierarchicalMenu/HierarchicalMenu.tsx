import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import classNames from "classnames"
import { Icon, Text } from "@kaizen/component-library"
import { LoadingPlaceholder } from "@kaizen/draft-loading-placeholder"
import animationTokens from "@kaizen/design-tokens/tokens/animation.json"

const chevronLeft = require("@kaizen/component-library/icons/chevron-left.icon.svg")
  .default
const chevronRight = require("@kaizen/component-library/icons/chevron-right.icon.svg")
  .default
const styles = require("./styles.module.scss")

type MenuLevel = "parent" | "current" | "child"
type MenuWidth = "default" | "contain"

export interface HierarchicalMenuProps {
  initialHierarchy: Hierarchy
  loadHierarchy: (node: HierarchyNode) => Promise<Hierarchy>
  onSelect: (node: HierarchyNode) => any
  width?: MenuWidth
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

const animationTimeout = Number(
  animationTokens.kz.animation.duration.rapid.replace("ms", "")
)

export const HierarchicalMenu = (props: HierarchicalMenuProps) => {
  const [currentHierarchy, setCurrentHierarchy] = useState<Hierarchy | null>(
    null
  )
  // const [nextHierarchy, setNextHierarchy] = useState<Hierarchy | null>(null)
  const [isNavigating, setIsNavigating] = useState<
    "toParent" | "toChild" | false
  >(false)

  const { initialHierarchy, loadHierarchy, onSelect, width = "default" } = props

  if (!currentHierarchy && initialHierarchy) {
    setCurrentHierarchy(initialHierarchy)
  }

  if (!currentHierarchy) {
    return <div className={styles.container}>Empty</div>
  }

  const onNavigate = async (node: HierarchyNode) => {
    setIsNavigating("toChild")
    const newHierarchy = await loadHierarchy(node)
    setCurrentHierarchy(newHierarchy)
    // setNextHierarchy(loadHierarchy(node))
  }

  return (
    <div
      className={classNames(styles.container, {
        [styles.defaultWidth]: width === "default",
      })}
    >
      <CSSTransition
        in={!isNavigating}
        timeout={animationTimeout}
        classNames="animating"
      >
        <Menu
          level="current"
          hierarchy={currentHierarchy}
          width={width}
          onSelect={onSelect}
          onNavigate={onNavigate}
        />
      </CSSTransition>
      <CSSTransition
        in={isNavigating === "toChild"}
        timeout={animationTimeout}
        classNames="animating"
        onEntered={() => {
          console.log("navigated to child")
          setIsNavigating(false)
        }}
      >
        <LoadingMenu level="child" width={width} />
      </CSSTransition>
    </div>
  )
}

interface MenuProps {
  level: MenuLevel
  hierarchy: Hierarchy
  width: MenuWidth
  onSelect: (node: HierarchyNode) => any
  onNavigate: (node: HierarchyNode) => void
}

const Menu = (props: MenuProps) => {
  const { level, hierarchy, width, onSelect, onNavigate } = props

  return (
    <div
      className={classNames(styles.menu, {
        [styles.defaultWidth]: width === "default",
        [styles.parentMenu]: level === "parent",
        [styles.currentMenu]: level === "current",
        [styles.childMenu]: level === "child",
      })}
    >
      <div className={styles.header}>
        <div className={styles.parent}>
          <button
            className={
              hierarchy.parent
                ? styles.parentButton
                : styles.disabledParentButton
            }
            disabled={!hierarchy.parent}
            onClick={() => hierarchy.parent && onNavigate(hierarchy.parent)}
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
            <button
              className={styles.childLabelButton}
              onClick={() => onSelect(c)}
            >
              <Text style="body" tag="p" inheritBaseline>
                {c.label}
              </Text>
            </button>
            {c.hasChildren && (
              <button
                className={styles.childDrilldownButton}
                onClick={() => onNavigate(c)}
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
  )
}

interface LoadingMenuProps {
  level: MenuLevel
  width: MenuWidth
}

const LoadingMenu = (props: LoadingMenuProps) => {
  const { level, width } = props

  return (
    <div
      className={classNames(styles.menu, {
        [styles.defaultWidth]: width === "default",
        [styles.parentMenu]: level === "parent",
        [styles.currentMenu]: level === "current",
        [styles.childMenu]: level === "child",
      })}
    >
      <div className={styles.header}>
        <div className={styles.parent}>
          <button className={styles.disabledParentButton} disabled>
            <div className={styles.parentButtonIcon}>
              <Icon icon={chevronLeft} role="presentation" inheritSize />
            </div>
            <LoadingPlaceholder inline width={60} />
          </button>
        </div>
        <div className={styles.current}>
          <LoadingPlaceholder inline width={40} />
          <LoadingPlaceholder inline width={20} />
        </div>
      </div>
      <div className={styles.body}>
        {[50, 40, 50, 40, 50, 40].map((c, index) => (
          <div className={styles.child} key={index}>
            <button className={styles.childLabelButton} disabled>
              <LoadingPlaceholder noBottomMargin inheritBaseline width={c} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
