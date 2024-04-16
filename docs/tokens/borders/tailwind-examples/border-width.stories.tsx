import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { TailwindStoryTemplate } from "~storybook/components/TailwindStoryTemplate"
import { utilityDescription } from "../../../helpers/utilityDescription"

const prefix = "border-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme.borderWidth || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: "Tier 1/Tokens/Borders/Tailwind/Border Width",
  parameters: {
    a11y: { disable: true },
    chromatic: { disable: false },
    docsLayout: "fullPage",
    docs: {
      description: {
        component: utilityDescription(prefix, classEntries[1].utilityClassName),
      },
    },
  },
} satisfies Meta

export const BorderWidth: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <TailwindStoryTemplate
    compiledCssPropertyName="border-width"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div
        className={classnames(
          "w-[100px] h-[100px] border rounded",
          !utilityClass.includes("-DEFAULT") && utilityClass
        )}
      />
    )}
    isReversed={isReversed}
  />
)
