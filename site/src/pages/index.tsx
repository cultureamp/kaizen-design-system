import { Button } from "@cultureamp/kaizen-component-library"
import * as React from "react"
import { Content, ContentOnly } from "../components/ContentOnly"
import Footer from "../components/Footer"
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

const FooterExtraContent = () => (
  <div className={styles.footer}>
    <div className={styles.footerInner}>
      <div className={styles.footerIntroduction}>
        <div className={styles.footerHeading}>Introducing Kaizen</div>
        <div className={styles.footerText}>
          Kaizen (“improvement”) is a Japanese business philosophy that focuses
          on continuous improvement. This is how we see our design system: an
          ever-evolving language that can be shaped, grown and nurtured to
          support how we work, and enhance our customer’s experience.
        </div>
      </div>
      <div className={styles.footerRecruitment}>
        <div className={styles.footerHeading}>Join our team</div>
        <div className={styles.footerText}>
          We’re always looking for great talent.
          <br />
          Join us to improve the future of work.
        </div>
        <div className={styles.footerLinkButton}>
          <Button reversed label="Browse open roles"></Button>
        </div>
      </div>
    </div>
  </div>
)

export default ({ location }) => (
  <Layout
    pageTitle="Kaizen Design System"
    currentPath={location.pathname}
    pageHeader={HomePageHeader}
    footer={<Footer reverseVariant extraContent={<FooterExtraContent />} />}
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
