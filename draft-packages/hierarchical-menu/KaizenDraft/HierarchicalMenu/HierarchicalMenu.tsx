import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import FocusLock from "react-focus-lock"
import classNames from "classnames"
import { Icon, Text } from "@kaizen/component-library"
import { LoadingPlaceholder } from "@kaizen/draft-loading-placeholder"
import borderTokens from "@kaizen/design-tokens/tokens/border.json"
import spacingTokens from "@kaizen/design-tokens/tokens/spacing.json"

import chevronLeft from "@kaizen/component-library/icons/chevron-left.icon.svg"
import chevronRight from "@kaizen/component-library/icons/chevron-right.icon.svg"
import { useTheme } from "../../../../packages/design-tokens"
import { KeyboardNavigableList } from "./KeyboardNavigableList"
import styles from "./styles.module.scss"

export type MenuWidth = "default" | "contain"
export type MenuDirection = "ltr" | "rtl"

export type HierarchyNode = {
  value: string
  label: string
  level: number
  numberOfChildren: number | null
}

export type Hierarchy = {
  parent: HierarchyNode | null
  current: HierarchyNode
  children: HierarchyNode[]
}

export interface HierarchicalMenuProps {
  hierarchy: Hierarchy | null
  onLoad: () => void
  onNavigateToParent: (
    currentHierarchy: Hierarchy,
    selectedNode: HierarchyNode
  ) => void
  onNavigateToChild: (
    currentHierarchy: Hierarchy,
    selectedNode: HierarchyNode
  ) => void
  onSelect: (currentHierarchy: Hierarchy, selectedNode: HierarchyNode) => void
  width?: MenuWidth
  dir?: MenuDirection
  initialFocusIndex?: number | null
  focusLockDisabled?: boolean
}

const optionHeight = spacingTokens.spacing.xl

const getContainerHeight = (numberOfOptions: number) => {
  const headerHeight = `(2 * ${optionHeight})`
  const bodyHeight = `(${numberOfOptions} * ${optionHeight})`
  const borderHeight = `(2 * ${borderTokens.border.solid.borderWidth})`
  return `calc(${headerHeight} + ${bodyHeight} + ${borderHeight})`
}

type NavigatingState = "toParent" | "toChild" | null

export const HierarchicalMenu = (props: HierarchicalMenuProps) => {
  const theme = useTheme()
  const [isNavigating, setIsNavigating] = useState<NavigatingState>(null)
  const [incomingNumberOfOptions, setIncomingNumberOfOptions] = useState(0)

  const animationTimeout = React.useMemo(
    () => Number(theme.animation.duration.rapid.replace("ms", "")),
    [theme]
  )
  const {
    hierarchy,
    onLoad,
    onNavigateToParent,
    onNavigateToChild,
    onSelect,
    width = "default",
    dir = "ltr",
    initialFocusIndex = null,
    focusLockDisabled = false,
  } = props

  useEffect(() => {
    onLoad()
  }, [])

  useEffect(() => {
    if (hierarchy) {
      setTimeout(() => {
        setIsNavigating(null)
      }, animationTimeout)
    }
  }, [hierarchy])

  if (!hierarchy) {
    const numberOfOptions = 1

    return (
      <div
        className={classNames(styles.container, {
          [styles.defaultWidth]: width === "default",
        })}
        style={{ height: getContainerHeight(numberOfOptions) }}
      >
        <LoadingMenu
          transitionLevel={null}
          width={width}
          dir={dir}
          options={numberOfOptions}
          shouldAnimate={true}
        />
      </div>
    )
  }

  const navigateToParent = (toNode: HierarchyNode) => {
    setIsNavigating("toParent")
    setIncomingNumberOfOptions(toNode.numberOfChildren || 1)
    onNavigateToParent(hierarchy, toNode)
  }

  const navigateToChild = (toNode: HierarchyNode) => {
    setIsNavigating("toChild")
    setIncomingNumberOfOptions(toNode.numberOfChildren || 1)
    onNavigateToChild(hierarchy, toNode)
  }

  return (
    <div
      className={classNames(styles.container, {
        [styles.defaultWidth]: width === "default",
      })}
      style={{ height: getContainerHeight(hierarchy.children.length) }}
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
          onNavigateToParent={toNode => navigateToParent(toNode)}
          onNavigateToChild={toNode => navigateToChild(toNode)}
          onSelect={onSelect}
          width={width}
          dir={dir}
          isNavigating={isNavigating}
          initialFocusIndex={initialFocusIndex}
          focusLockDisabled={focusLockDisabled}
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
  onNavigateToParent: (toNode: HierarchyNode) => void
  onNavigateToChild: (toNode: HierarchyNode) => void
  onSelect: (currentHierarchy: Hierarchy, selectedNode: HierarchyNode) => void
  isNavigating: NavigatingState
  width: MenuWidth
  dir: MenuDirection
  initialFocusIndex: number | null
  focusLockDisabled: boolean
}

const Menu = (props: MenuProps) => {
  const {
    hierarchy,
    onNavigateToParent,
    onNavigateToChild,
    onSelect,
    width,
    dir,
    isNavigating,
    initialFocusIndex,
    focusLockDisabled,
  } = props

  const onKeyboardForward = (index: number | null) => {
    if (index == null) {
      return false
    }
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

  const onKeyboardSelect = (index: number | null) => {
    if (index == null) {
      return
    }
    onSelect(hierarchy, hierarchy.children[index])
  }

  const keyboardHighlightedChildRef = (element: HTMLDivElement | null) => {
    if (element && !isNavigating) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }, 100)
    }
  }

  return (
    <div
      className={classNames(styles.menu, styles.currentMenu, {
        [styles.defaultWidth]: width === "default",
        [styles.toParent]: isNavigating === "toParent",
        [styles.toChild]: isNavigating === "toChild",
      })}
    >
      <FocusLock
        disabled={focusLockDisabled}
        returnFocus={true}
        autoFocus={false}
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
            <button
              className={styles.currentButton}
              onClick={() => onSelect(hierarchy, hierarchy.current)}
            >
              <Text style="body-bold" tag="p" inheritBaseline>
                {hierarchy.current.label}
              </Text>
            </button>
            <Text style="small" tag="p" inheritBaseline>
              Level {hierarchy.current.level}
            </Text>
          </div>
        </div>
        <div className={styles.body}>
          <KeyboardNavigableList
            items={hierarchy.children}
            onForward={({ index }) => onKeyboardForward(index)}
            onBack={() => onKeyboardBack()}
            onSelect={({ index }) => onKeyboardSelect(index)}
            initialIndex={initialFocusIndex}
            dir={dir}
          >
            {({ index: keyboardIndex }) => (
              <>
                {hierarchy.children.map((c, index) => {
                  const isKeyboardHighlighted = keyboardIndex === index
                  return (
                    <div
                      className={
                        isKeyboardHighlighted
                          ? styles.keyboardHighlightedChild
                          : styles.child
                      }
                      key={c.value}
                      ref={
                        isKeyboardHighlighted
                          ? keyboardHighlightedChildRef
                          : null
                      }
                    >
                      <button
                        className={styles.childLabelButton}
                        onClick={() => onSelect(hierarchy, c)}
                        title={c.label}
                      >
                        <div className={styles.childLabelText}>{c.label}</div>
                      </button>
                      {c.numberOfChildren == null && (
                        <button
                          className={styles.disabledChildDrilldownButton}
                          disabled
                        >
                          <DrilldownChevron label={c.label} dir={dir} />
                        </button>
                      )}
                      {c.numberOfChildren != null && c.numberOfChildren > 0 && (
                        <button
                          className={styles.childDrilldownButton}
                          onClick={() => onNavigateToChild(c)}
                        >
                          <DrilldownChevron label={c.label} dir={dir} />
                        </button>
                      )}
                    </div>
                  )
                })}
              </>
            )}
          </KeyboardNavigableList>
        </div>
      </FocusLock>
    </div>
  )
}

const DrilldownChevron = ({
  label,
  dir,
}: {
  label: string
  dir: MenuDirection
}) => (
  <div className={styles.childDrilldownButtonIcon}>
    <Icon
      icon={dir === "ltr" ? chevronRight : chevronLeft}
      role="img"
      title={`Drill down on ${label}`}
      inheritSize
    />
  </div>
)

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
