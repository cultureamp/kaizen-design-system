import React from "react"

export type TitleProps = {
  //   context: DocsContainerProps["context"]
  // TODO: Find correct type
  context: any
}

export const Title = ({ context }: TitleProps): JSX.Element => {
  const titleHierarchy = context.attachedCSFFile.meta.title
  const title = titleHierarchy.split("/")

  return <h1>{title[title.length - 1]}</h1>
}

Title.displayName = "Title"
