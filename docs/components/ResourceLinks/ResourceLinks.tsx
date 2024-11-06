import React, { HTMLAttributes } from 'react'
import { Unstyled } from '@storybook/blocks'
import classNames from 'classnames'
import { Text } from '~components/Text'
import { Icon } from '~components/__future__/Icon'

type ResourceLinkProps = {
  href: string
  text: string
}

const ResourceLink = ({ href, text }: ResourceLinkProps): JSX.Element => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="border rounded inline-flex gap-4 items-center p-8 text-blue-400 no-underline"
    >
      <Text variant="small" tag="span" classNameOverride="text-inherit">
        {text}
      </Text>
      <Icon name="open_in_new" isPresentational />
    </a>
  </li>
)

export type ResourceLinksProps = HTMLAttributes<HTMLUListElement> & {
  sourceCode: string
  figma?: string
  designGuidelines?: string
  apiSpecification?: string
}

export const ResourceLinks = ({
  sourceCode,
  figma,
  designGuidelines,
  apiSpecification,
  className,
  ...attributes
}: ResourceLinksProps): JSX.Element => (
  <Unstyled>
    <ul
      {...attributes}
      className={classNames(
        'flex flex-wrap mt-16 mb-40 list-none m-0 p-0 gap-8',
        className,
      )}
    >
      <ResourceLink href={sourceCode} text="Source Code" />
      {figma && <ResourceLink href={figma} text="Figma" />}
      {designGuidelines && (
        <ResourceLink href={designGuidelines} text="Usage Guidelines" />
      )}
      {apiSpecification && (
        <ResourceLink href={apiSpecification} text="API specification" />
      )}
    </ul>
  </Unstyled>
)

ResourceLinks.displayName = 'ResourceLinks'
