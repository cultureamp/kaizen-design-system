import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { SidebarAndContent, Content } from "../components/SidebarAndContent"
import GuidelinesSidebar from "../components/GuidelinesSidebar"

export default ({ data, pageContext, location }) => {
  const md = data.markdownRemark

  return (
    <Layout pageTitle={md.frontmatter.title} currentPath={location.pathname}>
      <SidebarAndContent>
        <GuidelinesSidebar currentPath={location.pathname} />
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
