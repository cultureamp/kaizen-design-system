import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as React from "react"
import ContentMarkdownSection from "../components/ContentMarkdownSection"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import {
  Content,
  ContentNeedToKnowSection,
  Sidebar,
  SidebarAndContent,
  SidebarSection,
  SidebarTab,
} from "../components/SidebarAndContent"

const stripTrailingSlash = (str: string) => str.replace(/\/$/, "")

const sortSidebarTabs = tabs => {
  const newTabs = [...tabs].sort((a, b) =>
    a.node.frontmatter.navTitle > b.node.frontmatter.navTitle ? 1 : -1
  )
  return newTabs
}

const renderSidebarTabs = (pages, currentPath, sectionName) => {
  return pages.map((node, i) => (
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
}

export default ({ data, pageContext, location }) => {
  const md = data.mdx
  const allPages = data.allMdx.edges
  const overviewPage = allPages.filter(
    el => el.node.frontmatter.navTitle === "Overview"
  )
  const pagesWithoutOverview = allPages.filter(
    el => el.node.frontmatter.navTitle !== "Overview"
  )
  const guidelinePages = sortSidebarTabs(
    pagesWithoutOverview.filter(el => !el.node.frontmatter.inComparingSection)
  )
  const comparingPages = sortSidebarTabs(
    pagesWithoutOverview.filter(el => el.node.frontmatter.inComparingSection)
  )
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
      footer={<Footer />}
    >
      <SidebarAndContent>
        <Sidebar>
          <SidebarSection>
            {renderSidebarTabs(overviewPage, currentPath, "Overview")}
          </SidebarSection>
          <SidebarSection title="Comparing components">
            {renderSidebarTabs(
              comparingPages,
              currentPath,
              "Comparing components"
            )}
          </SidebarSection>
          <SidebarSection title="Guidelines">
            {renderSidebarTabs(guidelinePages, currentPath, "Guidelines")}
          </SidebarSection>
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
            inComparingSection
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
