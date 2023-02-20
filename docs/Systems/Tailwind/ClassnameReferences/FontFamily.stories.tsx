import React from "react"
import { Story } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { CATEGORIES } from "../../../../storybook/constants"
import { UtilityClassTemplate } from "../components/UtilityClassTemplate"
import { utilityDescription } from "../helpers/utilityDescription"

const prefix = "font-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.fontFamily || []).map(
    ([suffix, cssPropertyArr]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty: cssPropertyArr[0],
    })
  )

export default {
  title: `${CATEGORIES.tailwind}/Classname References/Typography/Font Family`,
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
      <p style={{ fontFamily: cssProperty }}>Aa</p>
    )}
    isReversed={isReversed}
  />
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Font Family"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
