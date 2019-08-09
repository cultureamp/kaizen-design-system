import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import {
  Content,
  Sidebar,
  SidebarAndContent,
  SidebarTab,
} from "../components/SidebarAndContent"

const stripTrailingSlash = (str: string) => str.replace(/\/$/, "")

export default ({ data, pageContext, location }) => {
  const md = data.markdownRemark
  const allPages = data.allMarkdownRemark.edges
  const currentPath = location.pathname

  return (
    <Layout pageTitle={md.frontmatter.title} currentPath={currentPath}>
      <SidebarAndContent>
        <Sidebar>
          {allPages.map(node => (
            <SidebarTab
              href={node!.node!.fields!.slug}
              active={
                stripTrailingSlash(node!.node!.fields!.slug) ===
                stripTrailingSlash(currentPath)
              }
            >
              {node!.node!.frontmatter!.navTitle}
            </SidebarTab>
          ))}
        </Sidebar>
        <Content>
          <h1>{md.frontmatter.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: md.html }} />
        </Content>
      </SidebarAndContent>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "^/guidelines/" } } }
    ) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

// <pre>data: {JSON.stringify(data)}</pre>
// <pre>pageContext: {JSON.stringify(pageContext)}</pre>
// <pre>location.pathname: {JSON.stringify(location)}</pre>
