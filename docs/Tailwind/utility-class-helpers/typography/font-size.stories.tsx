import React from "react"
import { StoryFn } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { TailwindStoryTemplate } from "~storybook/components/TailwindStoryTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "text-"
const classEntries = Object.entries(kaizenTailwindTheme.fontSize || []).map(
  ([suffix, cssProperty]) => ({
    utilityClassName: `${prefix}${suffix}`,
    cssProperty,
  })
)

export default {
  title: "Guides/Tailwind/Utility Class References/Typography/Font Size",
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
}

export const FontSize: StoryFn<{ isReversed: boolean }> = ({ isReversed }) => (
  <TailwindStoryTemplate
    compiledCssPropertyName="font-size"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <p className={utilityClass}>Aa</p>
    )}
    isReversed={isReversed}
  />
)
