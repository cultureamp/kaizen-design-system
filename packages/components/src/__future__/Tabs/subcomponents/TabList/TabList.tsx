import React, { ReactNode, useEffect, useId, useRef, useState } from 'react'
import classnames from 'classnames'
import { TabList as RACTabList, TabListProps as RACTabListProps } from 'react-aria-components'
import { Icon } from '~components/__future__/Icon'
import styles from './TabList.module.css'

export type TabListProps = {
  /**
   * Accessible name for the set of tabs
   */
  'aria-label': string
  /**
   * Removes the built in padding
   */
  'noPadding'?: boolean
  'children': ReactNode
} & RACTabListProps<HTMLElement>

/**
 * Wrapper for the tabs themselves
 */
export const TabList = (props: TabListProps): JSX.Element => {
  const { 'aria-label': ariaLabel, noPadding = false, children, className, ...restProps } = props
  const [isDocumentReady, setIsDocumentReady] = useState<boolean>(false)
  const [leftArrowEnabled, setLeftArrowEnabled] = useState<boolean>(false)
  const [rightArrowEnabled, setRightArrowEnabled] = useState<boolean>(false)
  const tabListRef = useRef<HTMLDivElement | null>(null)
  const tabListId = useId()
  const [isRTL, setIsRTL] = useState<boolean>(false)
  const [containerElement, setContainerElement] = useState<HTMLElement | null>()

  useEffect(() => {
    if (!isDocumentReady) {
      setIsDocumentReady(true)
      return
    }

    const container = document.getElementById(tabListId)
    setContainerElement(container)
    setIsRTL(!!container?.closest('[dir]')?.matches('[dir="rtl"]'))
  }, [isDocumentReady, tabListId])

  useEffect(() => {
    if (!isDocumentReady) {
      return
    }

    const tabs = containerElement?.querySelectorAll('[data-kz-tab]')
    if (!tabs) {
      return
    }

    const firstTabObserver = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          setLeftArrowEnabled(true)
          return
        }
        setLeftArrowEnabled(false)
      },
      {
        threshold: 0.75,
        root: containerElement,
      },
    )
    firstTabObserver.observe(isRTL ? tabs[tabs.length - 1] : tabs[0])

    const lastTabObserver = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          setRightArrowEnabled(true)
          return
        }
        setRightArrowEnabled(false)
      },
      {
        threshold: 0.75,
        root: containerElement,
      },
    )
    lastTabObserver.observe(isRTL ? tabs[0] : tabs[tabs.length - 1])

    return () => {
      firstTabObserver.disconnect()
      lastTabObserver.disconnect()
    }
  }, [isDocumentReady, containerElement, isRTL])

  const handleArrowPress = (direction: 'left' | 'right'): void => {
    if (tabListRef.current) {
      const scrollAmount = 120
      const tabListScrollPos = tabListRef.current.scrollLeft
      const newSpot =
        direction === 'left' ? tabListScrollPos - scrollAmount : tabListScrollPos + scrollAmount
      tabListRef.current.scrollLeft = newSpot
    }
  }

  return (
    <div className={styles.container} id={tabListId}>
      {leftArrowEnabled && (
        // making a conscious decision to use <div onClick> over <button> here, because:
        // - <button> would add pointless noise for a screen reader user
        // - keyboard only user can toggle through tabs with left/right arrow keys already
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          onClick={() => handleArrowPress('left')}
          className={styles.leftArrow}
          data-testid="kz-tablist-left-arrow"
        >
          <Icon name="chevron_left" isPresentational />
        </div>
      )}
      <RACTabList
        aria-label={ariaLabel}
        ref={tabListRef}
        className={classnames(styles.tabList, className, noPadding && styles.noPadding)}
        {...restProps}
      >
        {children}
      </RACTabList>
      {rightArrowEnabled && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          onClick={() => handleArrowPress('right')}
          className={styles.rightArrow}
          data-testid="kz-tablist-right-arrow"
        >
          <Icon name="chevron_right" isPresentational />
        </div>
      )}
    </div>
  )
}
