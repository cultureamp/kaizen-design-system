import React from "react"
import { StoryFn } from "@storybook/react"
import classnames from "classnames"
import { TailwindStoryTemplate } from "~tailwind/_docs/utils/TailwindStoryTemplate"
import { flattenEntries } from "~tailwind/_docs/utils/flattenEntries"
import { utilityDescription } from "~tailwind/_docs/utils/utilityDescription"
import { kaizenTailwindTheme } from "~tailwind/tailwind-presets"

const prefix = "text-"
const classEntries = flattenEntries(prefix, kaizenTailwindTheme.colors ?? {})

export default {
  title: "Guides/Tailwind/Utility Class References/Typography/Text Color",
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

export const TextColor: StoryFn<{ isReversed: boolean }> = ({ isReversed }) => (
  <TailwindStoryTemplate
    compiledCssPropertyName="color"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div className="flex items-center h-100">
        <p
          className={classnames(
            "font-family-paragraph p-8 rounded font-weight-display text-heading-3 m-0 mr-16",
            utilityClass
          )}
        >
          Light bg
        </p>
        <p
          className={classnames(
            "font-family-paragraph p-8 bg-[black] rounded font-weight-display text-heading-3 m-0",
            utilityClass
          )}
        >
          Dark bg
        </p>
      </div>
    )}
    isReversed={isReversed}
  />
)
