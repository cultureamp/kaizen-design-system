import React from "react"
import { LinkTo } from "../../../../LinkTo"

export type AlternativesProps = {
  //   context: DocsContainerProps["context"]
  // TODO: Find correct type
  context: any
}

export const Alternatives = ({
  context,
}: AlternativesProps): JSX.Element | null => {
  const alternativesList: string[] =
    context.attachedCSFFile.meta.parameters.alternatives

  const hasAlternatives = alternativesList !== undefined

  if (!hasAlternatives) return null

  const store = context.store.storyIndex.entries

  return (
    <div>
      <h2 id="alternatives">Alternatives</h2>
      <ul>
        {alternativesList.map(id => {
          const title: string = store[id].title.split("/").pop()
          return (
            <li key={id}>
              <LinkTo pageId={id}>{title}</LinkTo>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Alternatives.displayName = "Alternatives"
