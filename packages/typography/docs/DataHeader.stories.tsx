import React from "react"
import { CATEGORIES } from "../../../storybook/constants"
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
          <h4>{locale}</h4>
          <DataHeader
            locale={locale}
            unitType="liter"
            value={200}
            variant="heading-1"
          />
        </div>
      ))}
    </div>
  )
}
