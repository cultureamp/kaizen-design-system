import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as React from "react"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import {
  Content,
  ContentMarkdownSection,
  ContentNeedToKnowSection,
  Sidebar,
  SidebarAndContent,
  SidebarSection,
  SidebarTab,
} from "../components/SidebarAndContent"

export default ({ data, pageContext, location }) => {
  const md = data.mdx
  const allPages = data.allMdx.edges
  const currentPath = location.pathname

  const ComponentPageHeader = (
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
      pageHeader={ComponentPageHeader}
      footer={<Footer />}
    >
      <SidebarAndContent>
        <Sidebar>
          <SidebarSection>
            {allPages.map((node, i) => {
              if (!node!.node!.frontmatter!.navTitle) return undefined
              return (
                <SidebarTab
                  href={node!.node!.fields!.slug}
                  active={node!.node!.fields!.slug === currentPath}
                  key={`sidebarTab-${i}`}
                >
                  {node!.node!.frontmatter!.title}
                </SidebarTab>
              )
            })}
          </SidebarSection>
        </Sidebar>
        <Content>
          <ContentNeedToKnowSection listOfTips={md.frontmatter.needToKnow} />
          <ContentMarkdownSection>
            <h1>{md.frontmatter.navTitle}</h1>
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
    allMdx(filter: { fields: { slug: { regex: "/^/components/" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            navTitle
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
        summaryParagraph
      }
    }
  }
`
