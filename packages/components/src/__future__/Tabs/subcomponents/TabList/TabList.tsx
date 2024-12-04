import React, { ReactNode, useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import { TabList as RACTabList, TabListProps as RACTabListProps } from 'react-aria-components'
import { Button } from '~components/__actions__/v3'
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

  useEffect(() => {
    if (!isDocumentReady) {
      setIsDocumentReady(true)
      return
    }

    const tabs = document.querySelectorAll('[data-kz-tab]')

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
      },
    )
    firstTabObserver.observe(tabs[0])

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
      },
    )
    lastTabObserver.observe(tabs[tabs.length - 1])
  }, [isDocumentReady])

  const tabListRef = useRef<HTMLDivElement | null>(null)

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
    <div className={styles.container}>
      {leftArrowEnabled && (
        <Button
          hasHiddenLabel
          icon={<Icon name="chevron_left" isPresentational />}
          onPress={() => handleArrowPress('left')}
          variant="tertiary"
          className={styles.leftArrow}
          excludeFromTabOrder
        >
          Slide tab list left
        </Button>
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
        <Button
          hasHiddenLabel
          icon={<Icon name="chevron_right" isPresentational />}
          onPress={() => handleArrowPress('right')}
          variant="tertiary"
          className={styles.rightArrow}
          excludeFromTabOrder
        >
          Slide tab list right
        </Button>
      )}
    </div>
  )
}
