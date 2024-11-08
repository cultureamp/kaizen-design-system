import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { TailwindStoryTemplate } from "~tailwind/_docs/utils/TailwindStoryTemplate"
import { utilityDescription } from "~tailwind/_docs/utils/utilityDescription"
import { kaizenTailwindTheme } from "~tailwind/tailwind-presets"

const prefix = "border-spacing-"
const classEntries: { utilityClassName: string; cssProperty: string }[] = Object.entries(
  kaizenTailwindTheme.spacing || [],
).map(([suffix, cssProperty]) => ({
  utilityClassName: `${prefix}${suffix}`,
  cssProperty,
}))

export default {
  title: "Guides/Tailwind/Utility Class References/Borders/Border Spacing",
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

export const BorderSpacing: StoryFn<{ isReversed: boolean }> = ({ isReversed }) => (
  <TailwindStoryTemplate
    compiledCssPropertyName="border-spacing"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <table className={utilityClass}>
        <tbody>
          <tr>
            <td className="outline-[black] outline-1 outline">Tutant</td>
            <td className="outline-[black] outline-1 outline">Meenage</td>
          </tr>
          <tr>
            <td className="outline-[black] outline-1 outline">Neetle</td>
            <td className="outline-[black] outline-1 outline">Teetles</td>
          </tr>
        </tbody>
      </table>
    )}
    isReversed={isReversed}
  />
)
