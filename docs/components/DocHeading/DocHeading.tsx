import React, { type HTMLAttributes } from 'react'
import { Unstyled } from '@storybook/blocks'
import classnames from 'classnames'
import { Heading } from '~components/Heading'
import { Tag } from '~components/__next__/Tag'
import styles from './DocHeading.module.css'

type DocHeadingProps = {
  /** The string title of the page */
  title: string
  /** Tag the version of the component to visually indicate its state */
  componentVersion?: 'next' | 'current' | 'alpha' | 'deprecated'
  /** Optional visual document tags */
  docTags?: string[]
} & HTMLAttributes<HTMLDivElement>

const versionColorMap = {
  next: 'green',
  current: 'orange',
  deprecated: 'red',
  alpha: 'blue',
} as const

export const DocHeading = ({
  title,
  componentVersion,
  docTags = [],
  className,
  ...otherProps
}: DocHeadingProps): JSX.Element => (
  <>
    <Unstyled>
      <div className={classnames(styles.docHeading, className)} {...otherProps}>
        <Heading variant="composable-header-title" tag="h1">
          {title}
        </Heading>
        {(componentVersion ?? docTags) && (
          <ul className={styles.tagList}>
            {componentVersion && (
              <li>
                <Tag color={versionColorMap[componentVersion] ?? 'blue'}>{componentVersion}</Tag>
              </li>
            )}
            {docTags.map((tagTitle, index) => (
              <li key={`${tagTitle}-${index}`}>
                <Tag color="gray">{tagTitle}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Unstyled>
  </>
)

DocHeading.displayName = 'DocHeading'
