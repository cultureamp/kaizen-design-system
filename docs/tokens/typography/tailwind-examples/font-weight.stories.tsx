import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { TailwindStoryTemplate } from "~storybook/components/TailwindStoryTemplate"
import { utilityDescription } from "../../../helpers/utilityDescription"

const prefix = "font-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme.fontWeight || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: "Tier 1/Tokens/Typography/Tailwind/Font Weight",
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

export const FontWeight: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <TailwindStoryTemplate
    compiledCssPropertyName="font-weight"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <p className={utilityClass}>Aa</p>
    )}
    isReversed={isReversed}
  />
)
