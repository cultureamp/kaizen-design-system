import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
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

export default ({ data, pageContext, location }) => {
  const md = data.mdx
  const allPages = data.allMdx.edges
  const currentPath = location.pathname

  const ComponentPageHeader = (
    <PageHeader
      headingText="Modal"
      summaryParagraph="Modals show additional content in a layer above the page with an overlay covering the page behind. Use sparingly."
      tags={md.frontmatter.tags}
    />
  )

  return (
    <Layout
      pageTitle={md.frontmatter.title}
      currentPath={currentPath}
      pageHeader={ComponentPageHeader}
    >
      <SidebarAndContent>
        <Sidebar>
          {allPages.map(node => (
            <SidebarTab
              href={node!.node!.fields!.slug}
              active={node!.node!.fields!.slug === currentPath}
            >
              {node!.node!.frontmatter!.title}
            </SidebarTab>
          ))}
        </Sidebar>
        <Content>
          <ContentNeedToKnowSection listOfTips={md.frontmatter.needToKnow} />
          <ContentMarkdownSection>
            <h1>{md.frontmatter.title}</h1>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            <pre>data: {JSON.stringify(data)}</pre>
            <pre>pageContext: {JSON.stringify(pageContext)}</pre>
            <pre>location.pathname: {JSON.stringify(location.pathname)}</pre>
          </ContentMarkdownSection>
        </Content>
      </SidebarAndContent>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMdx(filter: { fields: { slug: { regex: "^/components/" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        tags
        needToKnow
      }
    }
  }
`
