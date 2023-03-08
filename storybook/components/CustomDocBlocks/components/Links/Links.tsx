import React from "react"

export type LinksProps = {
  //   context: DocsContainerProps["context"]
  // TODO: Find correct type
  context: any
}

export const Links = ({ context }: LinksProps): JSX.Element => {
  const sourceCodeLink = context.attachedCSFFile.meta.parameters.sourceCodeLink
  const figmaLink = context.attachedCSFFile.meta.parameters.figmaLink

  const hasLinks = sourceCodeLink !== undefined || figmaLink !== undefined

  return hasLinks ? (
    <div>
      {sourceCodeLink && <a href={sourceCodeLink}>Source Code</a>}
      {sourceCodeLink && figmaLink && <span>&nbsp;|&nbsp;</span>}
      {figmaLink && <a href={figmaLink}>UI Kit</a>}
    </div>
  ) : (
    <></>
  )
}

Links.displayName = "Links"
