import { Heading } from "@kaizen/component-library"
import { Button } from "@kaizen/draft-button"
import { assetUrl } from "@kaizen/hosted-assets"
import { graphql, useStaticQuery, withPrefix } from "gatsby"
import * as React from "react"
import { Content, ContentOnly } from "../components/ContentOnly"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"

import styles from "./index.scss"

const HomePageHeader = (
  <PageHeader
    headingText="Kaizen"
    summaryParagraph={`Kaizen is Culture Amp’s design system. It’s the single source of truth 
      for our UX guidelines, design assets, and front-end code to help Culture Amp’s teams rapidly 
      create a world-class experience.`}
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
          support how we work, and enhance our customers’ experience.
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
          <Button
            reversed
            label="Browse open roles"
            href="https://www.cultureamp.com/about/careers/"
          ></Button>
        </div>
      </div>
    </div>
  </div>
)

export default ({ location }) => {
  const data = useStaticQuery(graphql`
    query HomePageComponentsQuery {
      allMdx(filter: { fields: { slug: { regex: "^/components/" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout
      pageTitle="Kaizen Design System"
      currentPath={location.pathname}
      pageHeader={HomePageHeader}
      footer={<Footer reverseVariant extraContent={<FooterExtraContent />} />}
      fullWidthContent={true}
    >
      <ContentOnly>
        <Content>
          <div className={styles.content}>
            <div className={styles.guidelinesImageContainer}>
              <a href={withPrefix("/guidelines/overview")}>
                <img
                  src={assetUrl("illustrations/scene/kaizen-site-product.svg")}
                  alt="Guidelines"
                />
              </a>
            </div>
            <div className={styles.languageImageContainer}>
              <a href={withPrefix("/language/overview")}>
                <img
                  src={assetUrl("illustrations/scene/kaizen-site-language.svg")}
                  alt="Language"
                />
              </a>
            </div>
            <div className={styles.componentsImageContainer}>
              <a href={withPrefix("/components/overview")}>
                <img
                  src={assetUrl(
                    "illustrations/scene/kaizen-site-resources.svg"
                  )}
                  alt="Components"
                />
              </a>
            </div>
            <div className={styles.guidelinesTextContainer}>
              <div className={styles.headingContainer}>
                <Heading tag="div" variant="heading-2">
                  <a href={withPrefix("/guidelines/overview")}>Guidelines</a>
                </Heading>
              </div>
              <div className={styles.body}>
                Learn how to design and build cohesive and predictable products
                for Culture Amp.
              </div>
            </div>
            <div className={styles.languageTextContainer}>
              <div className={styles.headingContainer}>
                <Heading tag="div" variant="heading-2">
                  <a href={withPrefix("/language/overview")}>Language</a>
                </Heading>
              </div>
              <div className={styles.body}>
                Write consistent content in Culture Amp's voice and adhere to
                our style&nbsp;guidelines.
              </div>
            </div>
            <div className={styles.componentsTextContainer}>
              <div className={styles.headingContainer}>
                <Heading tag="div" variant="heading-2">
                  <a href={withPrefix("/components/overview")}>Components</a>
                </Heading>
              </div>
              <div className={styles.body}>
                Kaizen’s Component Library includes reusable code used to
                rapidly build pages.
              </div>
            </div>
          </div>
        </Content>
      </ContentOnly>
    </Layout>
  )
}
