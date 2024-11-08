import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import classnames from "classnames"
import { TailwindStoryTemplate } from "~tailwind/_docs/utils/TailwindStoryTemplate"
import { utilityDescription } from "~tailwind/_docs/utils/utilityDescription"
import { kaizenTailwindTheme } from "~tailwind/tailwind-presets"

const prefix = "leading-"
const classEntries: { utilityClassName: string; cssProperty: string }[] =
  Object.entries(kaizenTailwindTheme.lineHeight ?? []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    }),
  )

export default {
  title: "Guides/Tailwind/Utility Class References/Typography/Line Height",
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

export const LineHeight: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <TailwindStoryTemplate
    compiledCssPropertyName="line-height"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <p className={classnames("w-0", utilityClass)}>
        Tutant Meenage Neetle Teetles
      </p>
    )}
    isReversed={isReversed}
  />
)
