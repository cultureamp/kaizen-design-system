import * as React from "react"
import { Box } from "@kaizen/component-library"
import { Heading, Paragraph } from "@kaizen/typography"
import { Tag } from "@kaizen/draft-tag"

import styles from "./DeprecatedComponentList.scss"

export type DeprecatedComponentListItemProps = {
  deprecationDate: string
  title: string
  message: string
}

export const DeprecatedComponentListItem: React.VFC<
  DeprecatedComponentListItemProps
> = ({ deprecationDate, title, message }) => (
  <div className={styles.deprecatedComponentListItem}>
    <div className={styles.deprecatedComponentListItem_RemovalDate}>
      <Tag
        variant={
          deprecationDate.toLowerCase() === "tba"
            ? "default"
            : "sentimentPositive"
        }
      >
        {deprecationDate}
      </Tag>
    </div>
    <Box mb={0.25}>
      <Heading tag="span" variant="heading-4">
        {title}
      </Heading>
    </Box>
    <Paragraph variant="small" tag="span" color="dark-reduced-opacity">
      {message}
    </Paragraph>
  </div>
)

const DeprecatedComponentList = ({ deprecatedComponents }) => (
  <div className={styles.deprecatedComponentList}>
    {deprecatedComponents.map(component => {
      const { deprecationDate, title, deprecationMessage } =
        component.node.frontmatter

      return (
        <DeprecatedComponentListItem
          deprecationDate={deprecationDate}
          title={title}
          message={deprecationMessage}
        />
      )
    })}
  </div>
)

export default DeprecatedComponentList
