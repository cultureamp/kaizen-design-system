import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import classnames from "classnames"
import { kaizenTailwindTheme } from "@kaizen/tailwind"
import { UtilityClassTemplate } from "../../components/UtilityClassTemplate"
import { utilityDescription } from "../../helpers/utilityDescription"

const prefix = "w-"
const classEntries: Array<{ utilityClassName: string; cssProperty: string }> =
  Object.entries(kaizenTailwindTheme?.width || []).map(
    ([suffix, cssProperty]) => ({
      utilityClassName: `${prefix}${suffix}`,
      cssProperty,
    })
  )

export default {
  title: "Systems/Tailwind/Utility Class References/Spacing/Width",
  parameters: {
    chromatic: { disable: false },
    docsLayout: "fullPage",
    docs: {
      description: {
        component: utilityDescription(prefix, classEntries[0].utilityClassName),
      },
    },
  },
} satisfies Meta

export const Width: StoryFn<{ isReversed: boolean }> = ({ isReversed }) => (
  <UtilityClassTemplate
    compiledCssPropertyName="width"
    classKeyValues={classEntries}
    renderExampleComponent={(utilityClass): React.ReactElement => (
      <div className="border-solid w-100 rounded-default">
        <div
          className={classnames(
            "flex items-center bg-blue-400 h-100 min-h-[50px]",
            utilityClass
          )}
        >
          {utilityClass.includes("auto") ||
          utilityClass.includes("min") ||
          utilityClass.includes("max") ||
          utilityClass.includes("fit") ? (
            <div className="p-4 my-12 bg-blue-100 border-dashed font-family-paragraph border-w-[1px]">
              Inner content
            </div>
          ) : null}
        </div>
      </div>
    )}
    isReversed={isReversed}
  />
)
