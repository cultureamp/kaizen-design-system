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
  // TODO get alternatie component links from the parameter
  return hasAlternatives ? (
    <div>
      <h2>Alternatives</h2>
      <ul>
        {alternativesList.map(component => (
          <li>{component}</li>
        ))}
      </ul>
    </div>
  ) : (
    <></>
  )
}

Alternatives.displayName = "Alternatives"
