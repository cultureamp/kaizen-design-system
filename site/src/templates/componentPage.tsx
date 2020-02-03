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
import StorybookDemo from "../components/StorybookDemo"
import { sortSidebarTabs, stripTrailingSlash } from "./util"

const renderSidebarTabs = (pages, currentPath) => {
  return pages.map((node, i) => (
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
}

export default ({ data, pageContext, location }) => {
  const md = data.mdx
  const allPages = data.allMdx.edges
  const currentPath = location.pathname

  const overviewPage = allPages.filter(
    el => el.node.frontmatter.navTitle === "Overview"
  )
  const pagesWithoutOverview = sortSidebarTabs(
    allPages.filter(el => el.node.frontmatter.navTitle !== "Overview")
  )

  const renderStorybookIFrame = () => {
    if (!md.frontmatter.demoStoryId) {
      // tslint:disable-next-line: no-console
      console.error(
        "Could not find a demo story ID. Please make sure there is a frontmatter field called demoStoryId in the component docs. The ID comes from the Storybook URL for a given story."
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
          <ContentNeedToKnowSection listOfTips={md.frontmatter.needToKnow} />
          {renderStorybookIFrame()}
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
        demoStoryId
        demoStoryHeight
      }
    }
  }
`
