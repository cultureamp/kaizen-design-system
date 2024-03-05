import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { TailwindStoryTemplate } from "~storybook/components/TailwindStoryTemplate"
import { flattenEntries } from "../../helpers/flattenEntries"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "bg-"
const classEntries = flattenEntries(prefix, kaizenTailwindTheme.colors || {})

export default {
  title:
    "Systems/Tailwind/Utility Class References/Backgrounds/Background Color",
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

export const BackgroundColor: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <TailwindStoryTemplate
    compiledCssPropertyName="background-color"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div
        className={classnames(
          "w-[100px] h-[100px] border border-purple-100 rounded",
          utilityClass
        )}
      />
    )}
    isReversed={isReversed}
  />
)
