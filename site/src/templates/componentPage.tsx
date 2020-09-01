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

export default ({ data, pageContext, location }) => {
  const md = data.mdx
  const allPages = data.allMdx.edges
  const currentPath = location.pathname
  const toc = data.mdx.tableOfContents.items // table of contents

  const overviewPage = allPages.filter(
    el => el.node.frontmatter.navTitle === "Overview"
  )
  const pagesWithoutOverview = sortSidebarTabs(
    allPages.filter(el => el.node.frontmatter.navTitle !== "Overview")
  )

  const renderStorybookIFrame = () => {
    if (!md.frontmatter.demoStoryId) {
      // eslint-disable-next-line no-console
      console.warn(
        `Could not find a demo story ID for "${md.frontmatter.title}". Please make sure there is a frontmatter field called demoStoryId in the component docs. The ID comes from the Storybook URL for a given story.`
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

  const ToC = (items, depth) => {
    if (depth === 0) {
      return
    }

    return items.map(item => {
      return <li key={item.url}><a href={item.url}>{item.title}</a>
        { item.items ? <ol>{ToC(item.items || [], depth - 1)}</ol> : null }
      </li>
    })
  }

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
          <ol>
            {ToC(toc, 4)}
          </ol>
          <ContentNeedToKnowSection listOfTips={md.frontmatter.needToKnow} />
          {md.frontmatter.title !== "Overview" && renderStorybookIFrame()}
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
      }
      tableOfContents
    }
  }
`
