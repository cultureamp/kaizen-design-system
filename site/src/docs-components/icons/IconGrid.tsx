import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import IconTile from "./IconTile"

import styles from "./IconGrid.scss"

const IconGrid: React.SFC = props => (
  <StaticQuery
    query={graphql`
      query IconQuery {
        allFile(filter: { sourceInstanceName: { eq: "icons" } }) {
          edges {
            node {
              publicURL
              relativePath
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <div className={styles.iconGrid}>
          {data.allFile.edges.map((edge: any) => (
            <IconTile
              path={edge.node.publicURL}
              filename={edge.node.relativePath}
            />
          ))}
        </div>
      </div>
    )}
  />
)

export default IconGrid
