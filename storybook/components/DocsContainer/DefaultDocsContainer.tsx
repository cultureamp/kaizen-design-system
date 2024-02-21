import React, { useContext } from "react"
import {
  DocsContainer,
  DocsContainerProps,
  Unstyled,
  DocsContext,
} from "@storybook/blocks"
import { BackToTop } from "./BackToTop"
import { Content, Main, Sidebar } from "./Layout"
import { TableOfContents } from "./TableOfContents"

type LayoutProps = { children: React.ReactNode }

const FullPage = ({ children }: LayoutProps): JSX.Element => (
  <main>
    {children}
    <BackToTop className="kz-mt-24" />
  </main>
)

const DefaultLayout = ({ children }: LayoutProps): JSX.Element => (
  <Main>
    <Sidebar>
      <div className="kz-sticky kz-right-0 kz-top-12">
        <Unstyled>
          <TableOfContents />
        </Unstyled>
      </div>
    </Sidebar>
    <Content>
      {children}
      <BackToTop className="kz-mt-24" />
    </Content>
  </Main>
)

const DocsLayout = ({ children }: LayoutProps): JSX.Element => {
  const context = useContext(DocsContext)

  // CSFFile attributes are populated, but unsure where the type definition is
  // @ts-expect-error
  const csf = context.storyIdToCSFFile.values().next().value

  if (csf?.meta.parameters.docsLayout === "fullPage") {
    return <FullPage>{children}</FullPage>
  }

  return <DefaultLayout>{children}</DefaultLayout>
}

export const DefaultDocsContainer = ({
  children,
  ...props
}: DocsContainerProps & { children: React.ReactNode }): JSX.Element => (
  <DocsContainer {...props}>
    <DocsLayout>{children}</DocsLayout>
  </DocsContainer>
)
