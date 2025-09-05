import React from 'react'
import { useListBoxSection } from 'react-aria'
import { type ListSectionProps, type SelectItem } from '../../types'
import { ListItem } from '../ListItem'
import styles from './ListSection.module.css'

export function ListSection<T extends SelectItem>({
  section,
  state,
}: ListSectionProps<T>): JSX.Element {
  const { headingProps, itemProps, groupProps } = useListBoxSection({
    'heading': section.rendered,
    'aria-label': section['aria-label'],
  })

  // Known issue: Incorrect group count screenreader announcements with all grouped ListBox patterns in Chrome & Safari
  // See https://github.com/adobe/react-spectrum/issues/1234 for more details

  return (
    <>
      {section.key !== state.collection.getFirstKey() && <li role="presentation" aria-hidden />}
      <li {...itemProps}>
        {section.rendered && (
          <span
            {...headingProps}
            role="presentation"
            aria-hidden
            className={styles.listSectionHeader}
          >
            {section.rendered}
          </span>
        )}
        <ul
          {...groupProps}
          style={{
            padding: 0,
            listStyle: 'none',
          }}
        >
          {[...section.childNodes].map((node) => (
            <ListItem key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  )
}
ListSection.displayName = 'SingleSelect.ListSection'
