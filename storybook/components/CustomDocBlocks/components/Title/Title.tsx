import React from "react"

export type TitleProps = {
  //   context: DocsContainerProps["context"]
  // TODO: Find correct type
  context: any
}

export const Title = ({ context }: TitleProps): JSX.Element => {
  const titleHierarchy = context.attachedCSFFile.meta.title
  const packageName = context.attachedCSFFile.meta.parameters.packageName
  const title = titleHierarchy.split("/")

  return (
    <>
      <h2>
        {title[title.length - 1]}
        {packageName && (
          <>
            {" "}
            <a href="https://www.npmjs.com/package/@kaizen/button">
              <img
                alt="npm version"
                src={`https://flat.badgen.net/npm/v/${packageName}`}
              ></img>
            </a>
          </>
        )}
      </h2>
      <br />
    </>
  )
}

Title.displayName = "Title"
