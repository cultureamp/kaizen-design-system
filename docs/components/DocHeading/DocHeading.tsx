import React, { useContext, type HTMLAttributes } from 'react'
import { DocsContext, Unstyled } from '@storybook/blocks'
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

type VersionTag = keyof typeof versionColorMap

export const DocHeading = ({
  title,
  docTags = [],
  className,
  ...otherProps
}: DocHeadingProps): JSX.Element => {
  const context = useContext(DocsContext)
  let tags: string[] = []
  try {
    // @ts-expect-error Storybook doesn't expose a typed value
    const csf = context.storyIdToCSFFile.values().next().value
    tags = csf?.meta?.tags ?? []
  } catch {
    tags = []
  }

  const versionTag = tags.find((tag: string): tag is VersionTag =>
    ['next', 'alpha', 'deprecated'].includes(tag),
  )

  return (
    <>
      <Unstyled>
        <div className={classnames(styles.docHeading, className)} {...otherProps}>
          <Heading variant="composable-header-title" tag="h1">
            {title}
          </Heading>
          {(versionTag ?? docTags.length > 0) && (
            <ul className={styles.tagList}>
              {versionTag && (
                <li>
                  <Tag color={versionColorMap[versionTag]}>{versionTag}</Tag>
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
}

DocHeading.displayName = 'DocHeading'
