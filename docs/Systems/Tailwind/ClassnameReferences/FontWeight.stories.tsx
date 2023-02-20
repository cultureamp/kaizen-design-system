import React from "react"
import { Story } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { CATEGORIES } from "../../../../storybook/constants"
import { UtilityClassTemplate } from "../components/UtilityClassTemplate"
import { utilityDescription } from "../helpers/utilityDescription"

const prefix = "font-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.fontWeight || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: `${CATEGORIES.tailwind}/ClassName References/Typography/Font Weight`,
  component: <div>Hello</div>,
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
      <p className="font-family-paragraph" style={{ fontWeight: cssProperty }}>
        Aa
      </p>
    )}
    isReversed={isReversed}
  />
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Font Weight"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
