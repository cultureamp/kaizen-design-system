import { Icon, Box, Paragraph } from "@kaizen/component-library"
import { Card } from "@kaizen/draft-card"
import { Divider } from "@kaizen/draft-divider"
import * as React from "react"
import { Tag } from "@kaizen/draft-tag"
import markdownComponents from "./markdownComponents"
const linkIcon = require("./images/link.svg").default
const styles = require("./RelatedIssues.scss")

const RelatedIssues = ({ issues }) => {
  if (issues.length === 0) return null

  const formatDate = date => {
    const convertedDate = new Date(date)
    return `${convertedDate.getDay()}/${convertedDate.getMonth()}/${convertedDate.getFullYear()}`
  }

  const toTitleCase = str =>
    str.replace(
      /\w\S*/g,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )

  return (
    <div>
      <markdownComponents.h2>
        <span className="md-anchor-offset" id="related-issues" />
        <a className="md-heading-link" href="#related-issues">
          <Icon icon={linkIcon} title="Anchor" />
        </a>
        Issues
      </markdownComponents.h2>
      <Box pt={1.5}>
        <Card>
          {issues.map(({ node }, i) => (
            <>
              <div className={styles.row}>
                <Box p={0.5}>
                  <Box>
                    <a href={node.html_url}>{node.title}</a>
                  </Box>
                  <Box pt={0.5}>
                    <Paragraph variant="small" color="dark-reduced-opacity">
                      Opened: {formatDate(node.created_at)} · Updated:{" "}
                      {formatDate(node.updated_at) ||
                        formatDate(node.created_at)}
                    </Paragraph>
                  </Box>
                </Box>
                <Box p={0.5}>
                  <Tag variant="sentimentNeutral" size="small">
                    {toTitleCase(node.state)}
                  </Tag>
                </Box>
              </div>
              {i < issues.length - 1 && <Divider variant="content" />}
            </>
          ))}
        </Card>
      </Box>
    </div>
  )
}

export default RelatedIssues
