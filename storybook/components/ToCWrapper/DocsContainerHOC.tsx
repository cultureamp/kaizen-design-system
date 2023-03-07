import React, { ComponentProps } from "react"
import { DocsContainer, DocsContainerProps } from "@storybook/addon-docs"
import BackToTop from "./BackToTop"
import TableOfContents from "./TableOfContents"

const DocsContainerHOC = ({
  children,
  ...rest
}: DocsContainerProps & {
  children: JSX.Element
}): JSX.Element => (
  <DocsContainer {...rest}>
    <main className="flex flex-row-reverse">
      <aside className="p-16">
        <TableOfContents />
      </aside>
      <div>{children}</div>
    </main>
    <BackToTop />
  </DocsContainer>
)

export default DocsContainerHOC
