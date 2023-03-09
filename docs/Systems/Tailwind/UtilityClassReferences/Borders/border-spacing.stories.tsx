import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "border-spacing-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.spacing || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: "Systems/Tailwind/Utility Class References/Borders/Border Spacing",
  parameters: {
    docs: {
      description: {
        component: utilityDescription(prefix, classEntries[0].utilityClassName),
      },
    },
  },
} as Meta

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <UtilityClassTemplate
    compiledCssPropertyName="border-spacing"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <table className={utilityClass}>
        <tbody>
          <tr>
            <td className={classnames("outline-[black] outline-1 outline")}>
              Tutant
            </td>
            <td className={classnames("outline-[black] outline-1 outline")}>
              Meenage
            </td>
          </tr>
          <tr>
            <td className={classnames("outline-[black] outline-1 outline")}>
              Neetle
            </td>
            <td className={classnames("outline-[black] outline-1 outline")}>
              Teetles
            </td>
          </tr>
        </tbody>
      </table>
    )}
    isReversed={isReversed}
  />
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Border Spacing"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
