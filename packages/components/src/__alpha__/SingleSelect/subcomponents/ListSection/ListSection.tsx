import React from 'react'
import classNames from 'classnames'
import { useListBoxSection } from 'react-aria'
import { Divider } from '~components/Divider'
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

  const firstSectionHeader = section.key === state.collection.getFirstKey()

  return (
    <React.Fragment key={section.key}>
      {!firstSectionHeader && <li role="presentation" aria-hidden />}
      {!firstSectionHeader && <Divider variant="content" />}
      <li
        {...itemProps}
        className={classNames(styles.sectionWrapper, {
          [styles.firstSectionHeader]: firstSectionHeader,
        })}
      >
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
