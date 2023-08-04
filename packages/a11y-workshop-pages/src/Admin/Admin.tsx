import React from "react"
import { Box } from "@kaizen/component-library"
import { Container, Content } from "@kaizen/draft-page-layout"
import { TitleBlockZen } from "@kaizen/draft-title-block-zen"
import { Heading } from "@kaizen/typography"
import { Sidebar } from "./Sidebar"
import styles from "./Admin.module.scss"

interface AdminProps {
  onNavPress: (page: string) => void
}

export const Admin = (props: AdminProps): JSX.Element => (
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
            <Sidebar onNavPress={props.onNavPress} />
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
