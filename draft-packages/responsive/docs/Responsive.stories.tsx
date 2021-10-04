import React from "react"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import Responsive from "../Responsive"
import styles from "./stories.scss"

export default {
  title: `${CATEGORIES.components}/Responsive`,
  component: Responsive,
  parameters: {
    docs: {
      description: {
        component: 'import { Responsive } from "@kaizen/draft-responsive"',
      },
    },
  },
}

export const DefaultKaizenSiteDemo = () => (
  <div style={{ width: "100%" }}>
    <div className={styles.pageComponent}>
      <Responsive />
    </div>
  </div>
)

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
