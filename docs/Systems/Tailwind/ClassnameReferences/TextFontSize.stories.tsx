import React from "react"
import { Story } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { CATEGORIES } from "../../../../storybook/constants"
import { UtilityClassTemplate } from "../components/UtilityClassTemplate"
import { utilityDescription } from "../helpers/utilityDescription"

const prefix = "text-"
const classEntries = Object.entries(kaizenTailwindTheme?.fontSize || []).map(
  ([suffix, cssProperty]) => ({
    utilityClassName: `${prefix}${suffix}`,
    cssProperty,
  })
)

export default {
  title: `${CATEGORIES.tailwind}/Classname References/Typography/Font Size`,
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
    classKeyValues={classEntries}
    renderExampleComponent={(cssProperty): React.ReactElement => (
      <p style={{ fontSize: cssProperty }}>Aa</p>
    )}
    isReversed={isReversed}
  />
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Font Size"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
