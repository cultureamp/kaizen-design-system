import { graphql } from "gatsby"
import * as React from "react"
import { Heading, Icon, Paragraph } from "@kaizen/component-library"
import checkIcon from "@kaizen/component-library/icons/check.icon.svg"
import closeIcon from "@kaizen/component-library/icons/close.icon.svg"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import { ContentOnly, Content } from "../components/ContentOnly"
import { sortSidebarTabs } from "../templates/util"
import { healthAttributes } from "../constants"
import styles from "./component_health.scss"

const ComponentPageHeader = (
  <PageHeader
    headingText="Component health"
    summaryParagraph="View the health status of all Kaizen components at a glance."
  />
)

/**
 * TODO: add decription for this
 *
 * @param components
 * @returns
 */
const calculateTotals = components =>
  components.reduce((totalsAccumlator, currentComponent) => {
    const updatedCounts = healthAttributes.reduce(
      (healthAccumlator, currentHealthAttribute) => {
        const isTick =
          currentComponent.node.frontmatter.health &&
          currentComponent.node.frontmatter.health[currentHealthAttribute.id]
        if (!isTick) return healthAccumlator

        const hasExistingCount = totalsAccumlator[currentHealthAttribute.id]
        return {
          ...healthAccumlator,
          [currentHealthAttribute.id]: hasExistingCount
            ? totalsAccumlator[currentHealthAttribute.id] + 1
            : 1,
        }
      },
      {}
    )

    return {
      ...totalsAccumlator,
      ...updatedCounts,
    }
  }, {})

export default ({ data, location }) => {
  const componentsSorted = sortSidebarTabs(data.allMdx.edges)
  const componentsFiltered = componentsSorted.filter(
    component => component.node
  )
  const totals = calculateTotals(componentsFiltered)

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
                {healthAttributes.map(attribute => (
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
                  {healthAttributes.map(attribute => {
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
                            icon={checkIcon}
                            title={attribute.positive}
                            role="img"
                          />
                        ) : (
                          <Icon
                            icon={closeIcon}
                            title={attribute.negative}
                            role="img"
                          />
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                {healthAttributes.map(attribute => (
                  <td key={attribute.id}>{totals[attribute.id]}</td>
                ))}
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
