import React from "react"
import {
  Description,
  Primary,
  Controls,
  DocsContainer,
} from "@storybook/blocks"
import { Alternatives } from "./components/CustomDocBlocks/components/Alternatives"
import { Installation } from "./components/CustomDocBlocks/components/Installation"
import { Links } from "./components/CustomDocBlocks/components/Links"
import { CustomStories } from "./components/CustomDocBlocks/components/Stories"
import { Title } from "./components/CustomDocBlocks/components/Title"

export const CustomDocsContainer = ({ ...props }): JSX.Element => (
  <>
    <DocsContainer context={props.context}>
      <Title context={props.context} />
      <Links context={props.context} />
      <Description of="story" />
      <Installation context={props.context} />
      <h2>Playground</h2>
      <Primary />
      <Controls />
      <CustomStories />
      <Alternatives context={props.context} />
    </DocsContainer>
  </>
)
