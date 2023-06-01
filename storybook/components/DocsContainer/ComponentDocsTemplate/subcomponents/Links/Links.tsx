import React from "react"
import { ResourceLinks } from "../../../../ResourceLinks"

export type LinksProps = {
  //   context: DocsContainerProps["context"]
  // TODO: Find correct type
  context: any
}

export const Links = ({ context }: LinksProps): JSX.Element | null => {
  const links: Record<string, string> =
    context.attachedCSFFile.meta.parameters.resourceLinks

  const sourceCodeLink: string = links.sourceCode
  const figmaLink: string = links.figma
  const designGuidelinesLink: string = links.designGuidelines

  if (!links) return null

  return (
    <ResourceLinks
      sourceCode={sourceCodeLink}
      figma={figmaLink}
      designGuidelines={designGuidelinesLink}
    />
  )
}

Links.displayName = "Links"
