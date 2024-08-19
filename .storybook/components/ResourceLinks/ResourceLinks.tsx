import React, { HTMLAttributes } from "react"
import { Unstyled } from "@storybook/blocks"
import classNames from "classnames"
import { Text, ExternalLinkIcon } from "@kaizen/components"

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
      className="border rounded inline-flex items-center p-8 text-blue-400 no-underline"
    >
      <Text variant="small" tag="span" classNameOverride="text-inherit">
        {text}
      </Text>
      <ExternalLinkIcon
        role="presentation"
        classNameOverride="ml-4 w-16 h-16"
      />
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
        "flex flex-wrap mt-16 mb-40 list-none m-0 p-0 gap-8",
        className
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

ResourceLinks.displayName = "ResourceLinks"
