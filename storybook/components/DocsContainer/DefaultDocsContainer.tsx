import React, { useContext } from "react"
import {
  DocsContainer,
  DocsContainerProps,
  DocsContext,
  Stories,
  Title,
} from "@storybook/blocks"
import { KAIOInstallation } from "../Installation"
import { BackToTop } from "./BackToTop"
import { Content, Main } from "./Layout"

type LayoutProps = { children: React.ReactNode }

const FullPage = ({ children }: LayoutProps): JSX.Element => (
  <main>
    {children}
    <BackToTop className="mt-24" />
  </main>
)

const DefaultLayout = ({ children }: LayoutProps): JSX.Element => (
  <Main>
    <Content>
      {children}
      <BackToTop className="mt-24" />
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
    <DocsLayout>
      <Title />
      <KAIOInstallation exportNames="Tooltip" family="overlays" version="1" />
      {children}
      <Stories />
    </DocsLayout>
  </DocsContainer>
)
