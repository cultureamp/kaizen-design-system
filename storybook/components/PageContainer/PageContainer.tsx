import React from "react"
import { DocsContainer, DocsContainerProps } from "@storybook/blocks"
import { BackToTop } from "../BackToTop"
import { Content, Main, Sidebar } from "../Layout"
import { TableOfContents } from "../TableOfContents"

export const PageContainer = ({
  children,
  ...props
}: DocsContainerProps & { children: any }): any => (
  <DocsContainer {...props}>
    <Main>
      <Sidebar>
        <TableOfContents />
      </Sidebar>
      <Content>
        {children}
        <BackToTop />
      </Content>
    </Main>
  </DocsContainer>
)
