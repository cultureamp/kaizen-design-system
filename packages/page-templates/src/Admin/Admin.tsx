import React from "react"
import { TitleBlockZen } from "@kaizen/draft-title-block-zen"
import { Box } from "@kaizen/component-library"
import { Heading } from "@kaizen/typography"
import { Container, Content } from "@kaizen/draft-page-layout"
import styles from "./Admin.scss"

interface AdminProps {
  onNavPress: () => void
}

export const Admin = (props: AdminProps) => (
  <>
    <TitleBlockZen
      variant="admin"
      title="Account admin"
      breadcrumb={{
        path: "#",
        text: "Back to home",
      }}
    />
    <Container>
      <Content>
        <div className={styles.flex}>
          <Box classNameOverride={styles.sidebar}>
            <ul className={styles.navList}>
              <li>
                <button className={styles.navItem} onClick={props.onNavPress}>
                  Survey settings
                </button>
              </li>
              <li>
                <button className={styles.navItem} tabIndex={-1}>
                  Administrators
                </button>
              </li>
            </ul>
          </Box>
          <div className={styles.content}>
            <Heading variant="heading-2" tag="h1" style={{ flex: "1 0 auto" }}>
              Administrators
            </Heading>
          </div>
        </div>
      </Content>
    </Container>
  </>
)
