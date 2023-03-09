import React from "react"
import {
  Description,
  Primary,
  Controls,
  DocsContainerProps,
  DocsContainer,
} from "@storybook/blocks"
import { Installation } from "./components/CustomDocBlocks/components/Installation"
import { Links } from "./components/CustomDocBlocks/components/Links"
import { CustomStories } from "./components/CustomDocBlocks/components/Stories"
import { Title } from "./components/CustomDocBlocks/components/Title"

export const CustomDocsContainer = ({ children, ...props }): JSX.Element => {
  console.log("context", children, props)
  return (
    <>
      <DocsContainer context={props.context}>
        <Title context={props.context} />
        <Links context={props.context} />
        <Description />
        <Installation context={props.context} />
        <h2>Playground</h2>
        {/* <Primary /> */}
        <Controls />
        <CustomStories />
      </DocsContainer>
    </>
  )
}
