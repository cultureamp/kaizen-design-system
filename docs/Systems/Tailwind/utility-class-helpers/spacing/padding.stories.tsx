import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "p-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.spacing || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: "Systems/Tailwind/Utility Class References/Spacing/Padding",
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

export const Padding: StoryFn<{ isReversed: boolean }> = ({ isReversed }) => (
  <UtilityClassTemplate
    compiledCssPropertyName="padding"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <p
        className={classnames(
          "border border-purple-500 w-min rounded bg-blue-100",
          utilityClass
        )}
      >
        Padding
      </p>
    )}
    isReversed={isReversed}
  />
)
