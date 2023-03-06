import React from "react"
import { Story } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "rounded-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.borderRadius || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: "Systems/Tailwind/Utility Class References/Borders/Border Radius",
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
    compiledCssPropertyName="border-radius"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div
        className={classnames("w-[100px] h-[100px] border-solid", utilityClass)}
      />
    )}
    isReversed={isReversed}
  />
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Border Radius"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
