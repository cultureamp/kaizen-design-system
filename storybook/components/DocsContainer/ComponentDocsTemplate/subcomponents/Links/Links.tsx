import React from "react"

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
    <ul className="!list-none !p-0 !m-0 flex gap-4 items-center">
      {sourceCodeLink && (
        <li className="!mt-0 !text-paragraph">
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Source Code
          </a>
        </li>
      )}
      {figmaLink && (
        <li className="!mt-0 !text-paragraph">
          |&nbsp;
          <a
            href={figmaLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            UI Kit
          </a>
        </li>
      )}
      {designGuidelinesLink && (
        <li className="!mt-0 !text-paragraph">
          |&nbsp;
          <a
            href={designGuidelinesLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Design guidelines
          </a>
        </li>
      )}
    </ul>
  )
}

Links.displayName = "Links"
