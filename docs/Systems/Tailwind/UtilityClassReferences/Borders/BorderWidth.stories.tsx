import React from "react"
import { StoryFn } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "border-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.borderWidth || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: "Systems/Tailwind/Utility Class References/Borders/Border Width",
  component: <div>Hello</div>,
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
    compiledCssPropertyName="border-width"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div
        className={classnames(
          "w-[100px] h-[100px] border-solid border-[black]",
          utilityClass
        )}
      />
    )}
    isReversed={isReversed}
  />
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Border Width"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
