import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as React from "react"
import ContentMarkdownSection from "../components/ContentMarkdownSection"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import RelatedIssues from "../components/RelatedIssues"
import {
  Content,
  ContentNeedToKnowSection,
  ContentHealth,
  Sidebar,
  SidebarAndContent,
  SidebarSection,
  SidebarTab,
  TableOfContents,
} from "../components/SidebarAndContent"
import StorybookDemo from "../components/StorybookDemo"
import { sortSidebarTabs, stripTrailingSlash } from "./util"

const renderSidebarTabs = (pages, currentPath) =>
  pages.map((node, i) => (
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
  ))

export default ({ data, location }) => {
  const md = data.mdx
  const allIssues = data.allIssue.edges
  const allPages = data.allMdx.edges
  const currentPath = location.pathname

  const overviewPage = allPages.filter(
    el => el.node.frontmatter.navTitle === "Overview"
  )
  const pagesWithoutOverview = sortSidebarTabs(
    allPages.filter(el => el.node.frontmatter.navTitle !== "Overview")
  )
  const relatedIssues = allIssues.filter(({ node }) => {
    if (!node.labels.length || !md.frontmatter.githubLabels) return false
    const labelsContainActiveComponent = md.frontmatter.githubLabels.some(
      tag => {
        const simplifiedLabels = node.labels.map(({ name }) => name)
        return simplifiedLabels.includes(tag)
      }
    )
    return labelsContainActiveComponent
  })

  const renderStorybookIFrame = () => {
    if (!md.frontmatter.demoStoryId) {
      // eslint-disable-next-line no-console
      console.warn(
        `Could not find a demo story ID for "${md.frontmatter.title}". Please ` +
          "make sure there is a frontmatter field called demoStoryId in the " +
          "component docs. The ID comes from the Storybook URL for a given story."
      )
      return undefined
    }
    return (
      <StorybookDemo
        demoId={md.frontmatter.demoStoryId}
        demoHeight={md.frontmatter.demoStoryHeight}
      />
    )
  }

  const ComponentPageHeader = (
    <PageHeader
      headingText={md.frontmatter.title}
      summaryParagraph={md.frontmatter.summaryParagraph}
      tags={md.frontmatter.tags}
      headerImageName={md.frontmatter.headerImage}
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
            {renderSidebarTabs(overviewPage, currentPath)}
            {renderSidebarTabs(pagesWithoutOverview, currentPath)}
          </SidebarSection>
        </Sidebar>
        <Content>
          {md.frontmatter.health && (
            <ContentHealth healthItems={md.frontmatter.health} />
          )}
          <ContentNeedToKnowSection listOfTips={md.frontmatter.needToKnow} />
          {md.frontmatter.title !== "Overview" && renderStorybookIFrame()}
          <ContentMarkdownSection>
            <RelatedIssues issues={relatedIssues} />
            <h1>{md.frontmatter.navTitle}</h1>
            {/*
            // @ts-ignore */}
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </ContentMarkdownSection>
        </Content>
        <TableOfContents items={md.tableOfContents.items} />
      </SidebarAndContent>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMdx(filter: { fields: { slug: { regex: "/^/components//" } } }) {
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
        headerImage
        demoStoryId
        demoStoryHeight
        githubLabels
        health {
          designed
          built
          latestDesign
          allVariants
          responsive
          internationalized
          accessible
        }
      }
      tableOfContents
    }
    allIssue {
      edges {
        node {
          id
          html_url
          title
          updated_at
          created_at
          state
          labels {
            name
          }
        }
      }
    }
  }
`
