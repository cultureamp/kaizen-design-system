import React from "react"
import { CATEGORIES } from "../../../storybook/constants"
import { DataHeader } from "../src/DataHeader"

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
    <>
      {locales.map(locale => (
        <>
          <h4>{locale}</h4>
          <DataHeader
            locale={locale}
            unitType="liter"
            value={200}
            variant="heading-1"
          />
        </>
      ))}
    </>
  )
}
