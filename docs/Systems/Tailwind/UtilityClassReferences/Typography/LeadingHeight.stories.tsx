import React from "react"
import { Story } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { StoryWrapper } from "../../../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../../../storybook/constants"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"
import styles from "../styles.module.scss"

const prefix = "leading-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.lineHeight || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: `${CATEGORIES.tailwind}/Utility Class References/Typography/Line Height`,
  parameters: {
    docs: {
      description: {
        component: utilityDescription(prefix, classEntries[0].utilityClassName),
      },
    },
  },
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <UtilityClassTemplate
    compiledCssPropertyName="line-height"
    classKeyValues={classEntries}
    renderExampleComponent={(cssProperty): React.ReactElement => (
      <p style={{ lineHeight: cssProperty }} className={styles.wrappedText}>
        Tutant Meenage Neetle Teetles
      </p>
    )}
    isReversed={isReversed}
  />
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Line Height"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
