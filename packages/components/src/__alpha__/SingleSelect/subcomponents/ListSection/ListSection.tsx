import React from 'react'
import { useListBoxSection } from 'react-aria'
import { type ListSectionProps, type SelectItem } from '../../types'
import { ListItem } from '../ListItem'
import styles from './ListSection.module.css'

export const ListSection = <T extends SelectItem>({
  section,
  state,
}: ListSectionProps<T>): JSX.Element => {
  const { headingProps, itemProps, groupProps } = useListBoxSection({
    'heading': section.rendered,
    'aria-label': section['aria-label'],
  })

  return (
    <React.Fragment key={section.key}>
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
          key={`${section.key}-group-contents`}
          {...groupProps}
          className={styles.listSectionGroup}
        >
          {Array.from(section.childNodes).map((node) => (
            <ListItem key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </React.Fragment>
  )
}
