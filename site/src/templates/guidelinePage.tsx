import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import {
  Content,
  Sidebar,
  SidebarAndContent,
  SidebarTab,
} from "../components/SidebarAndContent"

const stripTrailingSlash = (str: string) => str.replace(/\/$/, "")

export default ({ data, pageContext, location }) => {
  const md = data.mdx
  const allPages = data.allMdx.edges
  const currentPath = location.pathname

  const GuidelinesPageHeader = (
    <PageHeader
      headingText={md.frontmatter.title}
      summaryParagraph={md.frontmatter.summaryParagraph}
      tags={[
        {
          text: "tag name",
          link: "",
        },
        {
          text: "tag 2",
          link: "",
        },
        {
          text: "other thing",
          link: "",
        },
        {
          text: "tag 67",
          link: "",
        },
        {
          text: "I love tags",
          link: "",
        },
      ]}
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
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
      }
    }
  }
`

// <pre>data: {JSON.stringify(data)}</pre>
// <pre>pageContext: {JSON.stringify(pageContext)}</pre>
// <pre>location.pathname: {JSON.stringify(location)}</pre>
