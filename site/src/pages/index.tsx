import * as React from "react"
import { Content, ContentOnly } from "../components/ContentOnly"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"

const styles = require("./index.scss")

const HomePageHeader = (
  <PageHeader
    headingText="Kaizen"
    summaryParagraph={
      "Kaizen is Culture Amp’s design system. It’s the single source of truth\nfor our UX guidelines, design assets, and front-end code to help\nCulture Amp’s teams rapidly create a world-class experience."
    }
    headingOnly
  />
)

export default ({ location }) => (
  <Layout
    pageTitle="Kaizen Design System"
    currentPath={location.pathname}
    reverseFooter
    pageHeader={HomePageHeader}
  >
    <ContentOnly>
      <Content>
        <div className={styles.content}>
          <div className={styles.guidelinesImageContainer}></div>
          <div className={styles.componentsImageContainer}></div>
          <div className={styles.guidelinesTextContainer}>
            <div className={styles.heading}>Guidelines</div>
            <div className={styles.body}>
              Learn how to design and build cohesive and predictable products
              for Culture Amp.
            </div>
          </div>
          <div className={styles.componentsTextContainer}>
            <div className={styles.heading}>Components</div>
            <div className={styles.body}>
              Kaizen’s Component Library includes reusable code used to rapidly
              build pages.
            </div>
          </div>
        </div>
      </Content>
    </ContentOnly>
  </Layout>
)
