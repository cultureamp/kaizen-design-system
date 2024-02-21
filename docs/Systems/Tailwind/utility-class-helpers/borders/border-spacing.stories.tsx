import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "kz-border-spacing-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme.spacing || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: "Systems/Tailwind/Utility Class References/Borders/Border Spacing",
  parameters: {
    a11y: { disable: true },
    chromatic: { disable: false },
    docsLayout: "fullPage",
    docs: {
      description: {
        component: utilityDescription(prefix, classEntries[0].utilityClassName),
      },
    },
  },
} satisfies Meta

export const BorderSpacing: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <UtilityClassTemplate
    compiledCssPropertyName="kz-border-spacing"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <table className={utilityClass}>
        <tbody>
          <tr>
            <td className="kz-outline-[black] kz-outline-1 kz-outline">
              Tutant
            </td>
            <td className="kz-outline-[black] kz-outline-1 kz-outline">
              Meenage
            </td>
          </tr>
          <tr>
            <td className="kz-outline-[black] kz-outline-1 kz-outline">
              Neetle
            </td>
            <td className="kz-outline-[black] kz-outline-1 kz-outline">
              Teetles
            </td>
          </tr>
        </tbody>
      </table>
    )}
    isReversed={isReversed}
  />
)
