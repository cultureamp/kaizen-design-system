import { Icon } from "@kaizen/component-library"
import { Link } from "gatsby"
import * as React from "react"
import ContentMarkdownSection from "../components/ContentMarkdownSection"
import { Content, ContentOnly } from "../components/ContentOnly"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import md from "../components/markdownComponents"
import PageHeader from "../components/PageHeader"

import exclamationIcon from "@kaizen/component-library/icons/exclamation.icon.svg"

const FourOhFourPageHeader = (
  <PageHeader
    headingText={
      <span style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            display: "inline-block",
            width: "1em",
            marginRight: "0.3em",
          }}
        >
          <Icon icon={exclamationIcon} role="presentation" inheritSize />
        </span>{" "}
        Not found
      </span>
    }
    summaryParagraph="We couldn’t find that page."
    headingOnly
  />
)

export default props => (
  <Layout
    pageTitle="404"
    pageHeader={FourOhFourPageHeader}
    footer={<Footer />}
    trimBottomOfCardToContent
    fullWidthContent={true}
  >
    <ContentOnly>
      <Content>
        <ContentMarkdownSection>
          <md.h2>Try one of these instead</md.h2>
          <md.ul>
            <md.li>
              <Link to="/guidelines/color">Color</Link>
            </md.li>
            <md.li>
              <Link to="/components/button">Button</Link>
            </md.li>
            <md.li>
              <Link to="/language/grammar">Style and punctuation</Link>
            </md.li>
            <md.li>
              <Link to="/guidelines/overview">Guidelines</Link>
            </md.li>
            <md.li>
              <Link to="/components/overview">Components</Link>
            </md.li>
            <md.li>
              <Link to="/language/overview">Language</Link>
            </md.li>
            <md.li>
              <Link to="/storybook">Storybook</Link>
            </md.li>
          </md.ul>
        </ContentMarkdownSection>
      </Content>
    </ContentOnly>
  </Layout>
)
