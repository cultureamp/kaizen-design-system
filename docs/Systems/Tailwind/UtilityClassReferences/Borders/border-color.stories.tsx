import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { flattenEntries } from "../../helpers/flattenEntries"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "border-"
const classEntries = flattenEntries(
  prefix,
  kaizenTailwindTheme?.borderColor || {}
)

export default {
  title: "Systems/Tailwind/Utility Class References/Borders/Border Color",
  parameters: {
    docs: {
      description: {
        component: utilityDescription(prefix, classEntries[0].utilityClassName),
      },
    },
  },
} satisfies Meta

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <UtilityClassTemplate
    compiledCssPropertyName="border-color"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div
        className={classnames(
          "rounded-default w-[100px] h-[100px] border-solid",
          utilityClass
        )}
      />
    )}
    isReversed={isReversed}
  />
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Border Color"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
