import React, { useContext } from 'react'
import { DocsContainer, DocsContext, type DocsContainerProps } from '@storybook/blocks'
import { BackToTop } from './BackToTop'
import { Content, DocsWrapper, Main } from './Layout'

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

  // @ts-expect-error CSFFile attributes are populated, but unsure where the type definition is
  const csf = context.storyIdToCSFFile.values().next().value

  if (csf?.meta.parameters.docsLayout === 'fullPage') {
    return <FullPage>{children}</FullPage>
  }

  return <DefaultLayout>{children}</DefaultLayout>
}

export const DefaultDocsContainer = ({
  children,
  ...props
}: DocsContainerProps & { children: React.ReactNode }): JSX.Element => (
  <DocsWrapper>
    <DocsContainer {...props}>
      <DocsLayout>{children}</DocsLayout>
    </DocsContainer>
  </DocsWrapper>
)
