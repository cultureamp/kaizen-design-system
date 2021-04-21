import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ThemeManager, heartTheme, ThemeProvider } from "@kaizen/design-tokens"
import * as React from "react"
import ContentMarkdownSection from "../components/ContentMarkdownSection"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import {
  Content,
  Sidebar,
  SidebarAndContent,
  SidebarTab,
  TableOfContents,
} from "../components/SidebarAndContent"
import { sortSidebarTabs, stripTrailingSlash } from "./util"

const renderSidebarTabs = (pages, currentPath, sectionName) =>
  pages.map((node, i) => (
    <SidebarTab
      href={node!.node!.fields!.slug}
      active={
        stripTrailingSlash(node!.node!.fields!.slug) ===
        stripTrailingSlash(currentPath)
      }
      key={`sidebarTab-${sectionName}-${i}`}
    >
      {node!.node!.frontmatter!.navTitle}
    </SidebarTab>
  ))

export default ({ data, location }) => {
  const themeManager = new ThemeManager(heartTheme)
  const md = data.mdx
  const allPages = data.allMdx.edges
  const overviewPage = allPages.filter(
    el => el.node.frontmatter.navTitle === "Overview"
  )
  const pagesWithoutOverview = sortSidebarTabs(
    allPages.filter(el => el.node.frontmatter.navTitle !== "Overview")
  )

  const currentPath = location.pathname

  const LanguagePageHeader = (
    <PageHeader
      headingText={md.frontmatter.title}
      summaryParagraph={md.frontmatter.summaryParagraph}
      tags={md.frontmatter.tags}
    />
  )

  return (
    <ThemeProvider themeManager={themeManager}>
      <Layout
        pageTitle={md.frontmatter.title}
        currentPath={currentPath}
        pageHeader={LanguagePageHeader}
        footer={<Footer />}
      >
        <SidebarAndContent>
          <Sidebar>
            {renderSidebarTabs(overviewPage, currentPath, "language")}
            {renderSidebarTabs(pagesWithoutOverview, currentPath, "language")}
          </Sidebar>
          <Content>
            <ContentMarkdownSection>
              {/*
              // @ts-ignore */}
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </ContentMarkdownSection>
          </Content>
          <TableOfContents items={md.tableOfContents.items} />
        </SidebarAndContent>
      </Layout>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMdx(filter: { fields: { slug: { regex: "/^/language//" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            navTitle
          }
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        summaryParagraph
        tags
      }
      tableOfContents
    }
  }
`
