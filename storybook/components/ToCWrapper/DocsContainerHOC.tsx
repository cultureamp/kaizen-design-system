import React, { ComponentProps } from "react"
import { DocsContainer, DocsContainerProps } from "@storybook/addon-docs"
import BackToTop from "./BackToTop"
import TableOfContents from "./TableOfContents"
import styles from "./styles.module.scss"

type Props = DocsContainerProps &
  Pick<ComponentProps<typeof TableOfContents>, "title" | "config"> & {
    children: JSX.Element
  }

const DocsContainerHOC = ({
  children,
  title,
  config,
  ...rest
}: Props): JSX.Element => (
  <DocsContainer {...rest}>
    <main className="flex flex-row-reverse">
      <aside className="p-16">
        <TableOfContents title={title} config={config} />
      </aside>
      <div>{children}</div>
    </main>
    <BackToTop />
  </DocsContainer>
)

export default DocsContainerHOC
