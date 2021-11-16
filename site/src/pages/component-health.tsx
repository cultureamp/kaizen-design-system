import { graphql } from "gatsby"
import * as React from "react"
import { Heading, Icon, Paragraph } from "@kaizen/component-library"

import successIcon from "@kaizen/component-library/icons/success-white.icon.svg"
import subtractIcon from "@kaizen/component-library/icons/subtract-white.icon.svg"

import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import { ContentOnly, Content } from "../components/ContentOnly"
import { sortSidebarTabs } from "../templates/util"
import { healthAttributeMap } from "../constants"
import { calculateHealthTotals } from "../utils/calculateHealthTotals"
import styles from "./component-health.scss"

const ComponentPageHeader = (
  <PageHeader
    headingText="Component health"
    summaryParagraph="View the health status of all Kaizen components at a glance."
  />
)

export default ({ data, location }) => {
  const componentsSorted = sortSidebarTabs(data.allMdx.edges)
  const componentsFiltered = componentsSorted.filter(
    component => component.node?.frontmatter.navTitle !== "Overview"
  )
  const totals = calculateHealthTotals(
    componentsFiltered.map(component => component.node.frontmatter),
    healthAttributeMap
  )

  return (
    <Layout
      pageTitle="Component health"
      currentPath={location.pathname}
      pageHeader={ComponentPageHeader}
    >
      <ContentOnly>
        <Content>
          <table className={styles.healthTable}>
            <thead>
              <tr>
                <th>
                  <Heading tag="span" variant="heading-6">
                    Component
                  </Heading>
                </th>
                {healthAttributeMap.map(attribute => (
                  <th key={attribute.id} className={styles.attributeCol}>
                    <Heading tag="span" variant="heading-6">
                      {attribute.positive}
                    </Heading>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {componentsFiltered.map(mdx => (
                <tr key={mdx.node.id}>
                  <td className={styles.componentTitle}>
                    <Paragraph variant="body" tag="span">
                      {mdx.node.frontmatter.title}
                    </Paragraph>
                  </td>
                  {healthAttributeMap.map(attribute => {
                    if (!mdx.node.frontmatter.health) {
                      return <td key={attribute.id}></td>
                    }

                    return (
                      <td
                        key={attribute.id}
                        className={
                          mdx.node.frontmatter.health[attribute.id]
                            ? styles.positive
                            : styles.negative
                        }
                      >
                        {mdx.node.frontmatter.health[attribute.id] ? (
                          <Icon
                            icon={successIcon}
                            title={attribute.positive}
                            role="img"
                          />
                        ) : null}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <Heading tag="span" variant="heading-4">
                    Total ({componentsFiltered.length})
                  </Heading>
                </td>
                {healthAttributeMap.map(attribute => {
                  const count = totals[attribute.id]
                  const percentage = (count / componentsFiltered.length) * 100
                  return (
                    <td key={attribute.id}>
                      <Heading tag="span" variant="heading-4">
                        {count}
                      </Heading>

                      <Paragraph as="span" variant="small">
                        ({percentage.toFixed(0)}%)
                      </Paragraph>
                    </td>
                  )
                })}
              </tr>
            </tfoot>
          </table>
        </Content>
      </ContentOnly>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(filter: { fields: { slug: { regex: "/^/components//" } } }) {
      edges {
        node {
          frontmatter {
            navTitle
            title
            health {
              designed
              documented
              implemented
              latestDesign
              allVariants
              responsive
              internationalized
              accessible
            }
          }
        }
      }
    }
  }
`
