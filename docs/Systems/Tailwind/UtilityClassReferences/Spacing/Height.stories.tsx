import React from "react"
import { Story } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { CATEGORIES } from "../../../../../storybook/constants"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "h-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.height || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: `${CATEGORIES.tailwind}/Utility Class References/Spacing/Height`,
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
    compiledCssPropertyName="height"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div className="flex flex-col-reverse w-min border-solid rounded-default h-[200px]">
        <div
          className={classnames(
            "flex justify-center items-center bg-blue-400 w-[100px]",
            utilityClass
          )}
        >
          {utilityClass.includes("min") ||
          utilityClass.includes("max") ||
          utilityClass.includes("fit") ||
          utilityClass.includes("auto") ? (
            <div className="p-4 w-min bg-blue-100 border-dashed font-family-paragraph border-w-[1px]">
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
StickerSheetDefault.storyName = "Height"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
