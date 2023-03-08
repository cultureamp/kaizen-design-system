import React from "react"
import {
  Title,
  Description,
  Primary,
  Controls,
  DocsContainerProps,
  DocsContainer,
} from "@storybook/blocks"
import { Installation } from "./components/CustomDocBlocks/components/Installation"
import { Links } from "./components/CustomDocBlocks/components/Links"
import { CustomStories } from "./components/CustomDocBlocks/components/Stories"

export const CustomDocsContainer = ({
  context,
}: DocsContainerProps): JSX.Element => {
  console.log("context", context)
  return (
    <>
      <DocsContainer context={context}>
        <Title />
        <Links context={context} />
        <Description />
        <Installation context={context} />
        <h2>Playground</h2>
        <Primary />
        <Controls />
        <CustomStories />
      </DocsContainer>
    </>
  )
}
