import React from "react"
import { Story } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { CATEGORIES } from "../../../../../storybook/constants"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "w-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.width || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: `${CATEGORIES.tailwind}/Utility Class References/Spacing/Width`,
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
    compiledCssPropertyName="width"
    classKeyValues={classEntries}
    renderExampleComponent={(cssProperty): React.ReactElement => (
      <div className="w-100 border-solid rounded-default">
        <div
          className="h-100 min-h-[50px] flex items-center bg-blue-400"
          style={{ width: cssProperty }}
        >
          {cssProperty.includes("content") ? (
            <div className="my-12 font-family-paragraph bg-blue-100 p-4 border-dashed border-w-[1px]">
              Inner content
            </div>
          ) : null}
        </div>
      </div>
    )}
    isReversed={isReversed}
  />
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Width"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
