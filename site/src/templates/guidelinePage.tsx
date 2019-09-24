import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import {
  Content,
  ContentMarkdownSection,
  ContentNeedToKnowSection,
  Sidebar,
  SidebarAndContent,
  SidebarTab,
} from "../components/SidebarAndContent"

const stripTrailingSlash = (str: string) => str.replace(/\/$/, "")

const sortSidebarTabs = tabs => {
  // sort tabs in alphabetical order
  const newTabs = [...tabs].sort((a, b) =>
    a.node.frontmatter.navTitle > b.node.frontmatter.navTitle ? 1 : -1
  )
  // move "Overview" to the top of the list
  const overviewIndex = newTabs.findIndex(
    el => el.node.frontmatter.navTitle === "Overview"
  )
  const overview = newTabs.splice(overviewIndex, 1)[0]
  newTabs.splice(0, 0, overview)
  return newTabs
}

export default ({ data, pageContext, location }) => {
  const md = data.mdx
  const allPages = data.allMdx.edges
  const sortedPages = sortSidebarTabs(allPages)
  const currentPath = location.pathname

  const GuidelinesPageHeader = (
    <PageHeader
      headingText={md.frontmatter.title}
      summaryParagraph={md.frontmatter.summaryParagraph}
      tags={md.frontmatter.tags}
    />
  )

  return (
    <Layout
      pageTitle={md.frontmatter.title}
      currentPath={currentPath}
      pageHeader={GuidelinesPageHeader}
    >
      <SidebarAndContent>
        <Sidebar>
          {sortedPages.map((node, i) => (
            <SidebarTab
              href={node!.node!.fields!.slug}
              active={
                stripTrailingSlash(node!.node!.fields!.slug) ===
                stripTrailingSlash(currentPath)
              }
              key={`sidebarTab-${i}`}
            >
              {node!.node!.frontmatter!.navTitle}
            </SidebarTab>
          ))}
        </Sidebar>
        <Content>
          <ContentNeedToKnowSection listOfTips={md.frontmatter.needToKnow} />
          <ContentMarkdownSection>
            {/*
            // @ts-ignore */}
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </ContentMarkdownSection>
        </Content>
      </SidebarAndContent>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMdx(filter: { fields: { slug: { regex: "^/guidelines/" } } }) {
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
        needToKnow
      }
    }
  }
`

// <pre>data: {JSON.stringify(data)}</pre>
// <pre>pageContext: {JSON.stringify(pageContext)}</pre>
// <pre>location.pathname: {JSON.stringify(location)}</pre>
