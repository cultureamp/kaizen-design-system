import React, { useEffect } from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import type { Node } from '@react-types/shared'
import { useListBox } from 'react-aria'
import { Text } from '~components/Text'
import { type ListProps, type SelectItem } from '../../types'
import { ListItem } from '../ListItem'
import { ListSection } from '../ListSection'
import styles from './List.module.css'

export const List = <T extends SelectItem>({
  state,
  listBoxOptions,
  listBoxRef,
  onLoadMore,
  hasMore,
  loading,
  loadingMessage,
  noResultsMessage,
}: ListProps<T>): JSX.Element => {
  const { listBoxProps } = useListBox({ ...listBoxOptions, autoFocus: 'first' }, state, listBoxRef)
  const { formatMessage } = useIntl()

  useEffect(() => {
    const el = listBoxRef.current
    if (!el) return

    const handleScroll = (): void => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 30) {
        if (hasMore) {
          onLoadMore?.()
        }
      }
    }

    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [hasMore, onLoadMore, listBoxRef])

  const renderNode = (node: Node<T>): JSX.Element | null => {
    if (node.value?.key === '__loading') return null
    if (node.type === 'section') {
      return node.rendered ? (
        <ListSection key={String(node.key)} section={node} state={state} />
      ) : null
    } else {
      const { selectedIcon, selectedPosition, className } = node.props
      return (
        <ListItem
          key={String(node.key)}
          item={node}
          state={state}
          selectedIcon={selectedIcon}
          selectedPosition={selectedPosition}
          className={className}
        />
      )
    }
  }

  const defaultNoResultsMsg = formatMessage({
    id: 'singleSelect.noResults',
    defaultMessage: 'No results',
    description: 'Message shown when there are no results to display',
  })

  const defaultLoadingMsg = formatMessage({
    id: 'singleSelect.loading',
    defaultMessage: 'Loading...',
    description: 'Loading text shown when the user is waiting for results',
  })

  return (
    <>
      {Array.from(state.collection).length === 0 && !hasMore && !loading && (
        <div
          className={styles.noResultsWrapper}
          role="status"
          aria-live="assertive"
          aria-atomic="true"
        >
          {noResultsMessage ?? <Text variant="body">{defaultNoResultsMsg}</Text>}
        </div>
      )}

      <ul {...listBoxProps} ref={listBoxRef} className={styles.list} aria-busy={loading}>
        {Array.from(state.collection).map(renderNode)}
      </ul>

      {loading && (
        <div
          role="status"
          aria-live="assertive"
          aria-atomic="true"
          className={styles.loadingWrapper}
        >
          {loadingMessage ?? <Text variant="body">{defaultLoadingMsg}</Text>}
        </div>
      )}
    </>
  )
}
