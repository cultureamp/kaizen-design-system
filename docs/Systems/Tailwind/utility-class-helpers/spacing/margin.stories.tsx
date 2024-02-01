import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "m-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme.spacing || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: "Systems/Tailwind/Utility Class References/Spacing/Margin",
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

export const Margin: StoryFn<{ isReversed: boolean }> = ({ isReversed }) => (
  <UtilityClassTemplate
    compiledCssPropertyName="margin"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div className="w-min border rounded">
        <p
          className={classnames(
            "p-4 border border-dashed w-min rounded bg-blue-100",
            utilityClass
          )}
        >
          Margin
        </p>
      </div>
    )}
    isReversed={isReversed}
  />
)
