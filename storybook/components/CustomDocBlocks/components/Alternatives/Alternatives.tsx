import React from "react"

export type AlternativesProps = {
  //   context: DocsContainerProps["context"]
  // TODO: Find correct type
  context: any
}

export const Alternatives = ({ context }: AlternativesProps): JSX.Element => {
  const alternativesList: string[] =
    context.attachedCSFFile.meta.parameters.alternatives

  const hasAlternatives = alternativesList !== undefined

  const store = context.store.storyIndex.entries

  const filteredAlternativeStories = Object.keys(store)
    .filter(key =>
      alternativesList.includes(
        key.replace("components-", "").replace("--docs", "")
      )
    )
    .map(obj => [obj, store[obj].title], [])

  return hasAlternatives ? (
    <div>
      <h2>Alternatives</h2>
      <ul>
        {filteredAlternativeStories.map(component => {
          const title: string = component[1].split("/")

          return (
            <li>
              <a href={`/?path=/docs/${component[0]}`}>
                {title[title.length - 1]}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  ) : (
    <></>
  )
}

Alternatives.displayName = "Alternatives"
