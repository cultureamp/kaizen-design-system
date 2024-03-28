import React, { HTMLAttributes } from "react"
import { Unstyled } from "@storybook/blocks"
import classnames from "classnames"
import styles from "./ResourceLinks.module.scss"

type ResourceLinkProps = {
  href: string
  text: string
}

const ResourceLink = ({ href, text }: ResourceLinkProps): JSX.Element => (
  <li className={styles.resourceLinkContainer}>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={styles.resourceLink}
    >
      {text}
    </a>
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
  className,
  ...attributes
}: ResourceLinksProps): JSX.Element => (
  <Unstyled>
    <ul className={classnames(styles.resourceLinks, className)} {...attributes}>
      <ResourceLink href={sourceCode} text="Source Code" />
      {figma && <ResourceLink href={figma} text="Figma" />}
      {designGuidelines && (
        <ResourceLink href={designGuidelines} text="Usage Guidelines" />
      )}
    </ul>
  </Unstyled>
)

ResourceLinks.displayName = "ResourceLinks"
