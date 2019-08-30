import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import {
  Content,
  Sidebar,
  SidebarAndContent,
  SidebarTab,
} from "../components/SidebarAndContent"

export default ({ data, pageContext, location }) => {
  const md = data.markdownRemark
  const allPages = data.allMarkdownRemark.edges
  const currentPath = location.pathname

  const ComponentPageHeader = (
    <PageHeader
      headingText="Modal"
      summaryParagraph="Modals show additional content in a layer above the page with an overlay covering the page behind. Use sparingly."
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
          <h1>{md.frontmatter.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: md.html }} />
          <pre>data: {JSON.stringify(data)}</pre>
          <pre>pageContext: {JSON.stringify(pageContext)}</pre>
          <pre>location.pathname: {JSON.stringify(location.pathname)}</pre>
        </Content>
      </SidebarAndContent>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "^/components/" } } }
    ) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
