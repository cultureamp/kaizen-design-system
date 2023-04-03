import React from "react"
import {
  Description,
  Primary,
  Controls,
  DocsContainer,
  Unstyled,
} from "@storybook/blocks"
import { BackToTop } from "./components/BackToTop"
import { Alternatives } from "./components/CustomDocBlocks/components/Alternatives"
import { Installation } from "./components/CustomDocBlocks/components/Installation"
import { Links } from "./components/CustomDocBlocks/components/Links"
import { CustomStories } from "./components/CustomDocBlocks/components/Stories"
import { Title } from "./components/CustomDocBlocks/components/Title"
import { Content, Main, Sidebar } from "./components/Layout"
import { TableOfContents } from "./components/TableOfContents"

export const CustomDocsContainer = ({ ...props }): JSX.Element => (
  <>
    <DocsContainer context={props.context}>
      <Main>
        <Sidebar>
          <div className="sticky right-0 top-12">
            <Unstyled>
              <TableOfContents />
            </Unstyled>
          </div>
        </Sidebar>
        <Content>
          <Title context={props.context} />
          <Links context={props.context} />
          <Description of="story" />
          <Installation context={props.context} />
          <h2 id="playground">Playground</h2>
          <Primary />
          <Controls />
          <CustomStories />
          <Alternatives context={props.context} />
          <BackToTop />
        </Content>
      </Main>
    </DocsContainer>
  </>
)
