import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { TailwindStoryTemplate } from "~storybook/components/TailwindStoryTemplate"
import { flattenEntries } from "../../../../helpers/flattenEntries"
import { utilityDescription } from "../../../../helpers/utilityDescription"

const prefix = "border-"
const classEntries = flattenEntries(
  prefix,
  kaizenTailwindTheme.borderColor || {}
)

export default {
  title: "Tier 1/Tokens/Colour/Tailwind/Border Color",
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

export const BorderColor: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <TailwindStoryTemplate
    compiledCssPropertyName="border-color"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div
        className={classnames(
          "rounded w-[100px] h-[100px] border",
          utilityClass.replace("-DEFAULT", "")
        )}
      />
    )}
    isReversed={isReversed}
  />
)
