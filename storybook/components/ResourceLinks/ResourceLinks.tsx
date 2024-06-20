import React, { HTMLAttributes } from "react"
import { Unstyled } from "@storybook/blocks"
import { Text } from "~components/Text"
import { ExternalLinkIcon } from "../../../packages/components/src"

type ResourceLinkProps = {
  href: string
  text: string
}

const ResourceLink = ({ href, text }: ResourceLinkProps): JSX.Element => (
  <li>
    <Unstyled>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="border rounded inline-flex items-center p-8 text-blue-500"
      >
        <Text variant="small" tag="span" classNameOverride="text-inherit">
          {text}
        </Text>
        <ExternalLinkIcon
          role="presentation"
          classNameOverride="ml-4 w-16 h-16"
        />
      </a>
    </Unstyled>
  </li>
)

export type ResourceLinksProps = HTMLAttributes<HTMLUListElement> & {
  sourceCode: string
  figma?: string
  designGuidelines?: string
}

export const ResourceLinks = ({
  sourceCode,
  figma,
  designGuidelines,
  ...attributes
}: ResourceLinksProps): JSX.Element => (
  <Unstyled>
    <ul className="mb-40 list-none m-0 p-0 flex gap-8" {...attributes}>
      <ResourceLink href={sourceCode} text="Source Code" />
      {figma && <ResourceLink href={figma} text="Figma" />}
      {designGuidelines && (
        <ResourceLink href={designGuidelines} text="Usage Guidelines" />
      )}
    </ul>
  </Unstyled>
)

ResourceLinks.displayName = "ResourceLinks"
