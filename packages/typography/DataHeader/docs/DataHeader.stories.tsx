import { Heading } from "@kaizen/component-library"
import React from "react"
import { CATEGORIES } from "../../../../storybook/constants"
import { DataHeader } from "../src/DataHeader"
import styles from "./DataHeader.stories.scss"

export default {
  title: `${CATEGORIES.components}/DataHeader`,
  component: DataHeader,
  parameters: {
    docs: {
      description: {
        component: 'import { DataHeader } from "@kaizen/typography"',
      },
    },
  },
}

export const Uncontrolled = () => {
  const locales = ["ja-JP", "zh-CN", "en-US", "fr-FR", "he-IL", "ar-AE"]
  return (
    <div className={styles.wrapper}>
      {locales.map(locale => (
        <div className={styles.box}>
          <Heading variant="heading-4" tag="h4">
            {locale}
          </Heading>
          <DataHeader
            locale={locale}
            unitType="percentage"
            value={200}
            variant="heading-1"
          />
        </div>
      ))}
    </div>
  )
}
