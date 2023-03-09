import React from "react"
import { StoryFn } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { flattenEntries } from "../../helpers/flattenEntries"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "text-"
const classEntries = flattenEntries(prefix, kaizenTailwindTheme?.colors || {})

export default {
  title: "Systems/Tailwind/Utility Class References/Typography/Text Color",
  parameters: {
    docs: {
      description: {
        component: utilityDescription(prefix, classEntries[0].utilityClassName),
      },
    },
  },
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <UtilityClassTemplate
    compiledCssPropertyName="color"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div className="flex items-center h-100">
        <p
          className={classnames(
            "font-family-paragraph p-8 rounded-default font-weight-display text-heading-3 m-0 mr-16",
            utilityClass
          )}
        >
          Light bg
        </p>
        <p
          className={classnames(
            "font-family-paragraph p-8 bg-[black] rounded-default font-weight-display text-heading-3 m-0",
            utilityClass
          )}
        >
          Dark bg
        </p>
      </div>
    )}
    isReversed={isReversed}
  />
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Text Color"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
