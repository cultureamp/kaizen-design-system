import * as React from "react"
import { Card } from "@kaizen/draft-card"
import { Heading, Icon, Paragraph } from "@kaizen/component-library"

const informationIcon = require("@kaizen/component-library/icons/information.icon.svg")
  .default
const styles = require("./Tile.scss")

export interface TileProps {
  title: string
  metadata?: string
  children?: React.ReactNode
  footerItems?: React.ReactNode[]
  info?: string
}

export const Tile = ({ children, title, metadata, footerItems }: TileProps) => (
  <div className={styles.wrapper}>
    <Card>
      <div className={styles.content}>
        <div className={styles.infoBtn}>
          <Icon icon={informationIcon} inheritSize />
        </div>
        <div className={styles.title}>
          <Heading variant="heading-4">{title}</Heading>
          {metadata && (
            <Paragraph variant="small" color="dark-reduced-opacity">
              {metadata}
            </Paragraph>
          )}
        </div>
        <div className={styles.children}>{children && children}</div>
        {footerItems && (
          <div className={styles.footerItems}>
            {footerItems.map(item => (
              <div className={styles.footerItem}>{item}</div>
            ))}
          </div>
        )}
      </div>
    </Card>
  </div>
)
