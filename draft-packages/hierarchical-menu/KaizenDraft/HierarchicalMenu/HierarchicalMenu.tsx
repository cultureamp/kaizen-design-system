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
type MenuDirection = "ltr" | "rtl"

export interface HierarchicalMenuProps {
  initialHierarchy: Hierarchy
  loadHierarchy: (node: HierarchyNode) => Promise<Hierarchy>
  onSelect: (node: HierarchyNode) => any
  width?: MenuWidth
  dir?: MenuDirection
}

export type HierarchyNode = {
  value: string
  label: string
  level: number
  numberOfChildren?: number
}

export type Hierarchy = {
  parent: HierarchyNode | null
  current: HierarchyNode
  children: HierarchyNode[]
}

const animationTimeout = 5000

type NavigatingState = "toParent" | "toChild" | false

export const HierarchicalMenu = (props: HierarchicalMenuProps) => {
  const [hierarchy, setHierarchy] = useState<Hierarchy | null>(null)
  const [isNavigating, setIsNavigating] = useState<NavigatingState>(false)
  const [incomingNumberOfChildren, setIncomingNumberOfChildren] = useState(0)

  const {
    initialHierarchy,
    loadHierarchy,
    onSelect,
    width = "default",
    dir = "ltr",
  } = props

  if (!hierarchy && initialHierarchy) {
    setHierarchy(initialHierarchy)
  }

  if (!hierarchy) {
    return <div className={styles.container}>Empty</div>
  }

  const onNavigate = async (
    node: HierarchyNode,
    navigatingState: NavigatingState
  ) => {
    setIsNavigating(navigatingState)
    setIncomingNumberOfChildren(
      node.numberOfChildren || hierarchy.current.numberOfChildren || 0
    )

    const requestSentAt = new Date().getTime()
    const newHierarchy = await loadHierarchy(node)
    const responseReceivedAt = new Date().getTime()
    const timeElapsed = responseReceivedAt - requestSentAt

    const minimumTransitionTime = Number(
      animationTokens.kz.animation.duration.rapid.replace("ms", "")
    )

    // allow the transition animation to play even if the new options are
    // immediately available
    setTimeout(() => {
      setHierarchy(newHierarchy)
      setIsNavigating(false)
    }, minimumTransitionTime - timeElapsed)
  }

  return (
    <div
      className={classNames(styles.container, {
        [styles.defaultWidth]: width === "default",
      })}
    >
      <CSSTransition
        in={isNavigating === "toParent"}
        timeout={animationTimeout}
        classNames="animating"
      >
        <LoadingMenu
          level="parent"
          width={width}
          numberOfChildren={incomingNumberOfChildren}
          shouldAnimate={isNavigating === "toParent"}
        />
      </CSSTransition>
      <CSSTransition
        in={!isNavigating}
        timeout={animationTimeout}
        classNames="animating"
      >
        <Menu
          level="current"
          hierarchy={hierarchy}
          width={width}
          dir={dir}
          isNavigating={isNavigating}
          onSelect={onSelect}
          onNavigateToParent={node => onNavigate(node, "toParent")}
          onNavigateToChild={node => onNavigate(node, "toChild")}
        />
      </CSSTransition>
      <CSSTransition
        in={isNavigating === "toChild"}
        timeout={animationTimeout}
        classNames="animating"
      >
        <LoadingMenu
          level="child"
          width={width}
          numberOfChildren={incomingNumberOfChildren}
          shouldAnimate={isNavigating === "toChild"}
        />
      </CSSTransition>
    </div>
  )
}

interface MenuProps {
  level: MenuLevel
  hierarchy: Hierarchy
  width: MenuWidth
  dir: MenuDirection
  isNavigating: NavigatingState
  onSelect: (node: HierarchyNode) => any
  onNavigateToParent: (node: HierarchyNode) => void
  onNavigateToChild: (node: HierarchyNode) => void
}

const Menu = (props: MenuProps) => {
  const {
    level,
    hierarchy,
    width,
    dir,
    isNavigating,
    onSelect,
    onNavigateToParent,
    onNavigateToChild,
  } = props

  return (
    <div
      className={classNames(styles.menu, {
        [styles.defaultWidth]: width === "default",
        [styles.parentMenu]: level === "parent",
        [styles.currentMenu]: level === "current",
        [styles.childMenu]: level === "child",
        [styles.toParent]: isNavigating === "toParent",
        [styles.toChild]: isNavigating === "toChild",
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
            onClick={() =>
              hierarchy.parent && onNavigateToParent(hierarchy.parent)
            }
          >
            <div className={styles.parentButtonIcon}>
              <Icon
                icon={dir === "ltr" ? chevronLeft : chevronRight}
                role="presentation"
                inheritSize
              />
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
            {c.numberOfChildren != null && c.numberOfChildren > 0 && (
              <button
                className={styles.childDrilldownButton}
                onClick={() => onNavigateToChild(c)}
              >
                <div className={styles.childDrilldownButtonIcon}>
                  <Icon
                    icon={dir === "ltr" ? chevronRight : chevronLeft}
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
  numberOfChildren: number
  shouldAnimate: boolean
}

const LoadingMenu = (props: LoadingMenuProps) => {
  const { level, width, numberOfChildren, shouldAnimate } = props

  return (
    <div
      className={classNames(styles.loadingMenu, {
        [styles.shouldAnimate]: shouldAnimate,
        [styles.defaultWidth]: width === "default",
        [styles.parentMenu]: level === "parent",
        [styles.currentMenu]: level === "current",
        [styles.childMenu]: level === "child",
      })}
    >
      <div className={styles.header}>
        <div className={styles.parent}>
          <button className={styles.parentButton} disabled>
            <div className={styles.parentButtonIcon}>
              <Icon icon={chevronLeft} role="presentation" inheritSize />
            </div>
            <LoadingPlaceholder inline width={60} animated={false} />
          </button>
        </div>
        <div className={styles.current}>
          <LoadingPlaceholder inline width={40} animated={false} />
          <LoadingPlaceholder inline width={20} animated={false} />
        </div>
      </div>
      <div className={styles.body}>
        {Array(numberOfChildren)
          .fill(0)
          .map((c, index) => (
            <div className={styles.child} key={index}>
              <button className={styles.childLabelButton} disabled>
                <LoadingPlaceholder
                  noBottomMargin
                  inheritBaseline
                  width={40}
                  animated={false}
                />
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}
