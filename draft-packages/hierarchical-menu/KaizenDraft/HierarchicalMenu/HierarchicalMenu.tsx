import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import classNames from "classnames"
import { Icon, Text } from "@kaizen/component-library"
import { LoadingPlaceholder } from "@kaizen/draft-loading-placeholder"
import animationTokens from "@kaizen/design-tokens/tokens/animation.json"
import spacingTokens from "@kaizen/design-tokens/tokens/spacing.json"
import { KeyboardNavigableList } from "./KeyboardNavigableList"

const chevronLeft = require("@kaizen/component-library/icons/chevron-left.icon.svg")
  .default
const chevronRight = require("@kaizen/component-library/icons/chevron-right.icon.svg")
  .default
const styles = require("./styles.module.scss")

type MenuWidth = "default" | "contain"
type MenuDirection = "ltr" | "rtl"

export interface HierarchicalMenuProps {
  loadInitialHierarchy: () => Promise<Hierarchy>
  loadHierarchy: (node: HierarchyNode) => Promise<Hierarchy>
  onSelect: (node: HierarchyNode) => void
  width?: MenuWidth
  dir?: MenuDirection
}

export type HierarchyNode = {
  value: string
  label: string
  level: number
  numberOfChildren: number
}

export type Hierarchy = {
  parent: HierarchyNode | null
  current: HierarchyNode
  children: HierarchyNode[]
}

const animationTimeout = 5000
const optionHeight = spacingTokens.kz.spacing.xl

type NavigatingState = "toParent" | "toChild" | null

export const HierarchicalMenu = (props: HierarchicalMenuProps) => {
  const [hierarchy, setHierarchy] = useState<Hierarchy | null>(null)
  const [isNavigating, setIsNavigating] = useState<NavigatingState>(null)
  const [incomingNumberOfOptions, setIncomingNumberOfOptions] = useState(0)

  const {
    loadInitialHierarchy,
    loadHierarchy,
    onSelect,
    width = "default",
    dir = "ltr",
  } = props

  useEffect(() => {
    if (hierarchy || !loadInitialHierarchy) return
    const loadInitial = async () => {
      const newHierarchy = await loadInitialHierarchy()
      setHierarchy(newHierarchy)
    }
    loadInitial()
  }, [hierarchy, loadInitialHierarchy])

  if (!hierarchy) {
    return (
      <div
        className={classNames(styles.container, {
          [styles.defaultWidth]: width === "default",
        })}
      >
        <LoadingMenu
          transitionLevel={null}
          width={width}
          dir={dir}
          options={6}
          shouldAnimate={true}
        />
      </div>
    )
  }

  const onNavigate = async (
    node: HierarchyNode,
    navigatingState: NavigatingState
  ) => {
    setIsNavigating(navigatingState)
    setIncomingNumberOfOptions(
      navigatingState === "toParent"
        ? hierarchy.parent?.numberOfChildren || 0
        : node.numberOfChildren
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
      setIsNavigating(null)
    }, minimumTransitionTime - timeElapsed)
  }

  return (
    <div
      className={classNames(styles.container, {
        [styles.defaultWidth]: width === "default",
      })}
      style={{
        height: `${
          (hierarchy.children.length + 2) * // header height
          Number(optionHeight.replace("rem", ""))
        }rem`,
      }}
    >
      <CSSTransition
        in={isNavigating === "toParent"}
        timeout={animationTimeout}
        classNames="animating"
      >
        <LoadingMenu
          transitionLevel="parent"
          width={width}
          dir={dir}
          options={incomingNumberOfOptions}
          shouldAnimate={isNavigating === "toParent"}
        />
      </CSSTransition>
      <CSSTransition
        in={!isNavigating}
        timeout={animationTimeout}
        classNames="animating"
      >
        <Menu
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
          transitionLevel="child"
          width={width}
          dir={dir}
          options={incomingNumberOfOptions}
          shouldAnimate={isNavigating === "toChild"}
        />
      </CSSTransition>
    </div>
  )
}

interface MenuProps {
  hierarchy: Hierarchy
  width: MenuWidth
  dir: MenuDirection
  isNavigating: NavigatingState
  onSelect: (node: HierarchyNode) => void
  onNavigateToParent: (node: HierarchyNode) => void
  onNavigateToChild: (node: HierarchyNode) => void
}

const Menu = (props: MenuProps) => {
  const {
    hierarchy,
    width,
    dir,
    isNavigating,
    onSelect,
    onNavigateToParent,
    onNavigateToChild,
  } = props

  const onKeyboardForward = (index: number) => {
    const child = hierarchy.children[index]
    if (isNavigating || child.numberOfChildren === 0) {
      return false
    }
    onNavigateToChild(child)
  }

  const onKeyboardBack = () => {
    if (isNavigating || !hierarchy.parent) {
      return false
    }
    onNavigateToParent(hierarchy.parent)
  }

  const onKeyboardSelect = (index: number) => {
    onSelect(hierarchy.children[index])
  }

  return (
    <div
      className={classNames(styles.menu, styles.currentMenu, {
        [styles.defaultWidth]: width === "default",
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
        <KeyboardNavigableList
          dir={dir}
          items={hierarchy.children}
          onForward={({ index }) => onKeyboardForward(index)}
          onBack={() => onKeyboardBack()}
          onSelect={({ index }) => onKeyboardSelect(index)}
        >
          {({ index: keyboardIndex }) => (
            <>
              {hierarchy.children.map((c, index) => (
                <div
                  className={
                    keyboardIndex === index
                      ? styles.keyboardHighlightedChild
                      : styles.child
                  }
                  key={c.value}
                >
                  <button
                    className={styles.childLabelButton}
                    onClick={() => onSelect(c)}
                  >
                    <Text style="body" tag="p" inheritBaseline>
                      {c.label}
                    </Text>
                  </button>
                  {c.numberOfChildren > 0 && (
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
            </>
          )}
        </KeyboardNavigableList>
      </div>
    </div>
  )
}

interface LoadingMenuProps {
  transitionLevel: "parent" | "child" | null
  width: MenuWidth
  dir: MenuDirection
  options: number
  shouldAnimate: boolean
}

const LoadingMenu = (props: LoadingMenuProps) => {
  const { transitionLevel, width, dir, options, shouldAnimate } = props

  return (
    <div
      className={classNames(styles.loadingMenu, {
        [styles.shouldAnimate]: shouldAnimate,
        [styles.defaultWidth]: width === "default",
        [styles.parentMenu]: transitionLevel === "parent",
        [styles.childMenu]: transitionLevel === "child",
      })}
    >
      <div className={styles.header}>
        <div className={styles.parent}>
          <button className={styles.parentButton} disabled>
            <div className={styles.parentButtonIcon}>
              <Icon
                icon={dir === "ltr" ? chevronLeft : chevronRight}
                role="presentation"
                inheritSize
              />
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
        {Array(options)
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
