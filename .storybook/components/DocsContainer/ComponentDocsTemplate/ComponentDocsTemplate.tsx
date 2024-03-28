import React from "react"
import {
  Description,
  Primary,
  Controls,
  DocsContainer,
  DocsContainerProps,
  Unstyled,
} from "@storybook/blocks"
import { BackToTop } from "../BackToTop"
import { Content, Main, Sidebar } from "../Layout"
import { TableOfContents } from "../TableOfContents"
import { Alternatives } from "./subcomponents/Alternatives"
import { Installation } from "./subcomponents/Installation"
import { Links } from "./subcomponents/Links"
import { CustomStories } from "./subcomponents/Stories"
import { Title } from "./subcomponents/Title"

/**
 * Use this in your CSF Meta in combination with `tags: ["autodocs"]`
 *
 * eg.
 * export default {
 *   tags: ["autodocs"],
 *   parameters: { docs: { container: ComponentDocsTemplate } }
 * }
 */
export const ComponentDocsTemplate = ({
  context,
}: DocsContainerProps): JSX.Element => (
  <DocsContainer context={context}>
    <Main>
      <Sidebar>
        <div className="sticky right-0 top-12">
          <Unstyled>
            <TableOfContents />
          </Unstyled>
        </div>
      </Sidebar>
      <Content>
        <Title context={context} />
        <Links context={context} />
        <Description of="story" />
        <Installation context={context} />
        <h2 id="playground">Playground</h2>
        <Primary />
        <Controls />
        <CustomStories />
        <Alternatives context={context} />
        <BackToTop />
      </Content>
    </Main>
  </DocsContainer>
)

ComponentDocsTemplate.displayName = "ComponentDocsTemplate"
